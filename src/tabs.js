// src/tabs.js
export function initTabs() {
  console.log("Initializing tabs"); // for debugging

  const buttons = document.querySelectorAll('.tab-button');
  if (!buttons.length) {
    console.warn("No tab buttons found.");
    return;
  }

  function showItinerary(airport, button) {
    // Hide all itineraries
    document.querySelectorAll('.itinerary-section').forEach(section => {
      section.classList.add('hidden');
    });

    // Reset buttons
    buttons.forEach(btn => {
      btn.classList.remove('bg-lime-600', 'text-white');
      btn.classList.add('bg-stone-300', 'text-black');
    });

    // Activate clicked button
    button.classList.remove('bg-stone-300', 'text-black');
    button.classList.add('bg-lime-600', 'text-white');

    // Show relevant itinerary
    const target = document.getElementById(`itinerary-${airport}`);
    if (target) target.classList.remove('hidden');
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      showItinerary(button.dataset.airport, button);
    });
  });

  // Optional: set default active
  const defaultBtn = document.querySelector('[data-airport="eastgate"]');
  if (defaultBtn) defaultBtn.click();
}
