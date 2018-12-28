import Vue from 'vue'
import { Button } from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

export default () => {
 // Vue.use(Element, { locale })
  Vue.component(Button.name, Button)
}
