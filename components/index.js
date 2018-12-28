import Logo from './logo'

const install = function (Vue, opts = {}) {
 // Vue.$m = 'a'
  if (install.installed) return
  Vue.component(Logo.name, Logo)
}

export default {
  install
}
