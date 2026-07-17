import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        // Core
        main: path.resolve(__dirname, "index.html"),
        contact: path.resolve(__dirname, "contact/index.html"),
        about: path.resolve(__dirname, "about/index.html"),
        // Kruger National Park
        krugernationalpark: path.resolve(__dirname, "kruger-national-park/index.html"),
        airportsguide: path.resolve(__dirname, "kruger-national-park/airports-guide/index.html"),
        besttimetovisit: path.resolve(__dirname, "kruger-national-park/best-time-to-visit/index.html"),
        weather: path.resolve(__dirname, "kruger-national-park/weather/index.html"),
        big5: path.resolve(__dirname, "kruger-national-park/wildlife/big-5/index.html"),
        blackrhinoceros: path.resolve(__dirname, "kruger-national-park/wildlife/black-rhinoceros/index.html"),
        buffalo: path.resolve(__dirname, "kruger-national-park/wildlife/buffalo/index.html"),
        elephant: path.resolve(__dirname, "kruger-national-park/wildlife/elephant/index.html"),
        leopard: path.resolve(__dirname, "kruger-national-park/wildlife/leopard/index.html"),
        lion: path.resolve(__dirname, "kruger-national-park/wildlife/lion/index.html"),
        whiterhinoceros: path.resolve(__dirname, "kruger-national-park/wildlife/white-rhinoceros/index.html"),
        krugerwildlife: path.resolve(__dirname, "kruger-national-park/wildlife/index.html"),
        // Safaris
        krugersafaris: path.resolve(__dirname, "kruger-safaris/index.html"),
        allinclusivesafaris: path.resolve(__dirname, "kruger-safaris/all-inclusive-packages/index.html"),
        safaris5day: path.resolve(__dirname, "kruger-safaris/5-day/index.html"),
        safaris6day: path.resolve(__dirname, "kruger-safaris/6-day/index.html"),
        safaris7day: path.resolve(__dirname, "kruger-safaris/7-day/index.html"),
        birdingkruger: path.resolve(__dirname, "kruger-safaris/birding-tours/index.html"),
        photographickruger: path.resolve(__dirname, "kruger-safaris/photographic/index.html"),

        // Kruger Guide
        krugerguide: path.resolve(__dirname, "kruger-guide/index.html"),
        whattowearonasafari: path.resolve(__dirname, "kruger-guide/what-to-wear-on-safari/index.html"),
        whitevsblackrhino: path.resolve(__dirname, "kruger-guide/difference-between-white-and-black-rhino/index.html"),
        whattobringonsafariblog: path.resolve(__dirname, "kruger-guide/what-to-bring-on-safari/index.html"),
        day3safari: path.resolve(__dirname, "kruger-guide/3-day-safari/index.html"),
        malariaguide: path.resolve(__dirname, "kruger-national-park/malaria-guide/index.html"),
      },
    },
  },
});
