import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {

        // Core
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about/index.html'),
        blog: path.resolve(__dirname, 'blog/index.html'),
        differencecbetweenwhiteandblackrhino: path.resolve(__dirname, 'blog/difference-between-white-and-black-rhino/index.html'),
        whattobringonasafari: path.resolve(__dirname, 'blog/what-to-bring-on-a-safari/index.html'),
        whattowearonasafari: path.resolve(__dirname, 'blog/what-to-wear-on-a-safari/index.html'),
        contact: path.resolve(__dirname, 'contact/index.html'),
        krugernationalpark: path.resolve(__dirname, 'kruger-national-park/index.html'),
        
        // General Info
        airportsguide: path.resolve(__dirname, 'kruger-national-park/airports-guide/index.html'),
        besttimetovisitkruger: path.resolve(__dirname, 'kruger-national-park/best-time-to-visit/index.html'),
        krugernationalparkbig5: path.resolve(__dirname, 'kruger-national-park/big-5/index.html'),
        malaria: path.resolve(__dirname, 'kruger-national-park/malaria-guide/index.html'),

        // Rest Camps
        restCamps: path.resolve(__dirname, 'kruger-national-park/rest-camps/index.html'),

        worstTime: path.resolve(__dirname, 'kruger-national-park/worst-time-to-visit/index.html'),
        pundamariarestcamp: path.resolve(__dirname, 'kruger-national-park/rest-camps/punda-maria/index.html'),

        // Wildlife Hub
        wildlife: path.resolve(__dirname, 'kruger-national-park/wildlife/index.html'),
        mammals: path.resolve(__dirname, 'kruger-national-park/mammals/index.html'),

         // Mammal Species
        africanBuffalo: path.resolve(__dirname, 'kruger-national-park/african-buffalo/index.html'),
        africanBushElephant: path.resolve(__dirname, 'kruger-national-park/african-bush-elephant/index.html'),
        africanLeopard: path.resolve(__dirname, 'kruger-national-park/african-leopard/index.html'),
        blackRhinoceros: path.resolve(__dirname, 'kruger-national-park/black-rhinoceros/index.html'),
        lion: path.resolve(__dirname, 'kruger-national-park/lion/index.html'),
        whiteRhinoceros: path.resolve(__dirname, 'kruger-national-park/white-rhinoceros/index.html'),

        // Safari Pages
        safariPackages: path.resolve(__dirname, 'kruger-national-park/safari-packages/index.html'),
        birdingsafaris: path.resolve(__dirname, 'kruger-national-park/birding-safari/index.html'),
        photographicSafari: path.resolve(__dirname, 'kruger-national-park/photographic-safari/index.html'),
        privateSafaris: path.resolve(__dirname, 'kruger-national-park/private-safaris/index.html'),
        safariAllInclusivePackages: path.resolve(__dirname, 'kruger-national-park/all-inclusive-safaris/index.html'),
        Safari3Day: path.resolve(__dirname, 'kruger-national-park/3-day-safari/index.html'),
        Safari5Day: path.resolve(__dirname, 'kruger-national-park/5-day-safari/index.html'),
        Safari6Day: path.resolve(__dirname, 'kruger-national-park/6-day-safari/index.html'),
        Safari7Day: path.resolve(__dirname, 'kruger-national-park/7-day-safari/index.html'),
        safariOnFilm: path.resolve(__dirname, 'kruger-national-park/safari-on-film/index.html'),

        // Weather Hub
        krugernationalparkweather: path.resolve(__dirname, 'kruger-national-park/weather/index.html'),


      }
    }
  }
})