document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.section, .log-card, .edu-card, .contact-card, .stack-panel');

  if (!('IntersectionObserver' in window)) {
    targets.forEach(t => t.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(t => observer.observe(t));
});
