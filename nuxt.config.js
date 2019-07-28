const pkg = require('./package');
const webpack = require("webpack");

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{ 
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.typekit.net/rcn2uwp.css'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: 'rgba(0, 210, 128, 1)'
  },
  loadingIndicator: {
    name: 'circle'
  },

  /*
   ** Global CSS
   */
  css: [
    '~/assets/styles/global.scss'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/icons/icons.js', 
    '~plugins/date-filter.js',
    { src: '~/plugins/VueFlickity.js', ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],



  /*
   ** Axios module configuration
   */


  axios: {
    baseURL: process.env.BASE_URL || 'https://api.scimitar.io',
    credentials: false
  },


  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */

    plugins: [
      new webpack.ProvidePlugin({
        // '$': 'jquery',
        '_': 'lodash'
        // ...etc.
      })
    ],

    extend(config, ctx) {
      if (ctx.isClient) {
        config.devtool = '#source-map'
      }
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://api.scimitar.io',
    keyAPI: '',
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  }
}
