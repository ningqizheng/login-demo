
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//----------引入公共样式,取消默认样式-------------------
import './styles/common.css'
//引入element-ui及样式
import ElementUI from 'element-ui'
Vue.use(ElementUI)
import 'element-ui/lib/theme-chalk/index.css'
new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})
