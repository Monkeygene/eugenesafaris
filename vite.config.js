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
        besttimetovisitkruger: path.resolve(__dirname, 'best-time-to-visit-kruger-national-park/index.html'),
        birding: path.resolve(__dirname, 'birding/index.html'),
        birdingkrugernationalpark: path.resolve(__dirname, 'birding/kruger-national-park/index.html'),
        blog: path.resolve(__dirname, 'blog/index.html'),
        contact: path.resolve(__dirname, 'contact/index.html'),
        krugernationalpark: path.resolve(__dirname, 'kruger-national-park/index.html'),
        krugernationalparkprivatesafaris: path.resolve(__dirname, 'kruger-national-park/private-safaris/index.html'),
        krugernationalparksafariallinclusivepackages: path.resolve(__dirname, 'kruger-national-park/safari-all-inclusive-packages/index.html'),
        krugernationalparksafariallinclusivepackage5day: path.resolve(__dirname, 'kruger-national-park/safari-all-inclusive-packages/5-day-private-safari/index.html'),
        krugernationalparksafariallinclusivepackage6day: path.resolve(__dirname, 'kruger-national-park/safari-all-inclusive-packages/6-day-private-safari/index.html'),
        krugernationalparksafariallinclusivepackage7day: path.resolve(__dirname, 'kruger-national-park/safari-all-inclusive-packages/7-day-private-safari/index.html'),
        krugernationalparkclassicsafaris: path.resolve(__dirname, 'kruger-national-park/safari-packages/index.html'),
        krugernationalparksafaris5day: path.resolve(__dirname, 'kruger-national-park/safari-packages/5-day-private-safari/index.html'),
        krugernationalparksafaris6day: path.resolve(__dirname, 'kruger-national-park/safari-packages/6-day-private-safari/index.html'),
        krugernationalparksafaris7day: path.resolve(__dirname, 'kruger-national-park/safari-packages/7-day-private-safari/index.html'),
        krugernationalparkphotographicsafari: path.resolve(__dirname, 'kruger-national-park/photographic-safari/index.html'),
        krugernationalparsafarionfilm: path.resolve(__dirname, 'kruger-national-park/safari-on-film/index.html'),
        krugernational3daysafari: path.resolve(__dirname, 'kruger-national-park/3-day-safari/index.html'),
        krugernationalparkguide: path.resolve(__dirname, 'kruger-national-park/guide/index.html'),
        krugernationalparkmalaria: path.resolve(__dirname, 'kruger-national-park/malaria/index.html'),
        krugernationalparkairports: path.resolve(__dirname, 'kruger-national-park/airports/index.html'),
        krugernationalparkeastgate: path.resolve(__dirname, 'kruger-national-park/airports/eastgate/index.html'),
        krugernationalparkkmia: path.resolve(__dirname, 'kruger-national-park/airports/kmia/index.html'),
        krugernationalparkskukuza: path.resolve(__dirname, 'kruger-national-park/airports/skukuza/index.html'),
        krugernationalparkweather: path.resolve(__dirname, 'kruger-national-park/weather/index.html'),
        krugernationalparkweatherjanuary: path.resolve(__dirname, 'kruger-national-park/weather/january/index.html'),
        krugernationalparkweatherfebruary: path.resolve(__dirname, 'kruger-national-park/weather/february/index.html'),
        krugernationalparkweathermarch: path.resolve(__dirname, 'kruger-national-park/weather/march/index.html'),
        krugernationalparkweatherapril: path.resolve(__dirname, 'kruger-national-park/weather/april/index.html'),
        krugernationalparkweathermay: path.resolve(__dirname, 'kruger-national-park/weather/may/index.html'),
        krugernationalparkweatherjune: path.resolve(__dirname, 'kruger-national-park/weather/june/index.html'),
        krugernationalparkweatherjuly: path.resolve(__dirname, 'kruger-national-park/weather/july/index.html'),
        krugernationalparkweatheraugust: path.resolve(__dirname, 'kruger-national-park/weather/august/index.html'),
        krugernationalparkweatherseptember: path.resolve(__dirname, 'kruger-national-park/weather/september/index.html'),
        krugernationalparkweatheroctober: path.resolve(__dirname, 'kruger-national-park/weather/october/index.html'),
        krugernationalparkweathernovember: path.resolve(__dirname, 'kruger-national-park/weather/november/index.html'),
        krugernationalparkweatherdecember: path.resolve(__dirname, 'kruger-national-park/weather/december/index.html'),
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
        whattowearonsafar: path.resolve(__dirname, 'what-to-wear-on-a-safari/index.html'),
        whattobringonanafricansafari: path.resolve(__dirname, 'what-to-bring-on-an-african-safari/index.html')
      }
    }
  }
})