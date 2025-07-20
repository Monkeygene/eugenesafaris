import kudu from './assets/images/homepage-header/kudu-walking-in-kruger-dry-river-bed.webp';
import zebra from './assets/images/homepage-header/plains-zebra-in-kruger-park.webp';
import leopard from './assets/images/homepage-header/leopard-in-tall-grass-kruger-h1-1.webp';
import klipspringer from './assets/images/homepage-header/klipspringer-on-boulder-kruger.webp';
import lion from './assets/images/homepage-header/african-lion-close-to-satara-rest-camp.webp';

const heroImage = document.getElementById('dailyHero');

const heroImages = [kudu, zebra, leopard, klipspringer, hornbill, lion];

function updateHeroImage() {
  const today = new Date();
  const dayIndex = today.getDate() % heroImages.length;
  heroImage.src = heroImages[dayIndex];
}

document.addEventListener('DOMContentLoaded', updateHeroImage);

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
