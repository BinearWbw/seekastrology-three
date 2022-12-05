module.exports = {
  /*
   ** Server configuration
   */
  server: {
    port: 3000,
    host: '0.0.0.0',
  },

  env: {
    origin: 'kfreegame',
  },

  axios: {
    baseURL: process.env.PUBLIC_URL,
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.PUBLIC_URL,
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.PRIVATE_URL,
    },
  },

  telemetry: false,

  hooks: {
    'render:route': (url, result) => {
      result.html = result.html
        .replace(/ data-n-head=".*?"/gi, '')
        .replace(/ data-hid=".*?"/gi, '')
    },
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'unity',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  router: {
    mode: 'history',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~plugins/axios', '~plugins/utils'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue-toastification/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /* https://gamecenter-superman.oss-cn-chengdu.aliyuncs.com/web/ */
    publicPath: process.env.PUBLIC_PATH,
    maxChunkSize: 300000,
    // extractCSS: {
    //   ignoreOrder: true,
    // },
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
  },
}
