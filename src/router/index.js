import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import loginContainer from '../components/login'
export default new Router({
  routes: [
    {path:'/',redirect:'/login'},
    {path:'/login',component:loginContainer}
  ]
})
