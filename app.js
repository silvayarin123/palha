(() => {
  const destinations = window.PALHA_LINKS || {};
  const notice = document.querySelector('.notice');
  let noticeTimer;
  function validDestination(value) {
    if (typeof value !== 'string' || !value.trim()) return null;
    try {
      const url = new URL(value);
      return ['https:', 'http:'].includes(url.protocol) ? url.href : null;
    } catch { return null; }
  }
  function announce(text) {
    clearTimeout(noticeTimer);
    notice.textContent = text;
    notice.classList.add('visible');
    noticeTimer = setTimeout(() => notice.classList.remove('visible'), 4200);
  }
  document.querySelectorAll('[data-destination]').forEach((element) => {
    const key = element.dataset.destination;
    const href = validDestination(destinations[key]);
    if (href) {
      if (element.tagName === 'A') { element.href = href; return; }
      const link = document.createElement('a');
      link.className = element.className.replace(/\bpending\b/g, '').trim();
      link.dataset.destination = key;
      link.href = href;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.innerHTML = element.innerHTML;
      link.querySelector('.availability')?.remove();
      const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      arrow.setAttribute('class', 'link-arrow');
      arrow.setAttribute('aria-hidden', 'true');
      const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
      use.setAttribute('href', '#i-arrow');
      arrow.append(use);
      link.append(arrow);
      element.replaceWith(link);
      return;
    }
    if (key === 'whatsapp') return;
    element.addEventListener('click', () => announce(key === 'albums'
      ? 'Nossos álbuns estarão disponíveis por aqui em breve.'
      : 'Em breve, mais histórias no nosso site.'));
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') notice.classList.remove('visible');
  });
})();
