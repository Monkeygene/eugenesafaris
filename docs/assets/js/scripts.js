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

    //tabs
  function showItinerary(airport, event) {
    // Hide all itinerary sections
    document.querySelectorAll('.itinerary-section').forEach(section => {
      section.classList.add('hidden');
    });

    // Reset all buttons to default style
    document.querySelectorAll('.tab-button').forEach(button => {
      button.classList.remove('bg-lime-600', 'text-white');
      button.classList.add('bg-stone-300', 'text-black');
    });

    // Apply active style to the clicked button
    event.currentTarget.classList.remove('bg-stone-300', 'text-black');
    event.currentTarget.classList.add('bg-lime-600', 'text-white');

    // Show the selected itinerary section
    const selectedSection = document.querySelector(`#itinerary-${airport}`);
    if (selectedSection) {
      selectedSection.classList.remove('hidden');
    }
  }

  // Set default tab on page load
  document.addEventListener('DOMContentLoaded', () => {
    const defaultButton = document.querySelector('[onclick*="eastgate"]');
    if (defaultButton) {
      defaultButton.click(); // Triggers the showItinerary function as if clicked
    }
  });