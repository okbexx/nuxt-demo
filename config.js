// 在nuxt.config中只能使用CommonJS规范
const amodule = require('./pages/aModule')

module.exports = {
  host: process.env.NODE_ENV === 'development' ? '192.168.1.1' : '192.168.1.8',
  port: 1080,

  // 模块
  modules: {
      amodule
  }
}


