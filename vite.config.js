import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        about: path.resolve(__dirname, 'about/index.html'),
        blog: path.resolve(__dirname, 'blog/index.html'),
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
        krugernationalparkmalaria: path.resolve(__dirname, 'kruger-national-park/malaria/index.html'),
        krugernationalparkairports: path.resolve(__dirname, 'kruger-national-park/airports/index.html'),
        krugernationalparkeastgate: path.resolve(__dirname, 'kruger-national-park/airports/eastgate/index.html'),
        krugernationalparkkmia: path.resolve(__dirname, 'kruger-national-park/airports/kmia/index.html'),
        krugernationalparkskukuza: path.resolve(__dirname, 'kruger-national-park/airports/skukuza/index.html'),
        krugernationalparkweather: path.resolve(__dirname, 'kruger-national-park/weather/index.html'),
        krugernationalparkweatheroctober: path.resolve(__dirname, 'kruger-national-park/weather/october/index.html'),
        krugernationalparmammals: path.resolve(__dirname, 'kruger-national-park/mammals/index.html'),
        krugernationalparbig5: path.resolve(__dirname, 'kruger-national-park/mammals/big-5/index.html'),
        krugernationalparklion: path.resolve(__dirname, 'kruger-national-park/mammals/lion/index.html'),
        krugernationalparkleopard: path.resolve(__dirname, 'kruger-national-park/mammals/leopard/index.html'),
        krugernationalparkbuffalo: path.resolve(__dirname, 'kruger-national-park/mammals/buffalo/index.html'),
        krugernationalparkelephant: path.resolve(__dirname, 'kruger-national-park/mammals/elephant/index.html'),
        krugernationalparkwhiterhinoceros: path.resolve(__dirname, 'kruger-national-park/mammals/white-rhinoceros/index.html'),
        krugernationalparkblackrhinoceros: path.resolve(__dirname, 'kruger-national-park/mammals/black-rhinoceros/index.html'),
        krugernationalparkrhinoceros: path.resolve(__dirname, 'kruger-national-park/mammals/rhinoceros/index.html'),
        whitevsblackrhino: path.resolve(__dirname, 'difference-between-white-and-black-rhino/index.html'),


      }
    }
  }
})