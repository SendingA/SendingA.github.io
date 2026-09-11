/* Enhancements keep real links and server-rendered content usable without JS. */
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('[data-language-link]').forEach(link => {
    const destination = new URL(link.href);
    const updateHash = () => { destination.hash = location.hash; link.href = destination.href; };
    updateHash();
    window.addEventListener('hashchange', updateHash);
    link.addEventListener('click', () => {
      if (document.querySelector('.js-widget-page')) {
        const current = [...document.querySelectorAll('section[id]')].reverse().find(section => section.getBoundingClientRect().top <= 160);
        if (current) destination.hash = current.id;
      }
      link.href = destination.href;
    });
  });

  document.querySelectorAll('[data-news-pagination]').forEach(block => {
    const items = [...block.querySelectorAll('.news-list-item')];
    const perPage = 4;
    const total = Math.max(1, Math.ceil(items.length / perPage));
    let page = 1;
    const prev = block.querySelector('.news-prev-btn');
    const next = block.querySelector('.news-next-btn');
    const render = () => {
      items.forEach((item, i) => { item.hidden = i < (page - 1) * perPage || i >= page * perPage; });
      block.querySelector('.news-current-page').textContent = page;
      block.querySelector('.news-total-pages').textContent = total;
      prev.disabled = page === 1;
      next.disabled = page === total;
    };
    const change = delta => {
      page = Math.min(total, Math.max(1, page + delta));
      render();
      block.scrollIntoView({ behavior: reduceMotion.matches ? 'instant' : 'smooth', block: 'start' });
    };
    prev.addEventListener('click', () => change(-1));
    next.addEventListener('click', () => change(1));
    block.querySelector('.pagination-controls').hidden = false;
    render();
  });

  document.querySelectorAll('[data-gallery]').forEach(gallery => {
    const slider = gallery.querySelector('.gallery-slider');
    const slides = [...gallery.querySelectorAll('.gallery-slide')];
    if (!slides.length) return;
    const prev = gallery.querySelector('[data-gallery-prev]');
    const next = gallery.querySelector('[data-gallery-next]');
    const update = () => {
      const step = slides[0].getBoundingClientRect().width + 20;
      const first = Math.round(slider.scrollLeft / step);
      const count = Math.max(1, Math.round((slider.clientWidth + 20) / step));
      gallery.querySelector('[data-gallery-current]').textContent = first + 1;
      gallery.querySelector('[data-gallery-showing]').textContent = Math.min(slides.length, first + count);
      prev.disabled = slider.scrollLeft < 5;
      next.disabled = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5;
    };
    const move = direction => slider.scrollBy({ left: direction * (slider.clientWidth + 20), behavior: reduceMotion.matches ? 'instant' : 'smooth' });
    prev.addEventListener('click', () => move(-1));
    next.addEventListener('click', () => move(1));
    slider.addEventListener('scroll', update, { passive: true });
    new ResizeObserver(update).observe(slider);
    gallery.querySelector('.gallery-nav').hidden = false;
    update();
  });

  const archive = document.querySelector('[data-news-archive]');
  if (archive) {
    const items = [...archive.querySelectorAll('.news-list-item')];
    const buttons = [...archive.querySelectorAll('[data-month]')];
    const reset = archive.querySelector('[data-reset-filter]');
    const dateInput = archive.querySelector('[data-date-filter]');
    const status = archive.querySelector('[data-filter-status]');
    const initialStatus = status.textContent;
    const filter = value => {
      let count = 0;
      items.forEach(item => { item.hidden = !item.dataset.date.startsWith(value); if (!item.hidden) count++; });
      buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.month === value.slice(0, 7))));
      archive.querySelectorAll('[data-news-count]').forEach(label => { label.textContent = count; });
      status.textContent = value || initialStatus;
      reset.hidden = !value;
      archive.querySelector('[data-no-news]').hidden = count > 0;
    };
    buttons.forEach(button => button.addEventListener('click', () => { dateInput.value = ''; filter(button.getAttribute('aria-pressed') === 'true' ? '' : button.dataset.month); }));
    dateInput.addEventListener('change', () => filter(dateInput.value));
    reset.addEventListener('click', () => { dateInput.value = ''; filter(''); });
    archive.querySelector('.news-sidebar').hidden = false;
    filter('');
  }
})();
