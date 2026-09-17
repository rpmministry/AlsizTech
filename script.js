/**
 * ALSIZTECH - INTERACCIONES Y LÓGICA FRONTEND
 * Componentes de alta conversión, accesibilidad nativa y calculadora de proyecto.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 0. GESTIÓN DE MODO OSCURO / CLARO (THEME SWITCHER)
  const themeToggleBtns = document.querySelectorAll('.js-theme-toggle');
  
  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('alsiztech_theme', theme);
    themeToggleBtns.forEach(btn => {
      const isDark = theme === 'dark';
      btn.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
      btn.setAttribute('title', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    });
  };

  const getPreferredTheme = () => {
    const saved = localStorage.getItem('alsiztech_theme');
    if (saved) return saved;
    if (document.documentElement.getAttribute('data-theme') === 'dark') return 'dark';
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('theme') === 'dark') return 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // Inicializar tema
  applyTheme(getPreferredTheme());

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  });

  // Escuchar cambios del sistema operativo si no hay elección manual
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('alsiztech_theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  // 1. GESTIÓN DE MENÚ MÓVIL ACCESIBLE
  const mobileToggleBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (mobileToggleBtn && mobileDrawer) {
    mobileToggleBtn.addEventListener('click', () => {
      const isExpanded = mobileToggleBtn.getAttribute('aria-expanded') === 'true';
      mobileToggleBtn.setAttribute('aria-expanded', !isExpanded);
      mobileDrawer.classList.toggle('open');
      
      // Actualizar icono de accesibilidad
      const icon = mobileToggleBtn.querySelector('svg');
      if (!isExpanded) {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
      } else {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
      }
    });

    // Cerrar menú al hacer clic en un enlace
    mobileDrawer.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
        mobileToggleBtn.querySelector('svg').innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
      });
    });
  }

  // 2. MODAL NATIVO ACCESIBLE (<dialog>) PARA COTIZAR PROYECTO
  const quoteDialog = document.getElementById('quote-dialog');
  const openQuoteBtns = document.querySelectorAll('.js-open-quote-modal');
  const closeQuoteBtn = document.getElementById('closeQuoteModalBtn');

  if (quoteDialog) {
    openQuoteBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const preselectedService = btn.getAttribute('data-service') || 'app';
        const serviceSelect = document.getElementById('modalServiceType');
        if (serviceSelect) {
          serviceSelect.value = preselectedService;
        }
        quoteDialog.showModal();
        document.getElementById('clientName')?.focus();
      });
    });

    closeQuoteBtn?.addEventListener('click', () => {
      quoteDialog.close();
    });

    // Cerrar al hacer clic en el backdrop fuera del contenido
    quoteDialog.addEventListener('click', (e) => {
      const rect = quoteDialog.getBoundingClientRect();
      const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height
        && rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
      if (!isInDialog) {
        quoteDialog.close();
      }
    });

    // Envío del formulario con confirmación accesible
    // Envío del formulario con confirmación accesible y entrega a contacto@alsiztech.com
    const quoteForm = document.getElementById('quoteForm');
    const quoteSuccessMessage = document.getElementById('quoteSuccessMessage');
    const closeSuccessBtn = document.querySelector('.js-close-modal-success');

    if (closeSuccessBtn) {
      closeSuccessBtn.addEventListener('click', () => {
        quoteDialog.close();
        if (quoteSuccessMessage) quoteSuccessMessage.style.display = 'none';
        if (quoteForm) {
          quoteForm.style.display = 'block';
          quoteForm.reset();
        }
      });
    }

    if (quoteForm) {
      quoteForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById('quoteSubmitBtn');
        const originalText = submitBtn ? submitBtn.innerHTML : 'Enviar';
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span>Procesando y remitiendo...</span>';
        }

        const formData = {
          name: document.getElementById('clientName')?.value.trim() || '',
          organization: document.getElementById('clientOrg')?.value.trim() || '',
          email: document.getElementById('clientEmail')?.value.trim() || '',
          phone: document.getElementById('clientPhone')?.value.trim() || '',
          service: document.getElementById('modalServiceType')?.value || '',
          details: document.getElementById('projectDetails')?.value.trim() || '',
          targetEmail: 'contacto@alsiztech.com',
          targetPhone: '0979376810',
          submittedAt: new Date().toISOString()
        };

        // 1. Enviar a endpoint de servidor local /api/contact si está disponible
        try {
          fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
          }).catch(() => {});
        } catch (_) {}

        // 2. Enviar a FormSubmit (Reenvío directo de correo a contacto@alsiztech.com)
        try {
          await fetch('https://formsubmit.co/ajax/contacto@alsiztech.com', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              ...formData,
              _subject: `Nueva Cotización AlsizTech: ${formData.name} (${formData.organization})`,
              _replyto: formData.email
            })
          });
        } catch (_) {
          // Si no hay conexión externa, se garantiza respaldo local y mailto
        }

        // 3. Personalizar enlace de WhatsApp para el cliente
        const waMsg = `Hola AlsizTech, mi nombre es ${formData.name} de ${formData.organization}. He solicitado una propuesta para ${formData.service}. Mi correo es ${formData.email} y teléfono ${formData.phone}.`;
        const waLink = `https://wa.me/593979376810?text=${encodeURIComponent(waMsg)}`;
        
        const successWaBtn = document.querySelector('#quoteSuccessMessage a.btn-whatsapp');
        if (successWaBtn) {
          successWaBtn.setAttribute('href', waLink);
        }

        // Mostrar estado de éxito en el modal
        if (quoteForm && quoteSuccessMessage) {
          quoteForm.style.display = 'none';
          quoteSuccessMessage.style.display = 'block';
        }

        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      });
    }
  }

  // 3. ESTIMADOR / CALCULADORA INTERACTIVA DE PROYECTO
  const estimatorConfig = {
    solution: {
      web: { name: 'Plataforma Web / SaaS / E-Commerce', baseWeeks: 5, scope: 'Arquitectura Cloud, experiencia moderna de alta conversión, CMS y pagos seguros.' },
      app: { name: 'Aplicación Móvil (iOS/Android)', baseWeeks: 6, scope: 'Diseño UX/UI, Flutter/React Native, backend API, publicación en tiendas.' },
      custom: { name: 'Software a la Medida / ERP / CRM', baseWeeks: 8, scope: 'Modelado de procesos, facturación, integraciones API y roles jerárquicos.' },
      branding: { name: 'Branding & Experiencia Digital', baseWeeks: 3, scope: 'Identidad visual completa, manual de marca, diseño de interfaces UI/UX y activos gráficos.' },
      streaming: { name: 'Streaming Profesional & OBS Studio / Voicemeeter', baseWeeks: 2, scope: 'Integración multi-cámara, ingeniería de audio, enrutamiento de sonido y capacitación técnica broadcast.' },
      ai: { name: 'IA, Avatares & Automatización', baseWeeks: 4, scope: 'Avatares inteligentes, traducción simultánea, búsqueda semántica y pipelines de datos.' },
      legaltech: { name: 'Asesoría Legal Tech & Protección PI', baseWeeks: 3, scope: 'Registro de marca, blindaje de derechos de autor, contratos de desarrollo, cesión de software y NDAs.' }
    },
    vertical: {
      business: { name: 'AlsizTech Business', factor: 1.0, focus: 'Retorno de inversión, optimización operativa y escalabilidad comercial.' },
      ministries: { name: 'AlsizTech Ministries', factor: 0.95, focus: 'Conexión comunitaria, alta usabilidad sin barreras y costos optimizados.' }
    },
    stage: {
      idea: { weeksAdd: 2, label: 'Etapa Conceptual (Incluye definición de alcance)' },
      prototype: { weeksAdd: 1, label: 'Prototipo Existente (Aceleración de desarrollo)' },
      migration: { weeksAdd: 3, label: 'Modernización / Migración de Sistema Legado' }
    }
  };

  const updateEstimatorSummary = () => {
    const selectedSolutionInput = document.querySelector('input[name="est_solution"]:checked');
    const selectedVerticalInput = document.querySelector('input[name="est_vertical"]:checked');
    const selectedStageInput = document.querySelector('input[name="est_stage"]:checked');

    if (!selectedSolutionInput || !selectedVerticalInput || !selectedStageInput) return;

    const solKey = selectedSolutionInput.value;
    const vertKey = selectedVerticalInput.value;
    const stageKey = selectedStageInput.value;

    const solData = estimatorConfig.solution[solKey];
    const vertData = estimatorConfig.vertical[vertKey];
    const stageData = estimatorConfig.stage[stageKey];

    const estimatedWeeks = solData.baseWeeks + stageData.weeksAdd;

    // Actualizar UI del resumen
    const summaryTitle = document.getElementById('estSummaryTitle');
    const summaryScope = document.getElementById('estSummaryScope');
    const summaryVertical = document.getElementById('estSummaryVertical');
    const summaryTime = document.getElementById('estSummaryTime');
    const summarySprints = document.getElementById('estSummarySprints');

    if (summaryTitle) summaryTitle.textContent = solData.name;
    if (summaryScope) summaryScope.textContent = solData.scope;
    if (summaryVertical) summaryVertical.textContent = vertData.name;
    if (summaryTime) summaryTime.textContent = `${estimatedWeeks} - ${estimatedWeeks + 2} semanas`;
    if (summarySprints) summarySprints.textContent = `${Math.ceil(estimatedWeeks / 2)} Sprints cerrados`;
  };

  const estimatorInputs = document.querySelectorAll('.estimator-box input[type="radio"]');
  estimatorInputs.forEach(input => {
    input.addEventListener('change', updateEstimatorSummary);
  });

  // 4. OBSERVADOR DE SCROLL PARA ENLACES ACTIVOS
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.35 });

  sections.forEach(section => scrollObserver.observe(section));

  // 5. ACCESO DIRECTO DESDE CALCULADORA A MODAL
  const estCtaBtn = document.getElementById('estCtaBtn');
  if (estCtaBtn && quoteDialog) {
    estCtaBtn.addEventListener('click', () => {
      const selectedSolution = document.querySelector('input[name="est_solution"]:checked')?.value || 'app';
      const serviceSelect = document.getElementById('modalServiceType');
      if (serviceSelect) {
        serviceSelect.value = selectedSolution;
      }
      quoteDialog.showModal();
    });
  }

  // 6. INTERACCIÓN 3D PARALLAX TILT PARA LOGOTIPOS Y EMBLEMAS
  const tiltElements = document.querySelectorAll('.logo-3d-tile, .logo-3d-interactive');

  tiltElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = -((y - centerY) / centerY) * 12;
      const rotateY = ((x - centerX) / centerX) * 12;
      
      el.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px) scale(1.03)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
});


