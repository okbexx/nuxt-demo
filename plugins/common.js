// 在这里相当于普通项目的main.js

import Vue from 'vue'
import api from '../core/api'
const config = require('~/config')

if (config && config.modules) {
  Object.keys(config.modules).map((item) => {
    Vue.use(config.modules[item]);
  });
}

Vue.use(api)

export default ({app}, inject) => {
 /* inject('xxx',(string) => {
    console.log('thanks',string)
  })*/
}

