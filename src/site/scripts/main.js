/**
 * PVP Projects - Main JavaScript
 * Sprint 4: Funcionalidades Avançadas
 * Inclui: sistema de tema, validação de formulário, animações AOS, notificações
 */

// Configurações globais
const CONFIG = {
  animationDuration: 800,
  notificationDuration: 5000,
  scrollThreshold: 100,
  themeKey: 'pvp-theme',
  formValidation: {
    required: 'Este campo é obrigatório',
    email: 'Digite um email válido',
    phone: 'Digite um telefone válido',
    minLength: 'Mínimo de caracteres não atingido',
    maxLength: 'Máximo de caracteres excedido'
  }
};

// Sistema de tema (claro/escuro)
class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem(CONFIG.themeKey) || 'light';
    this.init();
  }

  init() {
    this.applyTheme();
    this.bindEvents();
  }

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.theme);
    this.updateThemeIcon();
  }

  toggle() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem(CONFIG.themeKey, this.theme);
    this.applyTheme();
  }

  updateThemeIcon() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    const icon = toggle.querySelector('svg');
    if (this.theme === 'dark') {
      icon.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
      `;
    } else {
      icon.innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
      `;
    }
  }

  bindEvents() {
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => this.toggle());
    }
  }
}

// Sistema de notificações
class NotificationManager {
  constructor() {
    this.container = document.getElementById('notification-container');
    this.notifications = [];
  }

  show(message, type = 'info', duration = CONFIG.notificationDuration) {
    const notification = this.createNotification(message, type);
    this.container.appendChild(notification);
    this.notifications.push(notification);

    // Animar entrada
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);

    // Auto-remover
    if (duration > 0) {
      setTimeout(() => {
        this.remove(notification);
      }, duration);
    }

    return notification;
  }

  createNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type} transform translate-x-full opacity-0 transition-all duration-300`;
    
    const icons = {
      success: '✓',
      error: '✕',
      warning: '⚠',
      info: 'ℹ'
    };

    notification.innerHTML = `
      <div class="flex items-center p-4 rounded-lg shadow-lg max-w-sm">
        <span class="text-lg mr-3">${icons[type] || icons.info}</span>
        <span class="flex-1">${message}</span>
        <button class="ml-3 text-gray-400 hover:text-gray-600" onclick="notificationManager.remove(this.parentElement.parentElement)">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    `;

    return notification;
  }

  remove(notification) {
    if (!notification) return;
    
    notification.classList.remove('show');
    notification.classList.add('translate-x-full', 'opacity-0');
    
    setTimeout(() => {
      if (notification.parentElement) {
        notification.parentElement.removeChild(notification);
      }
      this.notifications = this.notifications.filter(n => n !== notification);
    }, 300);
  }

  success(message) {
    return this.show(message, 'success');
  }

  error(message) {
    return this.show(message, 'error');
  }

  warning(message) {
    return this.show(message, 'warning');
  }

  info(message) {
    return this.show(message, 'info');
  }
}

// Sistema de validação de formulário
class FormValidator {
  constructor(form) {
    this.form = form;
    this.fields = form.querySelectorAll('[data-validate]');
    this.init();
  }

  init() {
    this.bindEvents();
    this.setupRealTimeValidation();
  }

  bindEvents() {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    
    this.fields.forEach(field => {
      field.addEventListener('blur', () => this.validateField(field));
      field.addEventListener('input', () => this.clearFieldError(field));
    });
  }

  setupRealTimeValidation() {
    this.fields.forEach(field => {
      const rules = field.getAttribute('data-validate').split(' ');
      
      field.addEventListener('input', () => {
        if (this.isFieldValid(field, rules)) {
          this.clearFieldError(field);
        }
      });
    });
  }

  validateField(field) {
    const rules = field.getAttribute('data-validate').split(' ');
    return this.isFieldValid(field, rules);
  }

  isFieldValid(field, rules) {
    const value = field.value.trim();
    
    for (const rule of rules) {
      if (!this.checkRule(field, rule, value)) {
        return false;
      }
    }
    
    return true;
  }

  checkRule(field, rule, value) {
    switch (rule) {
      case 'required':
        if (!value) {
          this.showFieldError(field, CONFIG.formValidation.required);
          return false;
        }
        break;
        
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (value && !emailRegex.test(value)) {
          this.showFieldError(field, CONFIG.formValidation.email);
          return false;
        }
        break;
        
      case 'phone':
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        if (value && !phoneRegex.test(value)) {
          this.showFieldError(field, CONFIG.formValidation.phone);
          return false;
        }
        break;
        
      case 'min:3':
        if (value && value.length < 3) {
          this.showFieldError(field, CONFIG.formValidation.minLength);
          return false;
        }
        break;
        
      case 'max:500':
        if (value && value.length > 500) {
          this.showFieldError(field, CONFIG.formValidation.maxLength);
          return false;
        }
        break;
    }
    
    return true;
  }

  showFieldError(field, message) {
    this.clearFieldError(field);
    
    field.classList.add('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'text-red-500 text-sm mt-1';
    errorDiv.textContent = message;
    errorDiv.setAttribute('data-error', 'true');
    
    field.parentNode.appendChild(errorDiv);
  }

  clearFieldError(field) {
    field.classList.remove('border-red-500', 'focus:ring-red-500', 'focus:border-red-500');
    
    const errorDiv = field.parentNode.querySelector('[data-error="true"]');
    if (errorDiv) {
      errorDiv.remove();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    
    let isValid = true;
    this.fields.forEach(field => {
      if (!this.validateField(field)) {
        isValid = false;
      }
    });
    
    if (isValid) {
      this.submitForm();
    } else {
      notificationManager.error('Por favor, corrija os erros no formulário.');
    }
  }

  async submitForm() {
    const formData = new FormData(this.form);
    const submitButton = this.form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Mostrar loading
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';
    
    try {
      // Simular envio (substituir por envio real)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Sucesso
      notificationManager.success('Formulário enviado com sucesso! Entraremos em contato em breve.');
      this.form.reset();
      
    } catch (error) {
      // Erro
      notificationManager.error('Erro ao enviar formulário. Tente novamente.');
      
    } finally {
      // Restaurar botão
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  }
}

// Sistema de animações AOS personalizadas
class AnimationManager {
  constructor() {
    this.init();
  }

  init() {
    this.setupCustomAnimations();
    this.setupScrollAnimations();
  }

  setupCustomAnimations() {
    // Animação de contadores
    this.setupCounters();
    
    // Animação de progresso
    this.setupProgressBars();
    
    // Animação de cards
    this.setupCardAnimations();
  }

  setupCounters() {
    const counters = document.querySelectorAll('[data-counter]');
    
    const animateCounter = (counter) => {
      const target = parseInt(counter.getAttribute('data-counter'));
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        counter.textContent = Math.floor(current);
      }, 16);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });

    counters.forEach(counter => observer.observe(counter));
  }

  setupProgressBars() {
    const progressBars = document.querySelectorAll('[data-progress]');
    
    const animateProgress = (bar) => {
      const target = parseInt(bar.getAttribute('data-progress'));
      const fill = bar.querySelector('.progress-fill');
      
      if (fill) {
        fill.style.width = `${target}%`;
        fill.style.transition = 'width 1.5s ease-out';
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateProgress(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });

    progressBars.forEach(bar => observer.observe(bar));
  }

  setupCardAnimations() {
    const cards = document.querySelectorAll('.card-animate');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('card-visible');
        }
      });
    });

    cards.forEach(card => observer.observe(card));
  }

  setupScrollAnimations() {
    // Parallax suave
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-parallax') || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    });
  }
}

// Sistema de busca
class SearchManager {
  constructor() {
    this.searchInput = document.getElementById('search-input');
    this.searchResults = document.getElementById('search-results');
    this.init();
  }

  init() {
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
    }
  }

  handleSearch(query) {
    if (query.length < 2) {
      this.hideResults();
      return;
    }

    const results = this.searchProjects(query);
    this.displayResults(results);
  }

  searchProjects(query) {
    // Simular busca em projetos (substituir por busca real)
    const projects = [
      { title: 'Projeto Elétrico Residencial', url: '/projetos/residencial-1', category: 'Residencial' },
      { title: 'Projeto Hidrossanitário Comercial', url: '/projetos/comercial-1', category: 'Comercial' },
      { title: 'Consultoria BIM Predial', url: '/projetos/predial-1', category: 'Predial' }
    ];

    return projects.filter(project => 
      project.title.toLowerCase().includes(query.toLowerCase()) ||
      project.category.toLowerCase().includes(query.toLowerCase())
    );
  }

  displayResults(results) {
    if (results.length === 0) {
      this.searchResults.innerHTML = '<p class="text-gray-500 p-4">Nenhum resultado encontrado.</p>';
    } else {
      this.searchResults.innerHTML = results.map(project => `
        <a href="${project.url}" class="block p-4 hover:bg-gray-50 border-b border-gray-200 last:border-b-0">
          <div class="font-medium text-gray-900">${project.title}</div>
          <div class="text-sm text-gray-500">${project.category}</div>
        </a>
      `).join('');
    }
    
    this.searchResults.classList.remove('hidden');
  }

  hideResults() {
    this.searchResults.classList.add('hidden');
  }
}

// Sistema de performance monitoring
class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.init();
  }

  init() {
    this.measurePageLoad();
    this.measureCoreWebVitals();
  }

  measurePageLoad() {
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      this.metrics.pageLoadTime = loadTime;
      
      // Log para analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'timing_complete', {
          name: 'page_load',
          value: Math.round(loadTime)
        });
      }
    });
  }

  measureCoreWebVitals() {
    // LCP (Largest Contentful Paint)
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.lcp = lastEntry.startTime;
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'largest_contentful_paint', {
          value: Math.round(lastEntry.startTime)
        });
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // FID (First Input Delay)
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        this.metrics.fid = entry.processingStart - entry.startTime;
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'first_input_delay', {
            value: Math.round(this.metrics.fid)
          });
        }
      });
    }).observe({ entryTypes: ['first-input'] });

    // CLS (Cumulative Layout Shift)
    let clsValue = 0;
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      this.metrics.cls = clsValue;
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'cumulative_layout_shift', {
          value: Math.round(clsValue * 1000) / 1000
        });
      }
    }).observe({ entryTypes: ['layout-shift'] });
  }
}

// Inicialização quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar sistemas
  window.themeManager = new ThemeManager();
  window.notificationManager = new NotificationManager();
  window.animationManager = new AnimationManager();
  window.searchManager = new SearchManager();
  window.performanceMonitor = new PerformanceMonitor();

  // Inicializar validadores de formulário
  const forms = document.querySelectorAll('form[data-validate]');
  forms.forEach(form => new FormValidator(form));

  // Remover loader
  const loader = document.querySelector('.loader');
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 300);
    }, 500);
  }

  // Scroll to top
  const scrollToTop = document.querySelector('.scroll-to-top');
  if (scrollToTop) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > CONFIG.scrollThreshold) {
        scrollToTop.classList.remove('opacity-0', 'pointer-events-none');
      } else {
        scrollToTop.classList.add('opacity-0', 'pointer-events-none');
      }
    });

    scrollToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Smooth scroll para links internos
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

  // Lazy loading para imagens
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));

  // Console log de inicialização
  console.log('🚀 PVP Projects - Site carregado com sucesso!');
  console.log('📊 Métricas de performance sendo monitoradas');
  console.log('🎨 Sistema de tema ativo');
  console.log('📝 Validação de formulários configurada');
});

// Exportar para uso global
window.CONFIG = CONFIG; 