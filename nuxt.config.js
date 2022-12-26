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
    title: "Online Games on Taptogame — Let's play",
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
          'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content:
          'On Taptogame you can play free online games at home or on the road. Taptogame has the best online game selection and offers the most fun experience to play alone or with friends. We support mobile and desktop games.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'free games, game to play online, online games, free games to play, online games for gamers, game y8, poki, yad, crazygames, babygames, scorenga, actiongameshub, 958games',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: "Online Games on Taptogame — Let's play",
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'On Taptogame you can play free online games at home or on the road. Taptogame has the best online game selection and offers the most fun experience to play alone or with friends. We support mobile and desktop games.',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://taptogame.com/',
      },
      // todo
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://cloud.taptogame.com/web/fore-end/static/taptogame.png',
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
        content: "Online Games on Taptogame — Let's play",
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'On Taptogame you can play free online games at home or on the road. Taptogame has the best online game selection and offers the most fun experience to play alone or with friends. We support mobile and desktop games.',
      },
      // todo
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content:
          'https://cloud.taptogame.com/web/fore-end/static/taptogame.png',
      },
    ],
    link: [
      // todo
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', sizes: '512x512', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/favicon.ico' },
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
      name: 'gameseeks',
      short_name: 'gameseeks',
      description:
        'On Gameseeks you can play free online games at home or on the road. Gameseeks has the best online game selection and offers the most fun experience to play alone or with friends. We support mobile and desktop games.',
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
