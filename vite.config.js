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
        krugernationalpark: path.resolve(
          __dirname,
          "kruger-national-park/index.html",
        ),
        besttimetovisit: path.resolve(
          __dirname,
          "kruger-national-park/best-time-to-visit/index.html",
        ),
        big5: path.resolve(__dirname, "wildlife/big-5/index.html"),
        blackrhinoceros: path.resolve(
          __dirname,
          "wildlife/black-rhinoceros/index.html",
        ),
        buffalo: path.resolve(__dirname, "wildlife/buffalo/index.html"),
        elephant: path.resolve(__dirname, "wildlife/elephant/index.html"),
        leopard: path.resolve(__dirname, "wildlife/leopard/index.html"),
        lion: path.resolve(__dirname, "wildlife/lion/index.html"),
        whiterhinoceros: path.resolve(
          __dirname,
          "wildlife/white-rhinoceros/index.html",
        ),
        krugerwildlife: path.resolve(__dirname, "wildlife/index.html"),
        allinclusivesafaris: path.resolve(
          __dirname,
          "kruger-all-inclusive-safaris/index.html",
        ),
        safaris5day: path.resolve(
          __dirname,
          "kruger-all-inclusive-safaris/5-day/index.html",
        ),
        safaris6day: path.resolve(
          __dirname,
          "kruger-all-inclusive-safaris/6-day/index.html",
        ),
        safaris7day: path.resolve(
          __dirname,
          "kruger-all-inclusive-safaris/7-day/index.html",
        ),
        birdingkruger: path.resolve(
          __dirname,
          "kruger-all-inclusive-safaris/birding/index.html",
        ),
        photographickruger: path.resolve(
          __dirname,
          "kruger-all-inclusive-safaris/photographic/index.html",
        ),
        about: path.resolve(__dirname, "about/index.html"),
        blog: path.resolve(__dirname, "blog/index.html"),
        whattowearonasafari: path.resolve(
          __dirname,
          "blog/what-to-wear-on-safari/index.html",
        ),
        differencebetweenwhitandblackrhino: path.resolve(
          __dirname,
          "blog/difference-between-white-and-black-rhino/index.html",
        ),
        whattobringonsafariblog: path.resolve(
          __dirname,
          "blog/what-to-bring-on-safari/index.html",
        ),
        contact: path.resolve(__dirname, "contact/index.html"),
      },
    },
  },
});
