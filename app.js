
document.addEventListener('DOMContentLoaded', () => {
  renderTours(toursData);
  populateCallbackToursSelect();
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
    card.innerHTML = `
      <!-- Trip Poster / Photo Space -->
      <div class="card-img-wrap">
        <span class="card-badge">${tour.badge}</span>
        <span class="card-code">${tour.code}</span>
        <img src="${tour.image}" alt="${tour.name}" loading="lazy" onerror="this.onerror=null; this.src='images/IMG_1690.PNG';">
        <div class="card-duration-badge">
          <i class="fa-regular fa-clock"></i> ${tour.duration}
        </div>
      </div>

      <div class="card-body">
        <div class="card-rating-row">
          <span class="stars"><i class="fa-solid fa-star"></i></span>
          <span class="rating-num">${tour.rating}</span>
          <span class="rating-count">(${tour.reviewsCount} reviews)</span>
          <span style="margin-left: auto; font-size: 0.72rem; color: var(--primary-indigo); font-weight: 700; background: var(--indigo-tint); padding: 2px 8px; border-radius: 4px;">${tour.destination}</span>
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
          <div style="display: flex; gap: 6px;">
            <button class="btn-outline" style="padding: 6px 12px; font-size: 0.8rem;" onclick="openItineraryModal('${tour.id}')">
              View Itinerary
            </button>
            <button class="card-btn" onclick="openCallbackModal('${tour.name}')">
              Book
            </button>
          </div>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
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
  badge.textContent = `${tour.code} • ${tour.duration}`;

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
    <li style="margin-bottom: 6px; display: flex; align-items: flex-start; gap: 8px;">
      <i class="fa-solid fa-xmark" style="color: #ef4444; margin-top: 4px;"></i>
      <span>${exc}</span>
    </li>
  `).join('');

  body.innerHTML = `
    <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-bottom: 24px; background: var(--bg-ivory); padding: 18px; border-radius: 12px; border: 1px solid var(--border-light);">
      <div>
        <strong style="color: var(--primary-indigo); font-size: 0.8rem; text-transform: uppercase;">Duration</strong>
        <p style="font-weight: 700; color: var(--text-dark);">${tour.duration}</p>
      </div>
      <div>
        <strong style="color: var(--primary-indigo); font-size: 0.8rem; text-transform: uppercase;">Pickup & Drop</strong>
        <p style="font-weight: 700; color: var(--text-dark);">${tour.pickupDrop}</p>
      </div>
      <div>
        <strong style="color: var(--primary-indigo); font-size: 0.8rem; text-transform: uppercase;">Meals Included</strong>
        <p style="font-weight: 700; color: var(--text-dark);">${tour.meals}</p>
      </div>
      <div style="margin-left: auto; text-align: right;">
        <span style="font-size: 0.85rem; text-decoration: line-through; color: var(--text-muted);">₹${tour.originalPrice.toLocaleString('en-IN')}</span>
        <h3 style="color: var(--primary-indigo); font-size: 1.6rem; font-weight: 800;">₹${tour.discountedPrice.toLocaleString('en-IN')} <small style="font-size: 0.75rem; color: var(--text-muted);">+5% GST</small></h3>
      </div>
    </div>

    <h4 style="margin-bottom: 10px; color: var(--text-dark);">Trip Overview</h4>
    <p style="color: var(--text-body); line-height: 1.6; margin-bottom: 24px;">${tour.overview}</p>

    <h4 style="margin-bottom: 12px; color: var(--text-dark);">Day-Wise Detailed Itinerary</h4>
    <div style="margin-bottom: 28px;">
      ${itineraryHtml}
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
      <div style="background: white; padding: 18px; border-radius: 12px; border: 1px solid var(--border-light);">
        <h4 style="color: var(--text-dark); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          <i class="fa-solid fa-circle-check" style="color: #10b981;"></i> What's Included
        </h4>
        <ul style="list-style: none; font-size: 0.88rem; color: var(--text-body);">
          ${inclusionsHtml}
        </ul>
      </div>

      <div style="background: white; padding: 18px; border-radius: 12px; border: 1px solid var(--border-light);">
        <h4 style="color: var(--text-dark); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          <i class="fa-solid fa-circle-xmark" style="color: #ef4444;"></i> What's Not Included
        </h4>
        <ul style="list-style: none; font-size: 0.88rem; color: var(--text-body);">
          ${exclusionsHtml}
        </ul>
      </div>
    </div>

    <div style="text-align: right; border-top: 1px solid var(--border-light); padding-top: 18px; display: flex; justify-content: flex-end; gap: 12px;">
      <button class="btn-outline" onclick="closeModal('itinerary-modal')">Close</button>
      <button class="btn-primary" onclick="closeModal('itinerary-modal'); openCallbackModal('${tour.name}');">
        <i class="fa-solid fa-phone"></i> Request Callback for This Trip
      </button>
    </div>
  `;

  modal.classList.add('active');
}

// Callback Modal
function openCallbackModal(preselectedTour) {
  const modal = document.getElementById('callback-modal');
  if (preselectedTour) {
    const select = document.getElementById('cb-tour');
    if (select) select.value = preselectedTour;
  }
  modal.classList.add('active');
}

function openCancellationModal() {
  document.getElementById('policy-modal').classList.add('active');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

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
  }
});
