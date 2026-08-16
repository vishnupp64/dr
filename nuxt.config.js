import data from './static/storedata.json'
let dynamicRoutes = () => {
  return new Promise(resolve => {
    resolve(data.map(el => `inventions/${el.id}`))
  })
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "vpaniker",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  generate: {
    routes: dynamicRoutes
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["normalize.css/normalize.css", "milligram/dist/milligram.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-youtube-player.client.js', '~plugins/vue-gallery.client.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [["@nuxtjs/google-fonts"]],

  googleFonts: {
    families: {
      "Shadows+Into+Light": true,
      'IBM Plex Sans Condensed': [300],
      'IBM Plex Serif': true,
      'IBM Plex Sans': [600, 700],
      Voltaire: true,
      "Luckiest Guy": true,
      "Poller One": true,
      "Alfa Slab One": true

      // Roboto: true,
      // "Josefin+Sans": true,
      // Lato: [100, 300],
      // Raleway: {
      //   wght: [100, 400],
      //   ital: [100]
      // }
    }
  },
  env: {
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    EMAILJS_USER_ID: process.env.EMAILJS_USER_ID,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-youtube-embed'],
    extend(config, { isDev }) {
      // webpack 4 defaults to md4 hashing, which OpenSSL 3 (Node 17+)
      // removed. Vercel builds with Node 24 -> use sha256 instead.
      config.output.hashFunction = 'sha256'
      // ModuleConcatenationPlugin hardcodes md4 internally, so disable it.
      if (!isDev && config.optimization) {
        config.optimization.concatenateModules = false
      }
    }
  }
};
