// =========================================
// Eugene Safaris Navigation
// =========================================

// Desktop Elements
const desktopBtn = document.getElementById("desktopMenuBtn");
const desktopSidebar = document.getElementById("desktopSidebar");
const desktopOverlay = document.getElementById("sidebarOverlay");
const desktopIcon = document.getElementById("menuIcon");

const desktopHeaderInner = document.getElementById("desktopHeaderInner");
const desktopLogo = document.getElementById("desktopLogo");
const desktopMail = document.getElementById("desktopMail");

// Mobile Elements
const mobileBtn = document.getElementById("menuBtn");
const mobilePanel = document.getElementById("mobilePanel");
const mobileOverlay = document.getElementById("mobileOverlay");
const mobileIcon = document.getElementById("mobileMenuIcon");

// =========================================
// Desktop Shrink
// =========================================

function updateDesktopNavbar() {

    if (window.innerWidth < 1024) return;

    const shrink = window.scrollY > 50;

    desktopHeaderInner.classList.toggle("h-24", !shrink);
    desktopHeaderInner.classList.toggle("h-20", shrink);

    desktopLogo.classList.toggle("h-12", !shrink);
    desktopLogo.classList.toggle("h-9", shrink);

    desktopMail.classList.toggle("h-10", !shrink);
    desktopMail.classList.toggle("h-8", shrink);

    desktopIcon.classList.toggle("h-8", !shrink);
    desktopIcon.classList.toggle("h-7", shrink);

    desktopSidebar.classList.toggle("pt-24", !shrink);
    desktopSidebar.classList.toggle("pt-20", shrink);

}

window.addEventListener("scroll", updateDesktopNavbar, { passive: true });
window.addEventListener("resize", updateDesktopNavbar);
window.addEventListener("load", updateDesktopNavbar);

// =========================================
// Desktop Menu
// =========================================

function openDesktopMenu() {

    desktopSidebar.classList.remove("-translate-x-full");
    desktopOverlay.classList.remove("hidden");
    desktopIcon.src = "/images/navbar/hamburger-open.svg";

}

function closeDesktopMenu() {

    desktopSidebar.classList.add("-translate-x-full");
    desktopOverlay.classList.add("hidden");
    desktopIcon.src = "/images/navbar/hamburger-closed.svg";

}

desktopBtn.addEventListener("click", () => {

    if (desktopSidebar.classList.contains("-translate-x-full")) {

        openDesktopMenu();

    } else {

        closeDesktopMenu();

    }

});

desktopOverlay.addEventListener("click", closeDesktopMenu);

// =========================================
// Mobile Menu
// =========================================

function openMobileMenu() {

    mobilePanel.classList.remove("-translate-x-full");

    mobileOverlay.classList.remove("hidden");

    mobileIcon.src = "/images/navbar/hamburger-open.svg";

    document.body.classList.add("overflow-hidden");

}

function closeMobileMenu() {

    mobilePanel.classList.add("-translate-x-full");

    mobileOverlay.classList.add("hidden");

    mobileIcon.src = "/images/navbar/hamburger-closed.svg";

    document.body.classList.remove("overflow-hidden");

}

mobileBtn.addEventListener("click", () => {

    if (mobilePanel.classList.contains("-translate-x-full")) {

        openMobileMenu();

    } else {

        closeMobileMenu();

    }

});

mobileOverlay.addEventListener("click", closeMobileMenu);

// =========================================
// Close on Escape
// =========================================

document.addEventListener("keydown", (e) => {

    if (e.key !== "Escape") return;

    closeDesktopMenu();
    closeMobileMenu();

});

// =========================================
// Close mobile when link clicked
// =========================================

mobilePanel.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", closeMobileMenu);

});