
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
