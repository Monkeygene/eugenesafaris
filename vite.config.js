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
        besttimetovisit: path.resolve(__dirname, 'kruger-national-park/best-time-to-visit/index.html'),
        big5: path.resolve(__dirname, 'kruger-national-park/wildlife/big-5/index.html'),
        blackrhinoceros: path.resolve(__dirname, 'kruger-national-park/wildlife/black-rhinoceros/index.html'),
        buffalo: path.resolve(__dirname, 'kruger-national-park/wildlife/buffalo/index.html'),
        elephant: path.resolve(__dirname, 'kruger-national-park/wildlife/elephant/index.html'),
        leopard: path.resolve(__dirname, 'kruger-national-park/wildlife/leopard/index.html'),
        lion: path.resolve(__dirname, 'kruger-national-park/wildlife/lion/index.html'),
        whiterhinoceros: path.resolve(__dirname, 'kruger-national-park/wildlife/white-rhinoceros/index.html'),  
        krugerwildlife: path.resolve(__dirname, 'kruger-national-park/wildlife/index.html'),    
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