
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
//引入axios发送请求(axios为独立的组件,不需要Vue.use)-----------------------------------
import axios from 'axios'
axios.defaults.baseURL = 'http://www.litc.pro:9999/v1/';
Vue.prototype.axios = axios


//导航守卫拦截判断路由跳转
router.beforeEach((to,from,next)=>{
  let token = localStorage.getItem('token')
  if(!token && to.path !== '/login'){
    // console.log('死递归')
    return next('/login')
  }
  next()
})

//-------------添加响应拦截器-----------------------
axios.interceptors.request.use(config=> {
  // 在发送请求之前做些什么
  let token = localStorage.getItem('token')
  if(token){
    config.headers.Authorization	= token
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});



new Vue({
  el: '#app',
  router,
  render:h=>h(App)
})
