import Vue from 'vue'
import {Loading,
  MessageBox,
  Message,
  Notification} from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

export default () => {
  Vue.prototype.$loading = Loading.service;
  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;

  Vue.component('el-button', () => {
    import('element-ui/lib/theme-chalk/button.css')
    return import('element-ui/lib/button')
  })
  Vue.component('el-tabs', () => {
    import('element-ui/lib/theme-chalk/tabs.css')
    import('element-ui/lib/tabs')
  })
  Vue.component('el-tree', () => {
    import('element-ui/lib/theme-chalk/tree.css')
    import('element-ui/lib/tree')
  })
  Vue.component('el-alert', () => {
    import('element-ui/lib/theme-chalk/alert.css')
    import('element-ui/lib/alert')
  })
  Vue.component('el-slider', () => {
    import('element-ui/lib/theme-chalk/slider.css')
    import('element-ui/lib/slider')
  })
  Vue.component('el-color-picker', () => {
    import('element-ui/lib/theme-chalk/color-picker.css')
    import('element-ui/lib/color-picker')
  })
  Vue.component('el-collapse-item', () => {
    import('element-ui/lib/theme-chalk/collapse-item.css')
    import('element-ui/lib/collapse-item')
  })
  Vue.component('el-collapse', () => {
    import('element-ui/lib/theme-chalk/collapse.css')
    import('element-ui/lib/collapse')
  })
  Vue.component('el-container', () => {
    import('element-ui/lib/theme-chalk/container.css')
    import('element-ui/lib/container')
  })
  Vue.component('el-transfer', () => {
    import('element-ui/lib/theme-chalk/transfer.css')
    import('element-ui/lib/transfer')
  })

}
