import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: '/eugenesafaris/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about/index.html'),
        contact: path.resolve(__dirname, 'contact/index.html'),
        krugernationalpark: path.resolve(__dirname, 'kruger-national-park/index.html'),
        krugernationalparksafaris: path.resolve(__dirname, 'kruger-national-park/safaris/index.html'),
        krugernationalparkallinclusivesafaris: path.resolve(__dirname, 'kruger-national-park/all-inclusive-safari-packages/index.html'),
        krugernationalparkallinclusivesafaris5day: path.resolve(__dirname, 'kruger-national-park/all-inclusive-safari-packages/5-day-private-safari/index.html'),
        krugernationalparkallinclusivesafaris6day: path.resolve(__dirname, 'kruger-national-park/all-inclusive-safari-packages/6-day-private-safari/index.html'),
        krugernationalparkallinclusivesafaris7day: path.resolve(__dirname, 'kruger-national-park/all-inclusive-safari-packages/7-day-private-safari/index.html'),
        krugernationalparkclassicsafaris: path.resolve(__dirname, 'kruger-national-park/classic-safari-packages/index.html'),
        krugernationalparkclassicsafaris5day: path.resolve(__dirname, 'kruger-national-park/classic-safari-packages/5-day-private-safari/index.html'),
        krugernationalparkclassicsafaris6day: path.resolve(__dirname, 'kruger-national-park/classic-safari-packages/6-day-private-safari/index.html'),
        krugernationalparkclassicsafaris7day: path.resolve(__dirname, 'kruger-national-park/classic-safari-packages/7-day-private-safari/index.html'),
        krugernationalparkphotographicsafari: path.resolve(__dirname, 'kruger-national-park/photographic-safari/index.html'),
        krugernationalparsafarionfilm: path.resolve(__dirname, 'kruger-national-park/safari-on-film/index.html'),
        krugernationalparkguide: path.resolve(__dirname, 'kruger-national-park/guide/index.html'),
        krugernationalparkmalaria: path.resolve(__dirname, 'kruger-national-park/guide/malaria/index.html'),
        krugernationalparkairports: path.resolve(__dirname, 'kruger-national-park/guide/airports/index.html'),
        krugernationalparkeastgate: path.resolve(__dirname, 'kruger-national-park/guide/airports/eastgate/index.html'),
        krugernationalparkkmia: path.resolve(__dirname, 'kruger-national-park/guide/airports/kmia/index.html'),
        krugernationalparkskukuza: path.resolve(__dirname, 'kruger-national-park/guide/airports/skukuza/index.html'),
        krugernationalparkweather: path.resolve(__dirname, 'kruger-national-park/guide/weather/index.html'),
        krugernationalparkweatheroctober: path.resolve(__dirname, 'kruger-national-park/guide/weather/october/index.html'),

      }
    }
  }
})