const initNavigation = () => {
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-site-menu]');
  const bannerClose = document.querySelector('.ann-close');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('is-open');
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (bannerClose) {
    bannerClose.addEventListener('click', () => {
      const banner = bannerClose.closest('.ann-bar');
      if (banner) {
        banner.style.display = 'none';
      }
    });
  }

  const progress = document.querySelector('.scroll-progress');
  if (progress) {
    const updateProgress = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = docHeight > 0 ? window.scrollY / docHeight : 0;
      progress.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
    };
    window.addEventListener('scroll', updateProgress);
    updateProgress();
  }
};

document.addEventListener('DOMContentLoaded', initNavigation);
