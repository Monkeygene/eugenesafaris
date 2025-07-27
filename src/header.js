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

