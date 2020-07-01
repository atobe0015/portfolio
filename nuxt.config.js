require('dotenv').config();

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  server: {
    port: 3000,
    host: "0.0.0.0",
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '@/plugins/vue-components.ts',
      ssr: true
    }, {
      src: '@/plugins/vue-utils.ts',
      ssr: true
    }, {
      src: '@/plugins/vue-validate.ts',
      ssr: true
    },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources',
    'nuxt-user-agent',
  ],

  /*
  ** Global CSS
  */
  css: [{
    src: '@/assets/scss/preload.scss',
    lang: 'scss'
  }],

  styleResources: {
    scss: ['@/assets/scss/_variable.scss']
  },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
