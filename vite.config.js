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
        krugernationalpark: path.resolve(__dirname, 'kruger-national-park/index.html'),
        krugernationalparkbig5: path.resolve(__dirname, 'kruger-national-park/big-5/index.html'),
        krugernationalparkblackrhinoceros: path.resolve(__dirname, 'kruger-national-park/black-rhinoceros/index.html'),
        krugernationalparkbuffalo: path.resolve(__dirname, 'kruger-national-park/buffalo/index.html'),
        krugernationalparkelephant: path.resolve(__dirname, 'kruger-national-park/elephant/index.html'),
        krugernationalparkleopard: path.resolve(__dirname, 'kruger-national-park/leopard/index.html'),
        krugernationalparklion: path.resolve(__dirname, 'kruger-national-park/lion/index.html'),
        krugernationalparkwhiterhinoceros: path.resolve(__dirname, 'kruger-national-park/white-rhinoceros/index.html'),  
        krugernationalparkwildlife: path.resolve(__dirname, 'kruger-national-park/wildlife/index.html'),    
        allinclusivesafaris: path.resolve(__dirname, 'kruger-national-park/all-inclusive-safaris/index.html'),
        safaris5day: path.resolve(__dirname, 'kruger-national-park/5-day-safari/index.html'),
        safaris6day: path.resolve(__dirname, 'kruger-national-park/6-day-safari/index.html'),
        safaris7day: path.resolve(__dirname, 'kruger-national-park/7-day-safari/index.html'),
        about: path.resolve(__dirname, 'about/index.html'),
        blog: path.resolve(__dirname, 'blog/index.html'),
        contact: path.resolve(__dirname, 'contact/index.html'),

      }
    }
  }
})