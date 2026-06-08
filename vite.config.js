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
        
        // Airports
        airportsguide: path.resolve(__dirname, 'kruger-national-park/airports-guide/index.html'),
        besttimetovisitkruger: path.resolve(__dirname, 'kruger-national-park/best-time-to-visit/index.html'),
        krugernationalparkbig5: path.resolve(__dirname, 'kruger-national-park/wildlife/big-5/index.html'),
        // Birds
        birds: path.resolve(__dirname, 'kruger-national-park/wildlife/index.html'),
        bateleur: path.resolve(__dirname, 'kruger-national-park/wildlife/bateleur/index.html'),
        brownHeadedParrot: path.resolve(__dirname, 'kruger-national-park/wildlife/brown-headed-parrot/index.html'),
        crestedBarbet: path.resolve(__dirname, 'kruger-national-park/wildlife/crested-barbet/index.html'),
        lilacBreastedRoller: path.resolve(__dirname, 'kruger-national-park/wildlife/lilac-breasted-roller/index.html'),
        purpleRoller: path.resolve(__dirname, 'kruger-national-park/wildlife/purple-roller/index.html'),
        reedCormorant: path.resolve(__dirname, 'kruger-national-park/wildlife/reed-cormorant/index.html'),
        verreauxsEagleOwl: path.resolve(__dirname, 'kruger-national-park/wildlife/verreauxs-eagle-owl/index.html'),
        whiteFacedWhistlingDuck: path.resolve(__dirname, 'kruger-national-park/wildlife/white-faced-whistling-duck/index.html'),
        // Floweres
        impalaLily: path.resolve(__dirname, 'kruger-national-park/wildlife/impala-lily/index.html'),
        leopardOrchid: path.resolve(__dirname, 'kruger-national-park/wildlife/leopard-orchid/index.html'),
        malaria: path.resolve(__dirname, 'kruger-national-park/malaria-guide/index.html'),
        // Reptiles
        reptiles: path.resolve(__dirname, 'kruger-national-park/wildlife/reptiles/index.html'),
        flapneckchameleon: path.resolve(__dirname, 'kruger-national-park/wildlife/flap-necked-chameleon/index.html'),
        restCamps: path.resolve(__dirname, 'kruger-national-park/rest-camps/index.html'),
        worstTime: path.resolve(__dirname, 'kruger-national-park/worst-time-to-visit/index.html'),
        pundamariarestcamp: path.resolve(__dirname, 'kruger-national-park/rest-camps/punda-maria/index.html'),

        // Wildlife Hub
        wildlife: path.resolve(__dirname, 'kruger-national-park/wildlife/index.html'),
        mammals: path.resolve(__dirname, 'kruger-national-park/wildlife/mammals/index.html'),

         // Mammal Species
        aardvark: path.resolve(__dirname, 'kruger-national-park/wildlife/aardvark/index.html'),
        africanBuffalo: path.resolve(__dirname, 'kruger-national-park/wildlife/african-buffalo/index.html'),
        africanBushElephant: path.resolve(__dirname, 'kruger-national-park/wildlife/african-bush-elephant/index.html'),
        africanLeopard: path.resolve(__dirname, 'kruger-national-park/wildlife/african-leopard/index.html'),
        africanWildcat: path.resolve(__dirname, 'kruger-national-park/wildlife/african-wildcat/index.html'),
        blackBackedJackal: path.resolve(__dirname, 'kruger-national-park/wildlife/black-backed-jackal/index.html'),
        blackRhinoceros: path.resolve(__dirname, 'kruger-national-park/wildlife/black-rhinoceros/index.html'),
        blueWildebeest: path.resolve(__dirname, 'kruger-national-park/wildlife/blue-wildebeest/index.html'),
        burchellsZebra: path.resolve(__dirname, 'kruger-national-park/wildlife/burchells-zebra/index.html'),
        bushbuck: path.resolve(__dirname, 'kruger-national-park/wildlife/bushbuck/index.html'),
        capePorcupine: path.resolve(__dirname, 'kruger-national-park/wildlife/cape-porcupine/index.html'),
        caracal: path.resolve(__dirname, 'kruger-national-park/wildlife/caracal/index.html'),
        chacmaBaboon: path.resolve(__dirname, 'kruger-national-park/wildlife/chacma-baboon/index.html'),
        cheetah: path.resolve(__dirname, 'kruger-national-park/wildlife/cheetah/index.html'),
        civet: path.resolve(__dirname, 'kruger-national-park/wildlife/civet/index.html'),
        commonDuiker: path.resolve(__dirname, 'kruger-national-park/wildlife/common-duiker/index.html'),
        dwarfMongoose: path.resolve(__dirname, 'kruger-national-park/wildlife/dwarf-mongoose/index.html'),
        eland: path.resolve(__dirname, 'kruger-national-park/wildlife/eland/index.html'),
        greaterKudu: path.resolve(__dirname, 'kruger-national-park/wildlife/greater-kudu/index.html'),
        hippopotamus: path.resolve(__dirname, 'kruger-national-park/wildlife/hippopotamus/index.html'),
        honeyBadger: path.resolve(__dirname, 'kruger-national-park/wildlife/honey-badger/index.html'),
        impala: path.resolve(__dirname, 'kruger-national-park/wildlife/impala/index.html'),
        klipspringer: path.resolve(__dirname, 'kruger-national-park/wildlife/klipspringer/index.html'),
        largeSpottedGenet: path.resolve(__dirname, 'kruger-national-park/wildlife/large-spotted-genet/index.html'),
        lesserGalago: path.resolve(__dirname, 'kruger-national-park/wildlife/lesser-galago/index.html'),
        lion: path.resolve(__dirname, 'kruger-national-park/wildlife/lion/index.html'),
        nyala: path.resolve(__dirname, 'kruger-national-park/wildlife/nyala/index.html'),
        pangolin: path.resolve(__dirname, 'kruger-national-park/wildlife/pangolin/index.html'),
        rockHyrax: path.resolve(__dirname, 'kruger-national-park/wildlife/rock-hyrax/index.html'),
        scrubHare: path.resolve(__dirname, 'kruger-national-park/wildlife/scrub-hare/index.html'),
        southernGiraffe: path.resolve(__dirname, 'kruger-national-park/wildlife/southern-giraffe/index.html'),
        spottedHyena: path.resolve(__dirname, 'kruger-national-park/wildlife/spotted-hyena/index.html'),
        treeSquirrel: path.resolve(__dirname, 'kruger-national-park/wildlife/tree-squirrel/index.html'),
        vervetMonkey: path.resolve(__dirname, 'kruger-national-park/wildlife/vervet-monkey/index.html'),
        warthog: path.resolve(__dirname, 'kruger-national-park/wildlife/warthog/index.html'),
        waterbuck: path.resolve(__dirname, 'kruger-national-park/wildlife/waterbuck/index.html'),
        whiteRhinoceros: path.resolve(__dirname, 'kruger-national-park/wildlife/white-rhinoceros/index.html'),
        wildDog: path.resolve(__dirname, 'kruger-national-park/wildlife/wild-dog/index.html'),

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