import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import loginContainer from '../components/login'
import addressContainer from '../components/address'
export default new Router({
  routes: [
    {path:'/',redirect:'/login'},
    {path:'/login',component:loginContainer},
    {path:'/address',component:addressContainer}

  ]
})
