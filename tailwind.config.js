/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./about/index.html",
  "./contact/index.html",
  "./kruger-national-park/index.html",
  "./kruger-national-park/safaris/index.html",
  "./kruger-national-park/all-inclusive-safari-packages/index.html",
  "./kruger-national-park/all-inclusive-safari-packages/5-day-private-safari/index.html",
  "./kruger-national-park/all-inclusive-safari-packages/6-day-private-safari/index.html",
  "./kruger-national-park/all-inclusive-safari-packages/7-day-private-safari/index.html",
  "./kruger-national-park/classic-safari-packages/index.html",
  "./kruger-national-park/classic-safari-packages/5-day-private-safari/index.html",
  "./kruger-national-park/classic-safari-packages/6-day-private-safari/index.html",
  "./kruger-national-park/classic-safari-packages/7-day-private-safari/index.html",
  "./kruger-national-park/photographic-safari/index.html",
  "./kruger-national-park/safari-on-film/index.html",
  "./kruger-national-park/guide/index.html",
  "./kruger-national-park/guide/malaria/index.html",
  "./kruger-national-park/guide/airports/index.html",
  "./kruger-national-park/guide/airports/eastgate/index.html",
  "./kruger-national-park/guide/airports/kmia/index.html",
  "./kruger-national-park/guide/airports/skukuza/index.html",
  "./kruger-national-park/guide/weather/index.html",
  "./kruger-national-park/guide/weather/october/index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        linen: 'rgb(254, 252, 250)',
      },
      fontFamily: {
        avenir: ['"Avenir Light"', 'system-ui', 'sans-serif'],
        nunito: ['"Nunito Regular"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}