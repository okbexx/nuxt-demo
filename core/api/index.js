import Vue from 'vue';
import api from './modules';

Vue.api = {};
console.log('来一次,,')

const install = (Vue) => {
  if (install.installed) {
    return;
  }
  Vue.api['core'] = api;
  Vue.prototype.$api = Vue.api
  /*Object.defineProperties(Vue.prototype, {
    $api: {
      get () {
        return Vue.api;
      }
    }
  });*/
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default {
  install
};
