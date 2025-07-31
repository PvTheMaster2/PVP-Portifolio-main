// Main JavaScript file for PVP Projects
document.addEventListener('DOMContentLoaded', function() {
  
  // Initialize all components
  initSmoothScrolling();
  initScrollToTop();
  initFormValidation();
  initProjectFilters();
  initImageLazyLoading();
  initCounterAnimations();
  
});

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Scroll to top button
function initScrollToTop() {
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.innerHTML = `
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
    </svg>
  `;
  scrollToTopBtn.className = 'fixed bottom-8 right-8 bg-primary-600 text-white p-3 rounded-full shadow-lg hover:bg-primary-700 transition-all duration-200 opacity-0 pointer-events-none z-50';
  scrollToTopBtn.setAttribute('aria-label', 'Voltar ao topo');
  
  document.body.appendChild(scrollToTopBtn);
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
      scrollToTopBtn.classList.add('opacity-100');
    } else {
      scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none');
      scrollToTopBtn.classList.remove('opacity-100');
    }
  });
  
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Form validation
function initFormValidation() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add('border-red-500');
          
          // Remove error class after user starts typing
          field.addEventListener('input', function() {
            this.classList.remove('border-red-500');
          });
        }
      });
      
      if (!isValid) {
        e.preventDefault();
        showNotification('Por favor, preencha todos os campos obrigatórios.', 'error');
      }
    });
  });
}

// Project filters functionality
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('[data-category]');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('bg-primary-600', 'text-white'));
      filterButtons.forEach(btn => btn.classList.add('bg-gray-200', 'text-gray-700'));
      this.classList.remove('bg-gray-200', 'text-gray-700');
      this.classList.add('bg-primary-600', 'text-white');
      
      // Filter projects
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          card.classList.add('animate-fade-in');
        } else {
          card.style.display = 'none';
          card.classList.remove('animate-fade-in');
        }
      });
    });
  });
}

// Lazy loading for images
function initImageLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute('data-src');
        img.classList.remove('opacity-0');
        img.classList.add('opacity-100');
        observer.unobserve(img);
      }
    });
  });
  
  images.forEach(img => {
    img.classList.add('opacity-0', 'transition-opacity', 'duration-300');
    imageObserver.observe(img);
  });
}

// Counter animations
function initCounterAnimations() {
  const counters = document.querySelectorAll('[data-counter]');
  
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-counter'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          counter.textContent = Math.floor(current);
        }, 16);
        
        counterObserver.unobserve(counter);
      }
    });
  });
  
  counters.forEach(counter => {
    counterObserver.observe(counter);
  });
}

// Notification system
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300 ${
    type === 'error' ? 'bg-red-500 text-white' : 
    type === 'success' ? 'bg-green-500 text-white' : 
    'bg-blue-500 text-white'
  }`;
  
  notification.innerHTML = `
    <div class="flex items-center">
      <span class="mr-2">
        ${type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️'}
      </span>
      <span>${message}</span>
      <button class="ml-4 text-white hover:text-gray-200" onclick="this.parentElement.parentElement.remove()">
        ✕
      </button>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.classList.remove('translate-x-full');
  }, 100);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.classList.add('translate-x-full');
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 5000);
}

// Utility functions
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Export functions for global use
window.PVPProjects = {
  showNotification,
  debounce,
  throttle
}; 