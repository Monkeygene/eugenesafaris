// Get elements
const navToggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileClose = document.getElementById('mobile-close');

const mobileSafarisBtn = document.getElementById('mobile-safaris-btn');
const mobileSafarisMenu = document.getElementById('mobile-safaris-menu');

const siteHeader = document.getElementById('siteHeader');
const navInner = document.getElementById('navInner');
const logoImg = document.getElementById('logoImg');

// Toggle mobile menu open/close
function toggleMobileMenu() {
  mobileMenu.classList.toggle('translate-x-full');
}

navToggle.addEventListener('click', toggleMobileMenu);
mobileClose.addEventListener('click', toggleMobileMenu);

// Toggle safaris submenu on mobile
mobileSafarisBtn.addEventListener('click', () => {
  const expanded = mobileSafarisBtn.getAttribute('aria-expanded') === 'true';
  mobileSafarisBtn.setAttribute('aria-expanded', !expanded);
  mobileSafarisMenu.classList.toggle('hidden');
});

// Scroll

const isHomepage = document.getElementById('homepage') !== null;
const safarisButton = document.querySelector('#siteHeader button[aria-haspopup="true"]');

function handleNavbarScroll() {
  const scrolled = window.scrollY > 50;

  if (scrolled) {
    siteHeader.classList.add('bg-white', 'shadow-md');
    navInner.classList.remove('h-20');
    navInner.classList.add('h-14');
    logoImg.classList.remove('h-7', 'md:h-9');
    logoImg.classList.add('h-6');
  } else {
    siteHeader.classList.remove('bg-white', 'shadow-md');
    navInner.classList.remove('h-14');
    navInner.classList.add('h-20');
    logoImg.classList.remove('h-6');
    logoImg.classList.add('h-7', 'md:h-9');
  }
}


// Run once on load
window.addEventListener('DOMContentLoaded', handleNavbarScroll);
// Then run on scroll
window.addEventListener('scroll', handleNavbarScroll);