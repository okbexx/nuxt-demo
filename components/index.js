import Logo from './logo'
import config from './config'

const install = function (Vue, opts = {}) {
 // Vue.$m = 'a'
  if (install.installed) return
  Vue.component(config.prefix + 'Logo', () => import('./logo'))
}

export default {
  install
}
