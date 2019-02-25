const pkg = require('./package')
const config = require('./config')
const path = require('path')
console.log('prosess', process.env.NODE_ENV)
module.exports = {
  mode: 'universal',
  extractCSS: true, // 开启公共css提取

  // 这里的会在每个页面都载入
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
  // 页面跳转动画
  transition: 'test',
  /*
  ** 这里的CSS只会在全局载入，就是只会载入一次
  */
  css: [
    /*'element-ui/lib/theme-chalk/index.css',*/
    './assets/scss/_index.scss'
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
    // See https://github.com/nuxt-communlity/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
  //  analyze: true,
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
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: "initial",
        minSize: 3000,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
          commons: {
            chunks: 'initial',
            name: 'commons',
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 0, // 优先级
          },
          // 单独打包vue插件
          'vue-vendor': {
            chunks: 'initial',
            test: /[\\/]node_modules[\\/]vue/, // <- window | mac -> /node_modules/vue/
            name: 'vue-vendor',
            minChunks: 1,
            priority: -9,
            enforce: true,
          },
          // 单独打包element插件
          'ele-vendor': {
            chunks: 'initial',
            test: /[\\/]node_modules[\\/]element-ui/, // <- window | mac -> /node_modules/vue/
            name: 'ele-vendor',
            minChunks: 1,
            priority: -9,
            enforce: true,
          },
          vendor: {
            chunks: 'initial',
            test: /node_modules/,
            name: 'vendor',
            priority: -10,
            enforce: true,
          }
        }
      }
    },
    /*
   ** You can extend webpack config here
   */
    extend(config, ctx) {
      Object.assign(config.resolve.alias, {
        'utils': path.resolve(__dirname, 'utils'),
        'components': path.resolve(__dirname, 'components')
      })
      /*if (ctx.isClient) {
        config.devtool = 'source-map'  // 配置所有模式的inline-source-map
       }*/
    //  config.devtool = 'inline-source-map'
     //  console.log('config',config)
    }
  }
}
