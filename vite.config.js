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
        contact: path.resolve(__dirname, 'contact/index.html'),
        blog: path.resolve(__dirname, 'blog/index.html'),

         // Kruger Hub
        kruger: path.resolve(__dirname, 'kruger-national-park/index.html'),
        kruger3DaySafari: path.resolve(__dirname, 'kruger-national-park/3-day-safari/index.html'),
        airports: path.resolve(__dirname, 'kruger-national-park/airports/index.html'),
        eastgateAirport: path.resolve(__dirname, 'kruger-national-park/airports/eastgate/index.html'),
        kmiaAirport: path.resolve(__dirname, 'kruger-national-park/airports/kmia/index.html'),
        skukuzaAirport: path.resolve(__dirname, 'kruger-national-park/airports/skukuza/index.html'),
        bestTime: path.resolve(__dirname, 'kruger-national-park/best-time-to-visit/index.html'),
        big5: path.resolve(__dirname, 'kruger-national-park/big-5/index.html'),
        flowers: path.resolve(__dirname, 'kruger-national-park/flowers/index.html'),
        impalaLily: path.resolve(__dirname, 'kruger-national-park/flowers/impala-lily/index.html'),
        leopardOrchid: path.resolve(__dirname, 'kruger-national-park/flowers/leopard-orchid/index.html'),
        grasses: path.resolve(__dirname, 'kruger-national-park/grasses/index.html'),
        guide: path.resolve(__dirname, 'kruger-national-park/guide/index.html'),
        malaria: path.resolve(__dirname, 'kruger-national-park/malaria/index.html'),
        reptiles: path.resolve(__dirname, 'kruger-national-park/reptiles/index.html'),
        restCamps: path.resolve(__dirname, 'kruger-national-park/rest-camps/index.html'),
        wildlife: path.resolve(__dirname, 'kruger-national-park/wildlife/index.html'),
        worstTime: path.resolve(__dirname, 'kruger-national-park/worst-time-to-visit/index.html'),

        // Birds Hub
        birds: path.resolve(__dirname, 'kruger-national-park/birds/index.html'),

        // Bird Species
        bateleur: path.resolve(__dirname, 'kruger-national-park/birds/bateleur/index.html'),
        brownHeadedParrot: path.resolve(__dirname, 'kruger-national-park/birds/brown-headed-parrot/index.html'),
        crestedBarbet: path.resolve(__dirname, 'kruger-national-park/birds/crested-barbet/index.html'),
        lilacBreastedRoller: path.resolve(__dirname, 'kruger-national-park/birds/lilac-breasted-roller/index.html'),
        purpleRoller: path.resolve(__dirname, 'kruger-national-park/birds/purple-roller/index.html'),
        reedCormorant: path.resolve(__dirname, 'kruger-national-park/birds/reed-cormorant/index.html'),
        verreauxsEagleOwl: path.resolve(__dirname, 'kruger-national-park/birds/verreauxs-eagle-owl/index.html'),
        whiteFacedWhistlingDuck: path.resolve(__dirname, 'kruger-national-park/birds/white-faced-whistling-duck/index.html'),

        // Mammals Hub
        mammals: path.resolve(__dirname, 'kruger-national-park/mammals/index.html'),

         // Mammal Species
        aardvark: path.resolve(__dirname, 'kruger-national-park/mammals/aardvark/index.html'),
        africanBuffalo: path.resolve(__dirname, 'kruger-national-park/mammals/african-buffalo/index.html'),
        africanBushElephant: path.resolve(__dirname, 'kruger-national-park/mammals/african-bush-elephant/index.html'),
        africanLeopard: path.resolve(__dirname, 'kruger-national-park/mammals/african-leopard/index.html'),
        africanWildcat: path.resolve(__dirname, 'kruger-national-park/mammals/african-wildcat/index.html'),
        blackBackedJackal: path.resolve(__dirname, 'kruger-national-park/mammals/black-backed-jackal/index.html'),
        blackRhinoceros: path.resolve(__dirname, 'kruger-national-park/mammals/black-rhinoceros/index.html'),
        blueWildebeest: path.resolve(__dirname, 'kruger-national-park/mammals/blue-wildebeest/index.html'),
        burchellsZebra: path.resolve(__dirname, 'kruger-national-park/mammals/burchells-zebra/index.html'),
        bushbuck: path.resolve(__dirname, 'kruger-national-park/mammals/bushbuck/index.html'),
        capePorcupine: path.resolve(__dirname, 'kruger-national-park/mammals/cape-porcupine/index.html'),
        caracal: path.resolve(__dirname, 'kruger-national-park/mammals/caracal/index.html'),
        chacmaBaboon: path.resolve(__dirname, 'kruger-national-park/mammals/chacma-baboon/index.html'),
        cheetah: path.resolve(__dirname, 'kruger-national-park/mammals/cheetah/index.html'),
        civet: path.resolve(__dirname, 'kruger-national-park/mammals/civet/index.html'),
        commonDuiker: path.resolve(__dirname, 'kruger-national-park/mammals/common-duiker/index.html'),
        dwarfMongoose: path.resolve(__dirname, 'kruger-national-park/mammals/dwarf-mongoose/index.html'),
        eland: path.resolve(__dirname, 'kruger-national-park/mammals/eland/index.html'),
        greaterKudu: path.resolve(__dirname, 'kruger-national-park/mammals/greater-kudu/index.html'),
        hippopotamus: path.resolve(__dirname, 'kruger-national-park/mammals/hippopotamus/index.html'),
        honeyBadger: path.resolve(__dirname, 'kruger-national-park/mammals/honey-badger/index.html'),
        impala: path.resolve(__dirname, 'kruger-national-park/mammals/impala/index.html'),
        klipspringer: path.resolve(__dirname, 'kruger-national-park/mammals/klipspringer/index.html'),
        largeSpottedGenet: path.resolve(__dirname, 'kruger-national-park/mammals/large-spotted-genet/index.html'),
        lesserGalago: path.resolve(__dirname, 'kruger-national-park/mammals/lesser-galago/index.html'),
        lion: path.resolve(__dirname, 'kruger-national-park/mammals/lion/index.html'),
        nyala: path.resolve(__dirname, 'kruger-national-park/mammals/nyala/index.html'),
        pangolin: path.resolve(__dirname, 'kruger-national-park/mammals/pangolin/index.html'),
        rockHyrax: path.resolve(__dirname, 'kruger-national-park/mammals/rock-hyrax/index.html'),
        scrubHare: path.resolve(__dirname, 'kruger-national-park/mammals/scrub-hare/index.html'),
        southernGiraffe: path.resolve(__dirname, 'kruger-national-park/mammals/southern-giraffe/index.html'),
        spottedHyena: path.resolve(__dirname, 'kruger-national-park/mammals/spotted-hyena/index.html'),
        treeSquirrel: path.resolve(__dirname, 'kruger-national-park/mammals/tree-squirrel/index.html'),
        vervetMonkey: path.resolve(__dirname, 'kruger-national-park/mammals/vervet-monkey/index.html'),
        warthog: path.resolve(__dirname, 'kruger-national-park/mammals/warthog/index.html'),
        waterbuck: path.resolve(__dirname, 'kruger-national-park/mammals/waterbuck/index.html'),
        whiteRhinoceros: path.resolve(__dirname, 'kruger-national-park/mammals/white-rhinoceros/index.html'),
        wildDog: path.resolve(__dirname, 'kruger-national-park/mammals/wild-dog/index.html'),

        // Safari Pages
        safariPackages: path.resolve(__dirname, 'kruger-national-park/safari-packages/index.html'),
        photographicSafari: path.resolve(__dirname, 'kruger-national-park/photographic-safari/index.html'),
        privateSafaris: path.resolve(__dirname, 'kruger-national-park/private-safaris/index.html'),
        privateSafari5Day: path.resolve(__dirname, 'kruger-national-park/private-safaris/5-day/index.html'),
        privateSafari6Day: path.resolve(__dirname, 'kruger-national-park/private-safaris/6-day/index.html'),
        privateSafari7Day: path.resolve(__dirname, 'kruger-national-park/private-safaris/7-day/index.html'),
        safariAllInclusivePackages: path.resolve(__dirname, 'kruger-national-park/safari-all-inclusive-packages/index.html'),
        safariAllInclusive5Day: path.resolve(__dirname, 'kruger-national-park/safari-all-inclusive-packages/5-day-private-safari/index.html'),
        safariAllInclusive6Day: path.resolve(__dirname, 'kruger-national-park/safari-all-inclusive-packages/6-day-private-safari/index.html'),
        safariAllInclusive7Day: path.resolve(__dirname, 'kruger-national-park/safari-all-inclusive-packages/7-day-private-safari/index.html'),
        safariOnFilm: path.resolve(__dirname, 'kruger-national-park/safari-on-film/index.html'),

        // Weather Hub
        weather: path.resolve(__dirname, 'kruger-national-park/weather/index.html'),
        weatherJanuary: path.resolve(__dirname, 'kruger-national-park/weather/january/index.html'),
        weatherFebruary: path.resolve(__dirname, 'kruger-national-park/weather/february/index.html'),
        weatherMarch: path.resolve(__dirname, 'kruger-national-park/weather/march/index.html'),
        weatherApril: path.resolve(__dirname, 'kruger-national-park/weather/april/index.html'),
        weatherMay: path.resolve(__dirname, 'kruger-national-park/weather/may/index.html'),
        weatherJune: path.resolve(__dirname, 'kruger-national-park/weather/june/index.html'),
        weatherJuly: path.resolve(__dirname, 'kruger-national-park/weather/july/index.html'),
        weatherAugust: path.resolve(__dirname, 'kruger-national-park/weather/august/index.html'),
        weatherSeptember: path.resolve(__dirname, 'kruger-national-park/weather/september/index.html'),
        weatherOctober: path.resolve(__dirname, 'kruger-national-park/weather/october/index.html'),
        weatherNovember: path.resolve(__dirname, 'kruger-national-park/weather/november/index.html'),
        weatherDecember: path.resolve(__dirname, 'kruger-national-park/weather/december/index.html'),

      }
    }
  }
})