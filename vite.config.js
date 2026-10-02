import { defineConfig } from "vite";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const root = fileURLToPath(new URL(".", import.meta.url));

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
        inclusivesafaris: path.resolve(__dirname, "kruger-national-park/safari-all-inclusive-packages/index.html"),
        privatesafaris: path.resolve(__dirname, "kruger-national-park/private-safari/index.html"),
        privatesafarishoedspruit: path.resolve(__dirname, "kruger-national-park/private-safari/hoedspruit/index.html"),
        privatesafarismarloth: path.resolve(__dirname, "kruger-national-park/private-safari/marloth-park/index.html"),
        birdingkrugertour: path.resolve(__dirname, "kruger-national-park/bird-watching-safari/index.html"),
        photographickruger: path.resolve(__dirname, "kruger-national-park/photographic-safari/index.html"),
        // Kruger Guides
        krugerguide: path.resolve(__dirname, "kruger-guide/index.html"),
        differencebetweenbandwrhino: path.resolve(
          __dirname,
          "kruger-guide/difference-between-white-and-black-rhino/index.html",
        ),
        whattobring: path.resolve(__dirname, "kruger-guide/what-to-bring-on-safari/index.html"),
        whattowear: path.resolve(__dirname, "kruger-guide/what-to-wear-on-safari/index.html"),
        // Kruger National Park
        krugernationalpark: path.resolve(__dirname, "kruger-national-park/index.html"),
        malariaguide: path.resolve(__dirname, "kruger-national-park/malaria/index.html"),
        airports: path.resolve(__dirname, "kruger-national-park/airports/index.html"),
        besttimetovisit: path.resolve(__dirname, "kruger-national-park/best-time-to-visit/index.html"),
        // Weather
        weather: path.resolve(__dirname, "kruger-national-park/weather/index.html"),
        // Wildlife
        wildlife: path.resolve(__dirname, "kruger-national-park/wildlife/index.html"),
        big5: path.resolve(__dirname, "kruger-national-park/wildlife/big-5/index.html"),
        blackrhino: path.resolve(__dirname, "kruger-national-park/wildlife/black-rhinoceros/index.html"),
        buffalo: path.resolve(__dirname, "kruger-national-park/wildlife/buffalo/index.html"),
        elephant: path.resolve(__dirname, "kruger-national-park/wildlife/elephant/index.html"),
        leopard: path.resolve(__dirname, "kruger-national-park/wildlife/leopard/index.html"),
        lion: path.resolve(__dirname, "kruger-national-park/wildlife/lion/index.html"),
        whiterhino: path.resolve(__dirname, "kruger-national-park/wildlife/white-rhinoceros/index.html"),
        // Rest Camps
        restcamps: path.resolve(__dirname, "kruger-national-park/rest-camps/index.html"),
        // Other Pages
        404: resolve(root, "404.html"),
        410: resolve(root, "410.html"),
      },
    },
  },
});
