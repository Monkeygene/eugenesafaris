 document.addEventListener('DOMContentLoaded', () => {
      // helper to show/hide an element
      const toggleHidden = el => el.classList.toggle('hidden');

      // mobile menu controls
      const mobileMenu  = document.getElementById('mobile-menu');
      const btn         = document.getElementById('nav-toggle');
      const iconOpen    = document.getElementById('icon-open');
      const iconClose   = document.getElementById('icon-close');
      const mobileClose = document.getElementById('mobile-close');

      // safari submenu controls (IDs now line up)
      const safariBtn    = document.getElementById('mobile-safaris-btn');
      const safariMenu   = document.getElementById('mobile-safaris-menu');
      const safariChevron = safariBtn.querySelector('svg');

      // open/close main mobile menu
      btn.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('translate-x-full');
        mobileMenu.classList.toggle('translate-x-full', isOpen);
        mobileMenu.classList.toggle('translate-x-0', !isOpen);
        iconOpen.classList.toggle('hidden', !isOpen);
        iconClose.classList.toggle('hidden', isOpen);
        btn.setAttribute('aria-expanded', String(!isOpen));
      });
      mobileClose.addEventListener('click', () => btn.click());

      // toggle the Safaris dropdown
      safariBtn.addEventListener('click', () => {
        const open = safariMenu.classList.contains('hidden');
        toggleHidden(safariMenu);
        safariBtn.setAttribute('aria-expanded', String(open));
        safariChevron.classList.toggle('rotate-180', open);
      });
    });

    // Tabs
     function showItinerary(id, event) {
    const itineraries = document.querySelectorAll('.itinerary');
    itineraries.forEach(section => {
      section.style.display = 'none';
    });

    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(btn => {
      btn.classList.remove('bg-lime-600', 'text-white');
      btn.classList.add('bg-stone-300', 'text-black');
    });

    document.querySelector(`#${id}`).style.display = 'block';
    event.target.classList.add('bg-lime-600', 'text-white');
    event.target.classList.remove('bg-stone-300', 'text-black');
  }

  // Show default tab on load
  document.addEventListener('DOMContentLoaded', () => {
    showItinerary('eastgate', document.querySelector('[onclick*="eastgate"]'));
  });