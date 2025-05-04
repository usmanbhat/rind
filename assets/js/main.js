/**
* Template Name: PhotoFolio
* Template URL: https://bootstrapmade.com/photofolio-bootstrap-photography-website-template/
* Updated: Aug 07 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 1000);
      setTimeout(() => {
        preloader.remove();
      }, 2000);
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  document.addEventListener('DOMContentLoaded', function() {
    // Initialize hero section
    updateHero();
    
    // Initialize tours section
    loadTours();
    
    // Initialize testimonials
    initializeTestimonials();
    
    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true
    });
  });

  function updateHero() {
    const heroTitle = document.querySelector('#hero h1');
    const heroSubtitle = document.querySelector('#hero p.lead');
    
    heroTitle.textContent = siteData.hero.title;
    heroSubtitle.textContent = siteData.hero.subtitle;
  }

  function loadTours() {
    const toursContainer = document.querySelector('#tours .row');
    toursContainer.innerHTML = siteData.featuredTours.map(tour => `
        <div class="col-md-4" data-aos="fade-up">
            <div class="tour-card">
                <img src="${tour.image}" alt="${tour.title}" class="tour-img">
                <div class="tour-content">
                    <h3>${tour.title}</h3>
                    <p>${tour.description}</p>
                    <div class="tour-meta">
                        <span><i class="bi bi-clock"></i> ${tour.duration}</span>
                        <span><i class="bi bi-star-fill"></i> ${tour.rating}</span>
                    </div>
                    <div class="tour-price">${tour.price}</div>
                    <a href="#book" class="btn btn-outline-primary">Book Now</a>
                </div>
            </div>
        </div>
    `).join('');
  }

  function initializeTestimonials() {
    const testimonialWrapper = document.querySelector('.swiper-wrapper');
    testimonialWrapper.innerHTML = siteData.testimonials.map(testimonial => `
        <div class="swiper-slide">
            <div class="testimonial-item">
                <div class="stars">
                    ${'★'.repeat(testimonial.rating)}
                </div>
                <p>${testimonial.text}</p>
                <div class="profile mt-auto">
                    <h4>${testimonial.author}</h4>
                    <small>${testimonial.country}</small>
                </div>
            </div>
        </div>
    `).join('');
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Initialize core functionality
    initializeCore();
    
    // Load dynamic content
    loadDynamicContent();
  });

  function initializeCore() {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });

    // Initialize GLightbox
    const lightbox = GLightbox({
      touchNavigation: true,
      loop: true,
      autoplayVideos: true
    });

    // Initialize Swiper
    const swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });

    // Header scroll effect
    const header = document.querySelector('.header-modern');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  function loadDynamicContent() {
    // Load Tours
    const toursContainer = document.getElementById('tours-container');
    if (toursContainer && window.siteData?.tours) {
      toursContainer.innerHTML = window.siteData.tours.map(tour => `
        <div class="col-lg-4 col-md-6" data-aos="fade-up">
          <div class="tour-card shadow-sm rounded h-100" style="background:var(--surface);color:var(--text);">
            <img src="${tour.image}" alt="${tour.title}" class="img-fluid rounded-top" style="height:200px;width:100%;object-fit:cover;">
            <div class="p-4">
              <h4>${tour.title}</h4>
              <p class="text-muted">${tour.description}</p>
              <div class="d-flex justify-content-between mb-3">
                <span><i class="bi bi-clock"></i> ${tour.duration}</span>
                <span><i class="bi bi-star-fill text-warning"></i> ${tour.rating}</span>
              </div>
              <div class="tour-price mb-3 text-primary fw-bold">${tour.price}</div>
              <ul class="list-unstyled mb-4">
                ${tour.includes.map(item => `
                  <li><i class="bi bi-check-circle text-success"></i> ${item}</li>
                `).join('')}
              </ul>
              <a href="#contact" class="btn btn-primary w-100">Book Now</a>
            </div>
          </div>
        </div>
      `).join('');
    }

    // Load Locations
    const locationsContainer = document.getElementById('locations-container');
    if (locationsContainer && window.siteData?.locations) {
      locationsContainer.innerHTML = window.siteData.locations.map(location => `
        <div class="col-lg-4 col-md-6" data-aos="fade-up">
          <div class="location-card shadow-sm rounded h-100" style="background:var(--surface);color:var(--text);">
            <img src="${location.image}" alt="${location.name}" class="img-fluid rounded-top" style="height:200px;width:100%;object-fit:cover;">
            <div class="p-4">
              <h4>${location.name}</h4>
              <p class="text-muted">${location.description}</p>
              <div class="d-flex justify-content-between mb-3">
                <span><i class="bi bi-clock"></i> ${location.duration}</span>
                <span class="text-primary fw-bold">${location.price}</span>
              </div>
              <div class="location-highlights">
                <h5 class="mb-3">Highlights:</h5>
                <ul class="list-unstyled">
                  ${location.highlights.map(highlight => `
                    <li><i class="bi bi-gem text-primary"></i> ${highlight}</li>
                  `).join('')}
                </ul>
              </div>
            </div>
          </div>
        </div>
      `).join('');
    }
  }

  function loadRandomGalleryImages() {
    const galleryContainer = document.querySelector('#gallery .row');
    if (!galleryContainer) return;

    // Shuffle array and get first 5 items
    const randomImages = galleryImages
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);

    galleryContainer.innerHTML = randomImages.map(img => `
        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
            <div class="gallery-item">
                <a href="${img.src}" class="glightbox" data-gallery="gallery-random">
                    <img src="${img.src}" 
                         alt="${img.title}" 
                         class="img-fluid" 
                         loading="lazy">
                    <div class="gallery-overlay">
                        <div class="gallery-info">
                            <h4>${img.title}</h4>
                            <p>${img.description}</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    `).join('');

    // Reinitialize GLightbox
    const lightbox = GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true
    });
  }

  // Call function when DOM loads
  document.addEventListener('DOMContentLoaded', loadRandomGalleryImages);
})();