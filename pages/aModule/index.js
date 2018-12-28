/*import api from './api'

const install = function (Vue, opts= {}) {
if (install.installed) return
  Vue.api['amodule'] = api
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install
};*/

const api = require('./api')

const install = function (Vue, opts= {}) {
  if (install.installed) return
  Vue.api['amodule'] = api
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

module.exports = {
  install
}
