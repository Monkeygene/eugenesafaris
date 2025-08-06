document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.tab-button');
    if (!buttons.length) return;

    function showItinerary(airport, button) {
      document.querySelectorAll('.itinerary-section').forEach(section => {
        section.classList.add('hidden');
      });

      buttons.forEach(btn => {
        btn.classList.remove('bg-lime-600', 'text-white');
        btn.classList.add('bg-stone-300', 'text-black');
      });

      button.classList.remove('bg-stone-300', 'text-black');
      button.classList.add('bg-lime-600', 'text-white');

      const target = document.getElementById(`itinerary-${airport}`);
      if (target) target.classList.remove('hidden');
    }

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        showItinerary(button.dataset.airport, button);
      });
    });

    // Auto activate default tab
    const defaultBtn = document.querySelector('[data-airport="eastgate"]');
    if (defaultBtn) defaultBtn.click();
  });