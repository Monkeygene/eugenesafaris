import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "/",

  plugins: [tailwindcss()],

  build: {
    outDir: "dist",

    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        contact: path.resolve(__dirname, "contact/index.html"),
        about: path.resolve(__dirname, "about/index.html"),
        // Safaris
        allinclusivesafaris: path.resolve(__dirname, "kruger-all-inclusive-safaris/index.html"),
        privatesafaris: path.resolve(__dirname, "kruger-all-inclusive-safaris/index.html"),
        birdingkrugertour: path.resolve(__dirname, "kruger-birding-tour/index.html"),
        photographickruger: path.resolve(__dirname, "kruger-photographic-safari/index.html"),
        // Blog
        krugerguide: path.resolve(__dirname, "kruger-guide/index.html"),
        differencebetweenbandwrhino: path.resolve(
          __dirname,
          "kruger-guide/difference-between-white-and-black-rhino/index.html",
        ),
        whattobring: path.resolve(__dirname, "kruger-guide/what-to-bring-on-safari/index.html"),
        whattowear: path.resolve(__dirname, "kruger-guide/what-to-wear-on-safari/index.html"),
        // Kruger National Park Guide
        krugernationalpark: path.resolve(__dirname, "kruger-national-park/index.html"),
        wildlife: path.resolve(__dirname, "kruger-national-park/wildlife/index.html"),
        lionsinkruger: path.resolve(__dirname, "kruger-national-park/wildlife/lion/index.html"),
        malariaguide: path.resolve(__dirname, "kruger-national-park/malaria-guide/index.html"),
        airportsguide: path.resolve(__dirname, "kruger-national-park/airports-guide/index.html"),
        besttimetovisit: path.resolve(__dirname, "kruger-national-park/best-time-to-visit/index.html"),
        weather: path.resolve(__dirname, "kruger-national-park/weather/index.html"),
        bigfive: path.resolve(__dirname, "kruger-national-park/wildlife/index.html"),
        blackrhino: path.resolve(__dirname, "kruger-national-park/wildlife/index.html"),
        buffalo: path.resolve(__dirname, "kruger-national-park/wildlife/index.html"),
        elephant: path.resolve(__dirname, "kruger-national-park/wildlife/index.html"),
        leopard: path.resolve(__dirname, "kruger-national-park/wildlife/index.html"),
        lion: path.resolve(__dirname, "kruger-national-park/wildlife/index.html"),
        whiterhino: path.resolve(__dirname, "kruger-national-park/wildlife/index.html"),
      },
    },
  },
});
