const toggle=document.querySelector('.nav-toggle');toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));document.querySelector('nav').classList.toggle('open',open);});document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',String(b===button));});document.querySelectorAll('[data-category]').forEach(card=>card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter);}));
const photoDialog = document.querySelector('.photo-dialog');
if (photoDialog && typeof photoDialog.showModal === 'function') {
  const full = photoDialog.querySelector('.photo-full');
  const caption = photoDialog.querySelector('.photo-caption');
  let photoTrigger;

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[data-photo]');
    if (!link || event.defaultPrevented || event.button !== 0
      || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    photoTrigger = link;
    const thumbnail = link.querySelector('img');
    full.alt = thumbnail.alt;
    full.src = link.dataset.photo;
    caption.textContent = link.dataset.caption || thumbnail.alt;
    photoDialog.showModal();
  });

  photoDialog.querySelector('.photo-close').addEventListener('click', () => photoDialog.close());
  photoDialog.addEventListener('click', (event) => {
    if (event.target !== photoDialog) return;
    const { left, right, top, bottom } = photoDialog.getBoundingClientRect();
    if (event.clientX < left || event.clientX > right || event.clientY < top || event.clientY > bottom) {
      photoDialog.close();
    }
  });
  photoDialog.addEventListener('close', () => {
    full.removeAttribute('src');
    photoTrigger?.focus({ preventScroll: true });
    photoTrigger = undefined;
  });
}

const foodOrbit = document.querySelector('[data-food-orbit]');
if (foodOrbit) {
  const rotationToggle = foodOrbit.querySelector('.rotation-toggle');
  foodOrbit.dataset.rotationEnabled = '';
  rotationToggle.hidden = false;

  rotationToggle.addEventListener('click', () => {
    const isPaused = foodOrbit.classList.toggle('is-paused');
    rotationToggle.textContent = isPaused ? 'Resume rotation' : 'Pause rotation';
  });
}
