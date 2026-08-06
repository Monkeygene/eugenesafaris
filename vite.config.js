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
        birdingkrugertour: path.resolve(__dirname, "kruger-birding-tour/index.html"),
        photographickruger: path.resolve(__dirname, "kruger-photographic-safari/index.html"),
        // Kruger National Park Guide
        krugernationalpark: path.resolve(__dirname, "kruger-national-park/index.html"),
      },
    },
  },
});
