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