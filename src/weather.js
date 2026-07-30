const weatherContainer = document.querySelector("#weather-carousel");
const errorBox = document.querySelector("#weather-error");
const retryBtn = document.querySelector("#weather-retry");
const locationLabel = document.querySelector("#weather-location");

const LAT = -24.99;
const LON = 31.59;

// WMO weather codes -> label, icon key, and a tailwind gradient/accent pair
const WEATHER_CODES = {
  0: { label: "Clear sky", icon: "sunny", accent: "amber" },
  1: { label: "Mostly clear", icon: "sunny", accent: "amber" },
  2: { label: "Partly cloudy", icon: "cloud", accent: "slate" },
  3: { label: "Overcast", icon: "cloud", accent: "slate" },
  45: { label: "Fog", icon: "cloud", accent: "slate" },
  48: { label: "Icy fog", icon: "cloud", accent: "slate" },
  51: { label: "Light drizzle", icon: "rain", accent: "sky" },
  53: { label: "Drizzle", icon: "rain", accent: "sky" },
  55: { label: "Heavy drizzle", icon: "rain", accent: "sky" },
  56: { label: "Freezing drizzle", icon: "rain", accent: "sky" },
  57: { label: "Freezing drizzle", icon: "rain", accent: "sky" },
  61: { label: "Light rain", icon: "rain", accent: "sky" },
  63: { label: "Rain", icon: "rain", accent: "sky" },
  65: { label: "Heavy rain", icon: "rain", accent: "sky" },
  66: { label: "Freezing rain", icon: "rain", accent: "sky" },
  67: { label: "Freezing rain", icon: "rain", accent: "sky" },
  71: { label: "Light snow", icon: "snow", accent: "sky" },
  73: { label: "Snow", icon: "snow", accent: "sky" },
  75: { label: "Heavy snow", icon: "snow", accent: "sky" },
  77: { label: "Snow grains", icon: "snow", accent: "sky" },
  80: { label: "Rain showers", icon: "rain", accent: "sky" },
  81: { label: "Rain showers", icon: "rain", accent: "sky" },
  82: { label: "Violent showers", icon: "rain", accent: "sky" },
  85: { label: "Snow showers", icon: "snow", accent: "sky" },
  86: { label: "Snow showers", icon: "snow", accent: "sky" },
  95: { label: "Thunderstorm", icon: "storm", accent: "violet" },
  96: { label: "Storm with hail", icon: "storm", accent: "violet" },
  99: { label: "Storm with hail", icon: "storm", accent: "violet" },
};

const ACCENTS = {
  amber: { bg: "bg-amber-50", ring: "ring-amber-200", text: "text-amber-600", iconWrap: "bg-amber-100 text-amber-500" },
  slate: { bg: "bg-slate-50", ring: "ring-slate-200", text: "text-slate-500", iconWrap: "bg-slate-100 text-slate-400" },
  sky: { bg: "bg-sky-50", ring: "ring-sky-200", text: "text-sky-600", iconWrap: "bg-sky-100 text-sky-500" },
  violet: {
    bg: "bg-violet-50",
    ring: "ring-violet-200",
    text: "text-violet-600",
    iconWrap: "bg-violet-100 text-violet-500",
  },
};

function weatherIcon(kind) {
  switch (kind) {
    case "sunny":
      return `
        <svg viewBox="0 0 24 24" class="icon-sunny h-8 w-8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round">
          <circle class="sun-body" cx="12" cy="12" r="4.2" fill="currentColor" stroke="none"/>
          <g class="sun-body">
            <line x1="12" y1="2.5" x2="12" y2="4.5"/>
            <line x1="12" y1="19.5" x2="12" y2="21.5"/>
            <line x1="2.5" y1="12" x2="4.5" y2="12"/>
            <line x1="19.5" y1="12" x2="21.5" y2="12"/>
            <line x1="4.9" y1="4.9" x2="6.3" y2="6.3"/>
            <line x1="17.7" y1="17.7" x2="19.1" y2="19.1"/>
            <line x1="4.9" y1="19.1" x2="6.3" y2="17.7"/>
            <line x1="17.7" y1="6.3" x2="19.1" y2="4.9"/>
          </g>
        </svg>`;
    case "cloud":
      return `
        <svg viewBox="0 0 24 24" class="icon-cloud h-8 w-8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path class="cloud-back" d="M7 17.5a4 4 0 0 1-.6-7.95 5 5 0 0 1 9.6-1.9A4.5 4.5 0 0 1 17.5 17.5H7Z" fill="currentColor" fill-opacity="0.15"/>
          <path d="M7 17.5a4 4 0 0 1-.6-7.95 5 5 0 0 1 9.6-1.9A4.5 4.5 0 0 1 17.5 17.5H7Z"/>
        </svg>`;
    case "rain":
      return `
        <svg viewBox="0 0 24 24" class="icon-rain h-8 w-8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6.5 14.5a3.8 3.8 0 0 1-.5-7.56 4.8 4.8 0 0 1 9.2-1.8A4.3 4.3 0 0 1 16.5 14.5h-10Z" fill="currentColor" fill-opacity="0.15"/>
          <path d="M6.5 14.5a3.8 3.8 0 0 1-.5-7.56 4.8 4.8 0 0 1 9.2-1.8A4.3 4.3 0 0 1 16.5 14.5h-10Z"/>
          <line class="drop" x1="8.5" y1="17" x2="8" y2="19.2"/>
          <line class="drop" x1="12" y1="17" x2="11.5" y2="19.2"/>
          <line class="drop" x1="15.5" y1="17" x2="15" y2="19.2"/>
        </svg>`;
    case "snow":
      return `
        <svg viewBox="0 0 24 24" class="icon-cloud h-8 w-8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path class="cloud-back" d="M6.5 13.5a3.8 3.8 0 0 1-.5-7.56 4.8 4.8 0 0 1 9.2-1.8A4.3 4.3 0 0 1 16.5 13.5h-10Z" fill="currentColor" fill-opacity="0.15"/>
          <path d="M6.5 13.5a3.8 3.8 0 0 1-.5-7.56 4.8 4.8 0 0 1 9.2-1.8A4.3 4.3 0 0 1 16.5 13.5h-10Z"/>
          <line x1="8.5" y1="17" x2="8.5" y2="20"/>
          <line x1="12" y1="17" x2="12" y2="20"/>
          <line x1="15.5" y1="17" x2="15.5" y2="20"/>
        </svg>`;
    case "storm":
      return `
        <svg viewBox="0 0 24 24" class="icon-storm h-8 w-8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6.5 13a3.8 3.8 0 0 1-.5-7.56 4.8 4.8 0 0 1 9.2-1.8A4.3 4.3 0 0 1 16.5 13h-10Z" fill="currentColor" fill-opacity="0.15"/>
          <path d="M6.5 13a3.8 3.8 0 0 1-.5-7.56 4.8 4.8 0 0 1 9.2-1.8A4.3 4.3 0 0 1 16.5 13h-10Z"/>
          <polygon class="bolt" points="12.5,14 9.5,18.5 11.5,18.5 10.5,22 14.5,16.5 12.3,16.5" fill="currentColor" stroke="none"/>
        </svg>`;
    default:
      return "";
  }
}

function skeletonCards(count = 7) {
  weatherContainer.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const card = document.createElement("div");
    card.className = "min-w-[140px] snap-start animate-pulse rounded-2xl border border-gray-200 bg-white p-5 shadow-sm";
    card.innerHTML = `
      <div class="mx-auto h-3 w-14 rounded bg-gray-200"></div>
      <div class="mx-auto my-4 h-8 w-8 rounded-full bg-gray-200"></div>
      <div class="mx-auto h-7 w-10 rounded bg-gray-200"></div>
      <div class="mx-auto mt-3 h-3 w-16 rounded bg-gray-200"></div>
      <div class="mt-4 border-t border-gray-100 pt-3">
        <div class="mx-auto h-2.5 w-12 rounded bg-gray-200"></div>
        <div class="mx-auto mt-2 h-2.5 w-12 rounded bg-gray-200"></div>
      </div>`;
    weatherContainer.appendChild(card);
  }
}

async function getWeather() {
  errorBox.classList.add("hidden");
  errorBox.classList.remove("flex");
  skeletonCards();

  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${LAT}&longitude=${LON}&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=7`,
    );

    if (!response.ok) throw new Error("Request failed");

    const data = await response.json();
    createCards(data);
  } catch (err) {
    weatherContainer.innerHTML = "";
    errorBox.classList.remove("hidden");
    errorBox.classList.add("flex");
  }
}

function createCards(data) {
  weatherContainer.innerHTML = "";

  const days = data.daily.time;
  const maxTemps = data.daily.temperature_2m_max;
  const minTemps = data.daily.temperature_2m_min;
  const codes = data.daily.weather_code;

  const todayKey = new Date().toDateString();

  days.forEach((day, index) => {
    const isToday = new Date(day).toDateString() === todayKey;
    const info = WEATHER_CODES[codes[index]] ?? { label: "—", icon: "cloud", accent: "slate" };
    const palette = ACCENTS[info.accent];

    const card = document.createElement("div");
    card.className = [
      "min-w-[140px] snap-start rounded-2xl border p-5 shadow-sm transition",
      "hover:-translate-y-0.5 hover:shadow-md",
      isToday ? `${palette.bg} border-transparent ring-2 ${palette.ring}` : "border-gray-200 bg-white",
    ].join(" ");

    card.innerHTML = `
      <p class="text-center text-sm font-medium ${isToday ? palette.text : "text-gray-500"}">
        ${isToday ? "Today" : formatDate(day)}
      </p>
 
      <div class="mx-auto my-3 flex h-12 w-12 items-center justify-center rounded-full ${palette.iconWrap}">
        ${weatherIcon(info.icon)}
      </div>
 
      <p class="text-center text-4xl font-bold tabular-nums text-gray-900">${Math.round(maxTemps[index])}°</p>
      <p class="mt-1 text-center text-sm text-gray-500">${info.label}</p>
 
      <div class="mt-4 flex items-center justify-center gap-3 border-t border-gray-100 pt-3 text-xs text-gray-500">
        <span class="flex items-center gap-1 text-rose-500">▲ ${Math.round(maxTemps[index])}°</span>
        <span class="flex items-center gap-1 text-sky-500">▼ ${Math.round(minTemps[index])}°</span>
      </div>
    `;

    weatherContainer.appendChild(card);
  });
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", { weekday: "long" });
}

retryBtn.addEventListener("click", getWeather);

getWeather();
