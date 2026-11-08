// ==========================================
// EUGENE SAFARIS NAVIGATION
// ==========================================

const header = document.querySelector("#site-header");

const menuToggle = document.querySelector("#menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const menuOverlay = document.querySelector("#menu-overlay");

const dropdownToggle = document.querySelector("#safaris-dropdown-toggle");
const dropdown = document.querySelector("#safaris-dropdown");
const dropdownWrapper = document.querySelector("#safaris-dropdown-wrapper");
const dropdownChevron = document.querySelector("#safaris-chevron");

// Only pages with a hero image use the transparent header.
const isPhotoHeader = header.dataset.headerTheme === "photo";
let mobileMenuOpen = false;

// ==========================================
// HEADER STATE (transparent/white -> linen/charcoal)
// ==========================================

let scrollTicking = false;

const updateHeader = () => {
  const pastTop = window.scrollY > 12;

  // Colours: solid on non-photo pages, after scrolling, or while the mobile menu is open.
  header.dataset.scrolled = String(!isPhotoHeader || pastTop || mobileMenuOpen);

  // Border: only once the user has actually scrolled.
  header.dataset.elevated = String(pastTop);

  scrollTicking = false;
};

window.addEventListener(
  "scroll",
  () => {
    if (!scrollTicking) {
      requestAnimationFrame(updateHeader);
      scrollTicking = true;
    }
  },
  { passive: true },
);

updateHeader();

// ==========================================
// DESKTOP SAFARIS DROPDOWN
// ==========================================

const closeDropdown = () => {
  dropdown.dataset.open = "false";
  dropdown.inert = true;
  dropdownToggle.setAttribute("aria-expanded", "false");
  dropdownChevron.classList.remove("rotate-180");
};

const openDropdown = () => {
  dropdown.dataset.open = "true";
  dropdown.inert = false;
  dropdownToggle.setAttribute("aria-expanded", "true");
  dropdownChevron.classList.add("rotate-180");
};

dropdownToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  const isOpen = dropdownToggle.getAttribute("aria-expanded") === "true";
  isOpen ? closeDropdown() : openDropdown();
});

document.addEventListener("click", (event) => {
  if (!dropdownWrapper.contains(event.target)) closeDropdown();
});

dropdown.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeDropdown);
});

// ==========================================
// MOBILE MENU
// ==========================================

const setMobileMenu = (open, { returnFocus = false } = {}) => {
  mobileMenuOpen = open;

  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");

  mobileMenu.dataset.open = String(open);
  menuOverlay.dataset.open = String(open);

  mobileMenu.setAttribute("aria-hidden", String(!open));
  mobileMenu.inert = !open;

  document.body.style.overflow = open ? "hidden" : "";

  // Keep the header readable over the linen drawer.
  updateHeader();

  if (open) {
    closeDropdown();

    // Move focus only if the drawer is still open.
    requestAnimationFrame(() => {
      if (mobileMenuOpen) {
        mobileMenu.querySelector("summary")?.focus({
          preventScroll: true,
        });
      }
    });
  } else if (returnFocus) {
    menuToggle.focus({ preventScroll: true });
  }
};

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  setMobileMenu(!isOpen, { returnFocus: true });
});

menuOverlay.addEventListener("click", () => setMobileMenu(false));

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMobileMenu(false));
});

// ==========================================
// KEYBOARD ACCESSIBILITY
// ==========================================

document.addEventListener("keydown", (event) => {
  const mobileOpen = menuToggle.getAttribute("aria-expanded") === "true";

  if (event.key === "Escape") {
    if (mobileOpen) {
      setMobileMenu(false, { returnFocus: true });
    } else if (dropdownToggle.getAttribute("aria-expanded") === "true") {
      closeDropdown();
      dropdownToggle.focus();
    }
  }

  // Trap focus inside the drawer (include the toggle so the close button stays reachable).
  if (event.key === "Tab" && mobileOpen) {
    const focusable = [menuToggle, ...mobileMenu.querySelectorAll("a[href], button:not([disabled]), summary")].filter(
      (el) => el.getClientRects().length > 0,
    );

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

// ==========================================
// RESPONSIVE CLEANUP
// ==========================================

window.matchMedia("(min-width: 1024px)").addEventListener("change", (event) => {
  if (event.matches) {
    if (mobileMenuOpen) setMobileMenu(false);
  } else {
    closeDropdown();
  }
});
