/* Sticky nav */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('stuck', window.scrollY > 20);
  }, { passive: true });

  /* Burger */
  const burger = document.getElementById('burger');
  const mobNav = document.getElementById('mobNav');
  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    mobNav.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
  });
  function closeMob() {
    burger.classList.remove('open');
    mobNav.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }

  /* Form */
  const cForm     = document.getElementById('cForm');
  const submitBtn = document.getElementById('submitBtn');
  const fOk       = document.getElementById('fOk');
  cForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!cForm.querySelector('#em').value.trim() || !cForm.querySelector('#fn').value.trim()) return;
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;
    setTimeout(() => { fOk.style.display = 'block'; submitBtn.textContent = 'Sent ✓'; }, 900);
  });