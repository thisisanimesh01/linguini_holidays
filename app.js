
document.addEventListener('DOMContentLoaded', () => {
  renderTours(toursData);
  populateCallbackToursSelect();
  setupScrollAnimations();
  initHeaderScroll();
});

function renderTours(tours) {
  const container = document.getElementById('tours-container');
  const countBadge = document.getElementById('package-count-badge');

  if (!container) return;
  container.innerHTML = '';
  countBadge.textContent = `Showing ${tours.length} Tours`;

  if (tours.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: white; border-radius: 12px; border: 1px dashed var(--border-indigo);">
        <i class="fa-solid fa-map-location-dot" style="font-size: 3rem; color: var(--primary-indigo); margin-bottom: 16px;"></i>
        <h3 style="color: var(--text-dark); margin-bottom: 8px;">No packages found matching criteria</h3>
        <p style="color: var(--text-muted); margin-bottom: 20px;">Try clearing some filters or choose a different destination from Linguini itineraries.</p>
        <button class="btn-primary" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  tours.forEach(tour => {
    // Generate route pills
    const stops = tour.itinerary.slice(1, 4).map(item => {
      const words = item.title.split(' ').slice(0, 3).join(' ');
      return `<span class="stop-pill"><i class="fa-solid fa-circle-dot" style="font-size: 0.5rem; margin-right: 4px;"></i>${words}</span>`;
    }).join('');

    const card = document.createElement('div');
    card.className = 'tour-card';
    card.setAttribute('data-animate', '');
    card.innerHTML = `
      <!-- Trip Poster / Photo Space -->
      <div class="card-img-wrap">
        <span class="card-badge">${tour.badge}</span>
        <img src="${tour.image}" alt="${tour.name}" loading="lazy" onerror="this.onerror=null; this.src='images/IMG_1690.PNG';">
        <div class="card-duration-badge">
          <i class="fa-regular fa-clock"></i> ${tour.duration}
        </div>
      </div>

      <div class="card-body">
        <div class="card-meta-top">
          <div class="card-rating">
            <i class="fa-solid fa-star"></i>
            <span>${tour.rating ? tour.rating.toFixed(1) : '4.9'}</span>
            <small>(${tour.reviewsCount || 100})</small>
          </div>
          <span class="card-dest-tag">${tour.destination}</span>
        </div>
        <h3 class="card-title" title="${tour.name}">${tour.name}</h3>
        <div class="route-stops">
          ${stops}
        </div>
        <div class="card-footer">
          <div class="price-block">
            <span class="original-price">INR ${tour.originalPrice.toLocaleString('en-IN')}</span>
            <span class="current-price">₹${tour.discountedPrice.toLocaleString('en-IN')} <small>/Adult</small></span>
            <span class="save-amount">${tour.discount}</span>
          </div>
          <div class="card-actions">
            <button class="btn-outline btn-card-action" onclick="openItineraryModal('${tour.id}')">
              View Itinerary
            </button>
            <button class="card-btn btn-card-action" onclick="openCallbackModal('${tour.name}')">
              Book
            </button>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
  setupScrollAnimations();
}

// Populate tour select box in callback modal
function populateCallbackToursSelect() {
  const select = document.getElementById('cb-tour');
  if (!select) return;
  select.innerHTML = '';
  toursData.forEach(tour => {
    const opt = document.createElement('option');
    opt.value = tour.name;
    opt.textContent = `${tour.name} (₹${tour.discountedPrice.toLocaleString('en-IN')})`;
    select.appendChild(opt);
  });
}

// Filter handling
function applyFilters() {
  const destVal = document.getElementById('filter-destination').value;
  const catVal = document.getElementById('filter-category').value;
  const sortVal = document.getElementById('filter-sort').value;

  // Sync quick tag button if destination dropdown was changed directly
  document.querySelectorAll('.tag-btn').forEach(btn => {
    if (btn.getAttribute('data-filter') === destVal) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  let filtered = toursData.filter(tour => {
    const matchDest = (destVal === 'all') || (tour.destination.toLowerCase() === destVal.toLowerCase());
    const matchCat = (catVal === 'all') || (tour.category.toLowerCase() === catVal.toLowerCase());
    return matchDest && matchCat;
  });

  // Sorting
  if (sortVal === 'price-asc') {
    filtered.sort((a, b) => a.discountedPrice - b.discountedPrice);
  } else if (sortVal === 'price-desc') {
    filtered.sort((a, b) => b.discountedPrice - a.discountedPrice);
  } else if (sortVal === 'duration') {
    filtered.sort((a, b) => b.itinerary.length - a.itinerary.length);
  } else {
    filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
  }

  renderTours(filtered);
}

function filterByTag(dest, btnElement) {
  const select = document.getElementById('filter-destination');
  if (select) {
    select.value = dest;
  }

  document.querySelectorAll('.tag-btn').forEach(btn => btn.classList.remove('active'));
  if (btnElement) {
    btnElement.classList.add('active');
  } else {
    const matchBtn = document.querySelector(`.tag-btn[data-filter="${dest}"]`);
    if (matchBtn) matchBtn.classList.add('active');
  }

  applyFilters();
  scrollToTours();
}

function resetFilters() {
  document.getElementById('filter-destination').value = 'all';
  document.getElementById('filter-category').value = 'all';
  document.getElementById('filter-sort').value = 'popular';
  document.querySelectorAll('.tag-btn').forEach(btn => btn.classList.remove('active'));
  const allBtn = document.querySelector('.tag-btn[data-filter="all"]');
  if (allBtn) allBtn.classList.add('active');
  applyFilters();
}

function scrollToTours() {
  const el = document.getElementById('featured-tours');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

// Detailed Itinerary Modal
function openItineraryModal(tourId) {
  const tour = toursData.find(t => t.id === tourId);
  if (!tour) return;

  const modal = document.getElementById('itinerary-modal');
  const title = document.getElementById('modal-title');
  const badge = document.getElementById('modal-badge');
  const body = document.getElementById('modal-body-content');

  title.textContent = tour.name;
  badge.textContent = `${tour.duration}`;

  let itineraryHtml = tour.itinerary.map(item => `
    <div class="itinerary-day-box">
      <div class="itinerary-day-header">
        <span class="day-tag">${item.day}</span>
        <span>${item.title}</span>
      </div>
      <div class="itinerary-day-content">
        ${item.desc}
      </div>
    </div>
  `).join('');

  let inclusionsHtml = tour.inclusions.map(inc => `
    <li style="margin-bottom: 6px; display: flex; align-items: flex-start; gap: 8px;">
      <i class="fa-solid fa-check" style="color: #10b981; margin-top: 4px;"></i>
      <span>${inc}</span>
    </li>
  `).join('');

  let exclusionsHtml = tour.exclusions.map(exc => `
    <li class="inc-exc-item">
      <i class="fa-solid fa-xmark text-danger"></i>
      <span>${exc}</span>
    </li>
  `).join('');

  let inclusionsHtmlFinal = tour.inclusions.map(inc => `
    <li class="inc-exc-item">
      <i class="fa-solid fa-check text-success"></i>
      <span>${inc}</span>
    </li>
  `).join('');

  let highlightsHtml = (tour.highlights && tour.highlights.length) ? `
    <h4 class="modal-subheading">Key Highlights</h4>
    <div class="modal-highlights-grid">
      ${tour.highlights.map(h => `<div class="highlight-chip"><i class="fa-solid fa-sparkles"></i><span>${h}</span></div>`).join('')}
    </div>
  ` : '';

  body.innerHTML = `
    <div class="itinerary-meta-strip">
      <div class="meta-item">
        <strong class="meta-label">Duration</strong>
        <p class="meta-val">${tour.duration}</p>
      </div>
      <div class="meta-item">
        <strong class="meta-label">Pickup & Drop</strong>
        <p class="meta-val">${tour.pickupDrop}</p>
      </div>
      <div class="meta-item">
        <strong class="meta-label">Meals Included</strong>
        <p class="meta-val">${tour.meals}</p>
      </div>
      <div class="meta-item meta-price-block">
        <span class="meta-old-price">₹${tour.originalPrice.toLocaleString('en-IN')}</span>
        <h3 class="meta-price-val">₹${tour.discountedPrice.toLocaleString('en-IN')} <small>+5% GST</small></h3>
      </div>
    </div>

    <h4 class="modal-subheading">Trip Overview</h4>
    <p class="modal-overview-text">${tour.overview}</p>

    ${highlightsHtml}

    <h4 class="modal-subheading">Day-Wise Detailed Itinerary</h4>
    <div class="itinerary-days-container">
      ${itineraryHtml}
    </div>

    <div class="inclusions-exclusions-grid">
      <div class="inc-exc-box">
        <h4 class="inc-exc-title"><i class="fa-solid fa-circle-check text-success"></i> What's Included</h4>
        <ul class="inc-exc-list">
          ${inclusionsHtmlFinal}
        </ul>
      </div>

      <div class="inc-exc-box">
        <h4 class="inc-exc-title"><i class="fa-solid fa-circle-xmark text-danger"></i> What's Not Included</h4>
        <ul class="inc-exc-list">
          ${exclusionsHtml}
        </ul>
      </div>
    </div>

    <div class="modal-footer-actions">
      <button class="btn-outline modal-btn" onclick="closeModal('itinerary-modal')">Close</button>
      <button class="btn-primary modal-btn" onclick="closeModal('itinerary-modal'); openCallbackModal('${tour.name}');">
        <i class="fa-solid fa-phone"></i> Request Callback for This Trip
      </button>
    </div>
  `;

  modal.classList.add('active');
  document.body.classList.add('modal-open');
}

// Callback Modal
function openCallbackModal(preselectedTour) {
  const modal = document.getElementById('callback-modal');
  if (preselectedTour) {
    const select = document.getElementById('cb-tour');
    if (select) select.value = preselectedTour;
  }
  modal.classList.add('active');
  document.body.classList.add('modal-open');
}

function openCancellationModal() {
  const modal = document.getElementById('policy-modal');
  if (modal) modal.classList.add('active');
  document.body.classList.add('modal-open');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
  
  // Only remove modal-open class if no other modal is currently active
  const openModals = document.querySelectorAll('.modal-backdrop.active');
  if (openModals.length === 0 && !document.getElementById('mobile-drawer')?.classList.contains('active')) {
    document.body.classList.remove('modal-open');
  }
}

// Mobile Menu Navigation Handlers
function toggleMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-drawer-overlay');
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  
  if (!drawer || !overlay) return;
  const isOpen = drawer.classList.contains('active');
  
  if (isOpen) {
    closeMobileMenu();
  } else {
    drawer.classList.add('active');
    overlay.classList.add('active');
    if (toggleBtn) toggleBtn.classList.add('active');
    document.body.classList.add('modal-open');
  }
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-drawer-overlay');
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  
  if (drawer) drawer.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  if (toggleBtn) toggleBtn.classList.remove('active');
  
  const openModals = document.querySelectorAll('.modal-backdrop.active');
  if (openModals.length === 0) {
    document.body.classList.remove('modal-open');
  }
}

// Close drawer automatically if window is resized past mobile breakpoint (e.g. tablet/laptop)
window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    closeMobileMenu();
  }
});

// Close modals or drawer with Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMobileMenu();
    document.querySelectorAll('.modal-backdrop.active').forEach(m => {
      m.classList.remove('active');
    });
    document.body.classList.remove('modal-open');
  }
});

// Handle Callback Form Submit
function handleCallbackSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('cb-name').value;
  const phone = document.getElementById('cb-phone').value;
  const tour = document.getElementById('cb-tour').value;

  alert(`Thank you ${name}! Your callback request for "${tour}" has been received. Our Linguini Holidays trip specialist will call or WhatsApp you at ${phone} within 15 minutes.`);

  closeModal('callback-modal');
  event.target.reset();
}

// Close modals when clicking backdrop
window.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-backdrop')) {
    e.target.classList.remove('active');
    const openModals = document.querySelectorAll('.modal-backdrop.active');
    if (openModals.length === 0) {
      document.body.classList.remove('modal-open');
    }
  }
});

// Glassmorphism Header Scroll Detection
function initHeaderScroll() {
  const header = document.querySelector('.main-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Scroll to Top Handler
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
  const btn = document.getElementById('scroll-to-top');
  if (btn) {
    if (window.scrollY > 350) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }
});

// Scroll Reveal Observer
function setupScrollAnimations() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('[data-animate]').forEach(el => el.classList.add('in-view'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('[data-animate]:not(.in-view)').forEach(el => observer.observe(el));
}

// ==========================================================================
// Jupiter-Inspired Orbital Paper Airplane & Floating Glass Window
// ==========================================================================
let isPlaneAnimating = false;

function handlePlanTripClick(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  // Prevent overlapping animations from rapid multiple clicks
  if (isPlaneAnimating) return;
  isPlaneAnimating = true;

  // 1. Determine origin coordinates exactly from the clicked trigger button
  const triggerBtn = (event && event.currentTarget) ? event.currentTarget : (document.querySelector('.desktop-cta') || document.body);
  const btnRect = triggerBtn.getBoundingClientRect();

  // Button center coordinates
  const startX = btnRect.left + (btnRect.width ? btnRect.width / 2 : 0);
  const startY = btnRect.top + (btnRect.height ? btnRect.height / 2 : 0);

  // Target landing position (viewport center inside floating glass window)
  const endX = window.innerWidth / 2;
  const endY = window.innerHeight / 2;

  const vw = window.innerWidth;
  const vh = window.innerHeight;

  // 2. Build DOM elements for overlay, floating glass window, origami plane, and orbital trails
  const overlay = document.createElement('div');
  overlay.className = 'flight-transition-overlay';
  overlay.id = 'flight-transition-overlay';

  overlay.innerHTML = `
    <div class="flight-scrim" id="flight-scrim"></div>

    <svg class="flight-trails-layer" viewBox="0 0 ${vw} ${vh}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="orbitalTrailGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <!-- Multiple Delicate Curved Orbital Trails with Depth & Motion Blur -->
      <path id="trail-outer-left" class="flight-trail flight-trail-outer" filter="url(#orbitalTrailGlow)" d="" />
      <path id="trail-mid-left" class="flight-trail flight-trail-mid" d="" />
      <path id="trail-keel" class="flight-trail flight-trail-keel" d="" />
      <path id="trail-mid-right" class="flight-trail flight-trail-mid" d="" />
      <path id="trail-outer-right" class="flight-trail flight-trail-outer" filter="url(#orbitalTrailGlow)" d="" />
    </svg>

    <!-- Compact Central Floating Glass Window (~440px x 260px) -->
    <div class="flight-floating-window" id="flight-floating-window">
      <div class="window-decor-glow"></div>
      <div class="landing-beacon">
        <div class="beacon-ring"></div>
        <div class="beacon-ring ring-2"></div>
      </div>
      <div class="landing-ripple" id="landing-ripple"></div>
      <div class="floating-window-inner">
        <div class="window-content" id="flight-window-content">
          <div class="window-header-pill" id="flight-status-pill">
            <i class="fa-solid fa-compass fa-spin" style="--fa-animation-duration: 4s;"></i> Orbital Itinerary
          </div>
          <h3 class="window-title">Chart Your Journey</h3>
          <p class="window-subtitle">Orbital trajectory locked. Preparing your personalized travel itinerary...</p>
        </div>
      </div>
    </div>

    <!-- Realistic Folded Origami Paper Airplane -->
    <div class="flight-paper-airplane" id="flight-paper-airplane">
      <svg class="origami-airplane-svg" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="planeShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="rgba(8, 6, 24, 0.45)" />
          </filter>
        </defs>
        <g filter="url(#planeShadow)">
          <!-- Underbody Keel -->
          <polygon points="56,20 12,20 22,23" fill="#7d75a8" />
          <!-- Bottom Wing (Shadow Facet) -->
          <polygon points="56,20 22,23 6,36" fill="#bbb5db" />
          <!-- Lower Center Fold Crease -->
          <polygon points="56,20 18,20 22,23" fill="#dedaf2" />
          <!-- Upper Center Fold Crease -->
          <polygon points="56,20 18,20 22,17" fill="#f3f1fc" />
          <!-- Top Wing (Light Facet) -->
          <polygon points="56,20 22,17 6,4" fill="#ffffff" />
          <!-- High-Precision Fold/Crease Lines -->
          <line x1="56" y1="20" x2="6" y2="4" stroke="#ffffff" stroke-width="0.9" />
          <line x1="56" y1="20" x2="18" y2="20" stroke="rgba(145,135,190,0.7)" stroke-width="0.75" />
          <line x1="56" y1="20" x2="6" y2="36" stroke="rgba(160,155,200,0.5)" stroke-width="0.8" />
        </g>
      </svg>
    </div>
  `;

  document.body.appendChild(overlay);

  const scrim = overlay.querySelector('#flight-scrim');
  const floatingWindow = overlay.querySelector('#flight-floating-window');
  const airplane = overlay.querySelector('#flight-paper-airplane');
  const ripple = overlay.querySelector('#landing-ripple');
  const statusPill = overlay.querySelector('#flight-status-pill');

  const trailOuterLeft = overlay.querySelector('#trail-outer-left');
  const trailMidLeft = overlay.querySelector('#trail-mid-left');
  const trailKeel = overlay.querySelector('#trail-keel');
  const trailMidRight = overlay.querySelector('#trail-mid-right');
  const trailOuterRight = overlay.querySelector('#trail-outer-right');

  // Trigger subtle background scrim fade
  requestAnimationFrame(() => {
    if (scrim) scrim.classList.add('visible');
  });

  // Helper: Cubic Bezier formula and tangent velocity
  function evalCubicBezier(p0, p1, p2, p3, t) {
    const mt = 1 - t;
    const mt2 = mt * mt;
    const mt3 = mt2 * mt;
    const t2 = t * t;
    const t3 = t2 * t;

    const x = mt3 * p0.x + 3 * mt2 * t * p1.x + 3 * mt * t2 * p2.x + t3 * p3.x;
    const y = mt3 * p0.y + 3 * mt2 * t * p1.y + 3 * mt * t2 * p2.y + t3 * p3.y;

    const vx = 3 * mt2 * (p1.x - p0.x) + 6 * mt * t * (p2.x - p1.x) + 3 * t2 * (p3.x - p2.x);
    const vy = 3 * mt2 * (p1.y - p0.y) + 6 * mt * t * (p2.y - p1.y) + 3 * t2 * (p3.y - p2.y);

    return { x, y, vx, vy };
  }

  // ========================================================================
  // 1. Take-off & North-East Orbital Trajectory Setup
  // ========================================================================
  // Originates from button and sweeps in the North-East direction (+X, -Y)
  const p1_p0 = { x: startX, y: startY };
  let p1_p1, p1_p2, p1_p3;
  if (startY < 140) {
    // Header CTA: sweeps up and to the right (North-East) into the upper sky
    p1_p1 = { x: startX + 60, y: startY - 45 };
    p1_p2 = { x: startX + 160, y: startY - 110 };
    p1_p3 = { x: Math.max(startX + 260, vw + 60), y: -90 };
  } else {
    // Lower CTA: direct North-East climb
    p1_p1 = { x: startX + 50, y: startY - 140 };
    p1_p2 = { x: startX + 140, y: startY * 0.35 };
    p1_p3 = { x: Math.max(startX + 240, vw + 60), y: -90 };
  }

  // ========================================================================
  // 2. Bottom-Left Re-entry & Elliptical Orbital Sweep Setup
  // ========================================================================
  // Re-enters from bottom-left corner of viewport and sweeps upwards along
  // an elegant elliptical orbital curve towards the center
  const p2_p0 = { x: -35, y: vh + 25 }; // Bottom-left corner
  const p2_p1 = { x: Math.max(60, vw * 0.24), y: vh * 0.5 }; // Elliptical ascent along lower flank
  const p2_p2 = { x: endX - 120, y: endY + 20 }; // Orbital approach leveling into center
  const p2_p3 = { x: endX, y: endY }; // Docking at center of floating window

  // Timing: Snappy & fast pacing (~380ms South-East flight + ~500ms swoop from bottom)
  const durationP1 = 380;
  const durationP2 = 500;
  const startTime = performance.now();

  let currentPhase = 1;
  let phase2StartTime = 0;
  let hasShownWindow = false;

  // Trail history buffers (delicate multi-depth orbital trails)
  const trailOuterLeftPts = [];
  const trailMidLeftPts = [];
  const trailKeelPts = [];
  const trailMidRightPts = [];
  const trailOuterRightPts = [];
  const maxTrailSamples = 20;

  // Escape key cleanup listener
  const escapeHandler = (e) => {
    if (e.key === 'Escape') {
      cleanup();
      openCallbackModal();
    }
  };
  window.addEventListener('keydown', escapeHandler);

  function cleanup() {
    window.removeEventListener('keydown', escapeHandler);
    if (overlay && overlay.parentNode) {
      overlay.parentNode.removeChild(overlay);
    }
    isPlaneAnimating = false;
  }

  function renderTrails() {
    const renderPath = (pts) => {
      if (pts.length < 2) return '';
      let d = `M ${pts[0].x.toFixed(1)} ${pts[0].y.toFixed(1)}`;
      for (let i = 1; i < pts.length; i++) {
        d += ` L ${pts[i].x.toFixed(1)} ${pts[i].y.toFixed(1)}`;
      }
      return d;
    };
    trailOuterLeft.setAttribute('d', renderPath(trailOuterLeftPts));
    trailMidLeft.setAttribute('d', renderPath(trailMidLeftPts));
    trailKeel.setAttribute('d', renderPath(trailKeelPts));
    trailMidRight.setAttribute('d', renderPath(trailMidRightPts));
    trailOuterRight.setAttribute('d', renderPath(trailOuterRightPts));
  }

  function clearTrails() {
    trailOuterLeftPts.length = 0;
    trailMidLeftPts.length = 0;
    trailKeelPts.length = 0;
    trailMidRightPts.length = 0;
    trailOuterRightPts.length = 0;
    trailOuterLeft.setAttribute('d', '');
    trailMidLeft.setAttribute('d', '');
    trailKeel.setAttribute('d', '');
    trailMidRight.setAttribute('d', '');
    trailOuterRight.setAttribute('d', '');
  }

  // Animation frame loop
  function animateFrame(now) {
    if (currentPhase === 1) {
      // --------------------------------------------------------------------
      // PHASE 1: Take-off & Upper Orbital Trajectory
      // --------------------------------------------------------------------
      const elapsedP1 = now - startTime;
      const linearT = Math.min(1, Math.max(0, elapsedP1 / durationP1));
      // Natural aerodynamic acceleration as orbital speed builds up
      const t = Math.pow(linearT, 1.45);

      const pt = evalCubicBezier(p1_p0, p1_p1, p1_p2, p1_p3, t);
      const heading = Math.atan2(pt.vy, pt.vx) * (180 / Math.PI);
      const bank = Math.sin(linearT * Math.PI) * -14;

      // Emerge from button: gentle scale-up into full size
      const scale = 0.35 + Math.min(1, linearT * 1.5) * 0.7;
      const planeOpacity = Math.min(1, linearT * 3);

      airplane.style.opacity = planeOpacity;
      airplane.style.transform = `translate3d(${pt.x - 29}px, ${pt.y - 19}px, 0) rotate(${heading}deg) rotateX(${bank}deg) scale(${scale})`;

      // Record multi-depth orbital trails
      const rad = heading * (Math.PI / 180);
      const cosR = Math.cos(rad);
      const sinR = Math.sin(rad);

      const olX = pt.x + (-22 * cosR - -16 * sinR) * scale;
      const olY = pt.y + (-22 * sinR + -16 * cosR) * scale;
      const mlX = pt.x + (-16 * cosR - -8 * sinR) * scale;
      const mlY = pt.y + (-16 * sinR + -8 * cosR) * scale;
      const kX  = pt.x + (-18 * cosR) * scale;
      const kY  = pt.y + (-18 * sinR) * scale;
      const mrX = pt.x + (-16 * cosR - 8 * sinR) * scale;
      const mrY = pt.y + (-16 * sinR + 8 * cosR) * scale;
      const orX = pt.x + (-22 * cosR - 16 * sinR) * scale;
      const orY = pt.y + (-22 * sinR + 16 * cosR) * scale;

      trailOuterLeftPts.push({ x: olX, y: olY });
      trailMidLeftPts.push({ x: mlX, y: mlY });
      trailKeelPts.push({ x: kX, y: kY });
      trailMidRightPts.push({ x: mrX, y: mrY });
      trailOuterRightPts.push({ x: orX, y: orY });

      if (trailOuterLeftPts.length > maxTrailSamples) {
        trailOuterLeftPts.shift();
        trailMidLeftPts.shift();
        trailKeelPts.shift();
        trailMidRightPts.shift();
        trailOuterRightPts.shift();
      }
      renderTrails();

      if (linearT < 1) {
        requestAnimationFrame(animateFrame);
      } else {
        // Transition to Phase 2: clear trails for clean bottom-left entrance
        currentPhase = 2;
        phase2StartTime = performance.now();
        clearTrails();
        requestAnimationFrame(animateFrame);
      }
    } else if (currentPhase === 2) {
      // --------------------------------------------------------------------
      // PHASE 2: Bottom-Left Re-entry & Elliptical Orbital Sweep to Center
      // --------------------------------------------------------------------
      const elapsedP2 = now - phase2StartTime;
      const linearT = Math.min(1, Math.max(0, elapsedP2 / durationP2));
      // Natural Keplerian orbital ease-out: swift entrance from deep space, decelerating smoothly
      const t = 1 - Math.pow(1 - linearT, 2.2);

      const pt = evalCubicBezier(p2_p0, p2_p1, p2_p2, p2_p3, t);
      const rawHeading = Math.atan2(pt.vy, pt.vx) * (180 / Math.PI);

      // Smoothly blend heading into horizontal 0deg as it docks inside window
      let heading = rawHeading;
      if (t > 0.72) {
        const blend = (t - 0.72) / 0.28;
        heading = rawHeading * (1 - blend);
      }
      const bank = Math.sin(linearT * Math.PI) * -18;

      // Reveal floating liquid glass window as the airplane approaches the center
      if (!hasShownWindow && linearT > 0.16) {
        hasShownWindow = true;
        if (floatingWindow) floatingWindow.classList.add('visible');
      }

      // Orbital scale perspective: sweeps in gracefully, settling to docking scale
      const scale = 1.12 - t * 0.22;

      airplane.style.opacity = 1;
      airplane.style.transform = `translate3d(${pt.x - 29}px, ${pt.y - 19}px, 0) rotate(${heading}deg) rotateX(${bank}deg) scale(${scale})`;

      // Record Phase 2 multi-depth orbital trails
      const rad = heading * (Math.PI / 180);
      const cosR = Math.cos(rad);
      const sinR = Math.sin(rad);

      const olX = pt.x + (-22 * cosR - -16 * sinR) * scale;
      const olY = pt.y + (-22 * sinR + -16 * cosR) * scale;
      const mlX = pt.x + (-16 * cosR - -8 * sinR) * scale;
      const mlY = pt.y + (-16 * sinR + -8 * cosR) * scale;
      const kX  = pt.x + (-18 * cosR) * scale;
      const kY  = pt.y + (-18 * sinR) * scale;
      const mrX = pt.x + (-16 * cosR - 8 * sinR) * scale;
      const mrY = pt.y + (-16 * sinR + 8 * cosR) * scale;
      const orX = pt.x + (-22 * cosR - 16 * sinR) * scale;
      const orY = pt.y + (-22 * sinR + 16 * cosR) * scale;

      trailOuterLeftPts.push({ x: olX, y: olY });
      trailMidLeftPts.push({ x: mlX, y: mlY });
      trailKeelPts.push({ x: kX, y: kY });
      trailMidRightPts.push({ x: mrX, y: mrY });
      trailOuterRightPts.push({ x: orX, y: orY });

      if (trailOuterLeftPts.length > maxTrailSamples) {
        trailOuterLeftPts.shift();
        trailMidLeftPts.shift();
        trailKeelPts.shift();
        trailMidRightPts.shift();
        trailOuterRightPts.shift();
      }
      renderTrails();

      if (linearT < 1) {
        requestAnimationFrame(animateFrame);
      } else {
        // Touchdown inside the floating liquid glass window
        onFlightTouchdown();
      }
    }
  }

  function onFlightTouchdown() {
    // Touchdown beacon ripple & state update
    if (ripple) ripple.classList.add('active');
    if (floatingWindow) floatingWindow.classList.add('landed');

    if (statusPill) {
      statusPill.classList.add('ready');
      statusPill.innerHTML = '<i class="fa-solid fa-check"></i> Destination Reached';
    }

    airplane.style.transition = 'transform 0.22s ease, opacity 0.22s ease';
    airplane.style.transform = `translate3d(${endX - 29}px, ${endY - 19}px, 0) rotate(0deg) scale(0.9)`;

    // Fade out trails smoothly
    const trailsSvg = overlay.querySelector('.flight-trails-layer');
    if (trailsSvg) {
      trailsSvg.style.transition = 'opacity 0.22s ease';
      trailsSvg.style.opacity = '0';
    }

    // Smooth reveal of liquid glass booking modal
    setTimeout(() => {
      if (floatingWindow) floatingWindow.classList.add('leaving');
      if (scrim) scrim.style.opacity = '0';
      if (airplane) airplane.style.opacity = '0';

      setTimeout(() => {
        cleanup();
        // Seamlessly open the liquid glass booking modal
        openCallbackModal();
      }, 120);
    }, 120);
  }

  requestAnimationFrame(animateFrame);
}
