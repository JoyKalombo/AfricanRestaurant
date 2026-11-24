const toggle=document.querySelector('.nav-toggle');toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));document.querySelector('nav').classList.toggle('open',open);});document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',String(b===button));});document.querySelectorAll('[data-category]').forEach(card=>card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter);}));
const photoDialog=document.querySelector('.photo-dialog');if(photoDialog&&typeof photoDialog.showModal==='function'){const full=photoDialog.querySelector('.photo-full');const caption=photoDialog.querySelector('.photo-caption');document.querySelectorAll('[data-photo]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();full.src=link.dataset.photo;full.alt=link.querySelector('img').alt;caption.textContent=link.dataset.caption;photoDialog.showModal();}));photoDialog.querySelector('.photo-close').addEventListener('click',()=>photoDialog.close());photoDialog.addEventListener('click',event=>{if(event.target===photoDialog){const r=photoDialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)photoDialog.close();}});}

const rotatingTray = document.querySelector('[data-rotating-tray]');
if (rotatingTray) {
  const rotationToggle = rotatingTray.querySelector('.rotation-toggle');
  rotatingTray.dataset.rotationEnabled = '';
  rotationToggle.hidden = false;

  rotationToggle.addEventListener('click', () => {
    const isPaused = rotatingTray.classList.toggle('is-paused');
    rotationToggle.textContent = isPaused ? 'Resume rotation' : 'Pause rotation';
  });
}
