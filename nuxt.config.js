const pkg = require('./package')
const config = require('./config')
const path = require('path')
const consola = require('consola')
console.log('prosess', process.env.NODE_ENV)
module.exports = {
  mode: 'universal',
  extractCSS: true, // 开启公共css提取
  styleResources: {
    scss: ['./assets/scss/_variables.scss', './assets/scss/_mixin.scss'],
    // sass: ...
  },


 /* loadingIndicator: {  // spa模式下生效
    name: 'fading-circle',
    color: '#3B8070',
    background: 'white'
  },*/
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: 'blue',
    height: '5px'
  },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios',
    '@/plugins/addSjComponents',
    '@/plugins/common'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // 这里配置开发环境和生产环境的host
    host: config.host,
    port: config.port,
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {

    babel: {
      plugins: [
        [
          'component',
          {
            'libraryName': 'element-ui',
            'styleLibraryName': 'theme-chalk'
          }
        ]
      ]
    },
    /*
   ** You can extend webpack config here
   */
    extend(config, ctx) {
      Object.assign(config.resolve.alias, {
        'utils': path.resolve(__dirname, 'utils'),
        'components': path.resolve(__dirname, 'components')
      })
      if (ctx.isClient) {
        config.devtool = 'eval-source-map'
      }
    }
  }
}
