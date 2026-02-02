// Element refs
const navToggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileClose = document.getElementById('mobile-close');
const mobileBackdrop = document.getElementById('mobile-backdrop');

const mobileSafarisBtn = document.getElementById('mobile-safaris-btn');
const mobileSafarisMenu = document.getElementById('mobile-safaris-menu');

const siteHeader = document.getElementById('siteHeader');
const navInner = document.getElementById('navInner');
const logoImg = document.getElementById('logoImg');

let isShrunk = false;
let ticking = false;

// ---------- Mobile menu open/close with backdrop ----------
function openMenu() {
  mobileMenu.classList.remove('translate-x-full');
  mobileBackdrop.classList.remove('pointer-events-none', 'opacity-0');
  mobileBackdrop.classList.add('opacity-100');
  navToggle.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  mobileMenu.classList.add('translate-x-full');
  mobileBackdrop.classList.remove('opacity-100');
  mobileBackdrop.classList.add('opacity-0');
  // after the fade-out completes, disable pointer events so underlying page is interactive
  setTimeout(() => {
    mobileBackdrop.classList.add('pointer-events-none');
  }, 300); // matches your transition duration
  navToggle.setAttribute('aria-expanded', 'false');
}

navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  if (expanded) closeMenu();
  else openMenu();
});
mobileClose.addEventListener('click', closeMenu);
mobileBackdrop.addEventListener('click', closeMenu);

// Close when any mobile menu link is clicked
mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// Safaris submenu toggle (mobile)
mobileSafarisBtn.addEventListener('click', () => {
  const expanded = mobileSafarisBtn.getAttribute('aria-expanded') === 'true';
  mobileSafarisBtn.setAttribute('aria-expanded', (!expanded).toString());
  mobileSafarisMenu.classList.toggle('hidden');
});

// Scroll
function updateLogoSize(shrunk) {
  // always strip both variants
  logoImg.classList.remove('h-6', 'h-8');

  // add exactly one size
  if (shrunk) {
    logoImg.classList.add('h-6');
  } else {
    logoImg.classList.add('h-8');
  }
}


function applyNavbarState(shouldShrink) {
  if (shouldShrink) {

    // shrink height
    navInner.classList.remove('h-20');
    navInner.classList.add('h-14');
  } else {

    // restore height
    navInner.classList.remove('h-14');
    navInner.classList.add('h-20');
  }

  updateLogoSize(shouldShrink);
}

function handleNavbarScroll() {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const shouldShrink = window.scrollY > 50;
      if (shouldShrink !== isShrunk) {
        isShrunk = shouldShrink;
        applyNavbarState(shouldShrink);
      }
      ticking = false;
    });
    ticking = true;
  }
}

// Keep logo sizing correct on resize when not shrunk
window.addEventListener('resize', () => {
  if (!isShrunk) {
    updateLogoSize(false);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  // initial state
  handleNavbarScroll();
});
window.addEventListener('scroll', handleNavbarScroll);