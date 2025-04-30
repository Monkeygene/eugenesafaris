const toggleEl = (el, show) => {
  el.classList.toggle('hidden', !show);
  el.classList.toggle('translate-x-full', !show);
  el.classList.toggle('translate-x-0', show);
};

const mobileMenu = document.getElementById('mobile-menu');
const btn = document.getElementById('nav-toggle');
const iconOpen = document.getElementById('icon-open');
const iconClose = document.getElementById('icon-close');
const mobileClose = document.getElementById('mobile-close');
const toursBtn = document.getElementById('mobile-tours-btn');
const toursList = document.getElementById('mobile-tours');

const openMenu = () => {
  toggleEl(mobileMenu, true);
  iconOpen.classList.add('hidden'); iconClose.classList.remove('hidden');
  btn.setAttribute('aria-expanded', 'true');
};
const closeMenu = () => {
  toggleEl(mobileMenu, false);
  iconClose.classList.add('hidden'); iconOpen.classList.remove('hidden');
  btn.setAttribute('aria-expanded', 'false');
};
btn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('translate-x-0');
  isOpen ? closeMenu() : openMenu();
});
mobileClose.addEventListener('click', closeMenu);
toursBtn.addEventListener('click', () => {
  const visible = !toursList.classList.contains('hidden');
  toursList.classList.toggle('hidden', visible);
  toursBtn.setAttribute('aria-expanded', String(!visible));
});
