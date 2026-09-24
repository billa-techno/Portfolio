// Mobile menu
document.querySelector('.nav-toggle')?.addEventListener('click', () => {
  document.querySelector('.nav-links')?.classList.toggle('open');
});

// Certifications
document.querySelectorAll('.cert-card').forEach((card, index) => {
  if (index >= 6) card.style.display = 'none';
});

let certExpanded = false;

function toggleCerts() {
  certExpanded = !certExpanded;

  document.querySelectorAll('.cert-card').forEach((card, index) => {
    if (index >= 6) {
      card.style.display = certExpanded ? 'flex' : 'none';
    }
  });

  const button = document.getElementById('certShowMore');
  if (button) {
    button.innerHTML = certExpanded
      ? 'View Less &uarr;'
      : 'View More &darr;';
  }
}

// Gallery
let galleryExpanded = false;

function toggleGallery() {
  galleryExpanded = !galleryExpanded;

  document.querySelectorAll('.gallery-hidden').forEach(element => {
    element.classList.toggle('gallery-visible', galleryExpanded);
  });

  const button = document.getElementById('galleryShowMore');
  if (button) {
    button.innerHTML = galleryExpanded
      ? 'View Less &uarr;'
      : 'View More &darr;';
  }
}

// Smooth scrolling + close mobile menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const target = document.querySelector(link.getAttribute('href'));

    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }

    document.querySelector('.nav-links')?.classList.remove('open');
  });
});
