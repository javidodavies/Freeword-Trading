document.addEventListener('DOMContentLoaded', () => {
  // Initialize all animations
  initScrollAnimations();
  initNavbarScroll();
  initParallaxEffects();
  initHeroAnimations();
  initCardAnimations();
  initButtonAnimations();
});

// Scroll-triggered animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-fade-in, .animate-slide-left, .animate-slide-right, .animate-scale');
  animatedElements.forEach(el => observer.observe(el));
}

// Navbar scroll effect
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  let lastScrollY = window.scrollY;
  
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    lastScrollY = currentScrollY;
  });
}

// Parallax effects
function initParallaxEffects() {
  const parallaxElements = document.querySelectorAll('.parallax-bg');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    parallaxElements.forEach(element => {
      element.style.transform = `translateY(${rate}px)`;
    });
  });
}

// Hero animations
function initHeroAnimations() {
  const heroText = document.getElementById("heroText");
  if (!heroText) return;

  const heroPhrases = [
    "Empowering Science and Industry",
    "Supplying Quality Equipment", 
    "Trusted Since 2002",
    "Official Ultraspec Distributor"
  ];
  let currentPhrase = 0;

  setInterval(() => {
    currentPhrase = (currentPhrase + 1) % heroPhrases.length;
    heroText.classList.add("fade-out");

    setTimeout(() => {
      heroText.textContent = heroPhrases[currentPhrase];
      heroText.classList.remove("fade-out");
      heroText.classList.add("fade-in");
    }, 300);

    setTimeout(() => {
      heroText.classList.remove("fade-in");
    }, 1000);
  }, 4000);
}

// Card hover animations
function initCardAnimations() {
  const cards = document.querySelectorAll('.card, .service-card, .product-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// Button animations
function initButtonAnimations() {
  const buttons = document.querySelectorAll('.btn-primary');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translateY(0)';
    });
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add loading animation to images
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('load', () => {
    img.classList.remove('loading');
  });
  
  img.addEventListener('loadstart', () => {
    img.classList.add('loading');
  });
});

// Custom scripts go here