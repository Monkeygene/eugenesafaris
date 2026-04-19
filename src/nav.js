const navToggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileClose = document.getElementById('mobile-close');
const mobileBackdrop = document.getElementById('mobile-backdrop');

const mobileSafarisBtn = document.getElementById('mobile-safaris-btn');
const mobileSafarisMenu = document.getElementById('mobile-safaris-menu');
const mobileSafarisIcon = document.getElementById('mobile-safaris-icon');

const siteHeader = document.getElementById('siteHeader');
const navInner = document.getElementById('navInner');
const logoImg = document.getElementById('logoImg');

let isShrunk = false;
let ticking = false;

// --------------------
// Mobile menu
// --------------------
function openMenu() {
  mobileMenu.classList.remove('translate-x-full');
  mobileBackdrop.classList.remove('pointer-events-none', 'opacity-0');
  mobileBackdrop.classList.add('opacity-100');
  navToggle.setAttribute('aria-expanded', 'true');
  document.body.classList.add('overflow-hidden');
}

function closeMenu() {
  mobileMenu.classList.add('translate-x-full');
  mobileBackdrop.classList.remove('opacity-100');
  mobileBackdrop.classList.add('opacity-0');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('overflow-hidden');

  setTimeout(() => {
    mobileBackdrop.classList.add('pointer-events-none');
  }, 300);
}

if (navToggle && mobileMenu && mobileClose && mobileBackdrop) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    expanded ? closeMenu() : openMenu();
  });

  mobileClose.addEventListener('click', closeMenu);
  mobileBackdrop.addEventListener('click', closeMenu);

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

// --------------------
// Mobile submenu
// --------------------
if (mobileSafarisBtn && mobileSafarisMenu && mobileSafarisIcon) {
  mobileSafarisBtn.addEventListener('click', () => {
    const expanded = mobileSafarisBtn.getAttribute('aria-expanded') === 'true';
    const nextState = !expanded;

    mobileSafarisBtn.setAttribute('aria-expanded', String(nextState));
    mobileSafarisMenu.classList.toggle('hidden');
    mobileSafarisIcon.classList.toggle('rotate-180', nextState);
  });
}

// --------------------
// Navbar shrink
// --------------------
function applyNavbarState(shrunk) {
  if (shrunk) {
    navInner.classList.remove('h-20');
    navInner.classList.add('h-14');

    logoImg.classList.remove('h-8', 'md:h-9');
    logoImg.classList.add('h-6', 'md:h-7');

    siteHeader.classList.add('shadow-sm', 'border-zinc-200');
  } else {
    navInner.classList.remove('h-14');
    navInner.classList.add('h-20');

    logoImg.classList.remove('h-6', 'md:h-7');
    logoImg.classList.add('h-8', 'md:h-9');

    siteHeader.classList.remove('shadow-sm', 'border-zinc-200');
  }
}

function handleNavbarScroll() {
  if (ticking) return;

  ticking = true;

  window.requestAnimationFrame(() => {
    const shouldShrink = window.scrollY > 40;

    if (shouldShrink !== isShrunk) {
      isShrunk = shouldShrink;
      applyNavbarState(shouldShrink);
    }

    ticking = false;
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const shouldShrink = window.scrollY > 40;
  isShrunk = shouldShrink;
  applyNavbarState(shouldShrink);
});

window.addEventListener('scroll', handleNavbarScroll, { passive: true });