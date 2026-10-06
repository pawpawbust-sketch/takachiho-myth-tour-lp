const applicationUrl = window.TOUR_CONFIG?.applicationUrl?.trim();
document.querySelectorAll('[data-apply]').forEach(link => {
  if (applicationUrl && /^https?:\/\//.test(applicationUrl)) {
    link.href = applicationUrl;
  } else {
    link.addEventListener('click', () => {
      const status = document.getElementById('application-status');
      status.textContent = '申込み受付のリンクは、公開前に主催者が設定します。';
      status.hidden = false;
    });
  }
});
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.06 });
  document.querySelectorAll('.reveal').forEach(el => { el.classList.add('animate'); observer.observe(el); });
}
