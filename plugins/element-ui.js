import Vue from 'vue'
//   Tabs,
//   TabPane,
//   Tag,
//   Tree,
//   Alert,
//   Slider,
//   Icon,
//   Row,
//   Col,
//   Upload,
//   Progress,
//   Badge,
//   Card,
//   Rate,
//   Steps,
//   Step,
//   Carousel,
//   CarouselItem,
//   Collapse,
//   CollapseItem,
//   Cascader,
//   ColorPicker,
//   Transfer,
//   Container,
//import { Button } from 'element-ui'
/*import { Button } from 'element-ui'
import { Tabs } from 'element-ui'
import { Tree } from 'element-ui'
import { Alert } from 'element-ui'
import { Slider } from 'element-ui'
import { Upload } from 'element-ui'
import { ColorPicker } from 'element-ui'
import { CollapseItem } from 'element-ui'
import { Collapse } from 'element-ui'
import { Container } from 'element-ui'
import { Transfer } from 'element-ui'*/
import locale from 'element-ui/lib/locale/lang/en'

export default () => {
 // Vue.use(Element, { locale })
 // Vue.use(Button)
/*  Vue.use(Button)
  Vue.use(Tabs)
  Vue.use(Tree)
  Vue.use(Alert)
  Vue.use(Slider)
  Vue.use(Upload)
  Vue.use(ColorPicker)
  Vue.use(CollapseItem)
  Vue.use(Collapse)
  Vue.use(Container)
  Vue.use(Transfer)*/

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
