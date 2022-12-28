module.exports = {
  /*
   ** Server configuration
   */
  server: {
    port: 3001,
    host: '127.0.0.1',
  },

  env: {
    origin: process.env.NODE_ENV === 'development' ? 'kfreegame' : 'taptogame',
  },

  axios: {
    baseURL: process.env.PUBLIC_URL,
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.PUBLIC_URL,
    },
    imgUrl: 'https://gamecenter-superman.oss-cn-chengdu.aliyuncs.com/',
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
    title:
      'Taptogame－dedicated to the dreams and wonders of the young crowd, play with your own colors in the game!',
    meta: [
      { charset: 'utf-8' },
      {
        hid: 'theme-color',
        property: 'theme-color',
        content: '#1f2128',
      },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
      { name: 'apple-mobile-web-app-title', content: 'taptogame' },
      { name: 'HandheldFriendly', content: 'true' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui,shrink-to-fit=no viewport-fit=cover',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Taptogame is a platform that gathers countless young gamers with the best free online games. All of our games are designed to provide young people with a better way to relax and have fun, with healthy gameplay and a wide range of styles waiting for your selection. When you are looking for fun through games, Taptogame will be your faithful choice, offering you a more comprehensive range of games, the most diverse selection and as many new surprises as possible!',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'Role-playing games, entertainment games, puzzle games, strategy games, cute games, pet games, parkour games, synthesis games, dress up games, princess games, adventure games, casual games, healing games, horror games, music games, cooking games',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content:
          'Taptogame－dedicated to the dreams and wonders of the young crowd, play with your own colors in the game!',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Taptogame is a platform that gathers countless young gamers with the best free online games. All of our games are designed to provide young people with a better way to relax and have fun, with healthy gameplay and a wide range of styles waiting for your selection. When you are looking for fun through games, Taptogame will be your faithful choice, offering you a more comprehensive range of games, the most diverse selection and as many new surprises as possible!',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://taptogame.com/',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://taptogame.com/favicon.png',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: 'twitter:domain',
        name: 'twitter:domain',
        content: 'taptogame.com',
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://taptogame.com/',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content:
          'Taptogame－dedicated to the dreams and wonders of the young crowd, play with your own colors in the game!',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Taptogame is a platform that gathers countless young gamers with the best free online games. All of our games are designed to provide young people with a better way to relax and have fun, with healthy gameplay and a wide range of styles waiting for your selection. When you are looking for fun through games, Taptogame will be your faithful choice, offering you a more comprehensive range of games, the most diverse selection and as many new surprises as possible!',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://taptogame.com/favicon.png',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', sizes: '512x512', href: '/favicon.png' },
      { rel: 'apple-touch-icon', href: '/favicon.png' },
    ],
  },

  router: {
    mode: 'history',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/axios',
    '~plugins/utils',
    '~plugins/vue-lazyload',
    '~plugins/vue-gtag',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'vue-toastification/nuxt',
    '@nuxtjs/pwa',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  toast: {
    draggable: false,
  },

  pwa: {
    icon: {
      source: '/favicon.png',
      fileName: 'favicon.png',
    },
    manifest: {
      name: 'taptogame',
      short_name: 'taptogame',
      description:
        'Taptogame is a platform that gathers countless young gamers with the best free online games. All of our games are designed to provide young people with a better way to relax and have fun, with healthy gameplay and a wide range of styles waiting for your selection. When you are looking for fun through games, Taptogame will be your faithful choice, offering you a more comprehensive range of games, the most diverse selection and as many new surprises as possible!',
    },
    // workbox: {
    //   dev: true,
    // },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /* https://gamecenter-superman.oss-cn-chengdu.aliyuncs.com/web/ */
    publicPath: process.env.PUBLIC_PATH,
    maxChunkSize: 300000,
    extractCSS: {
      ignoreOrder: true,
    },
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
