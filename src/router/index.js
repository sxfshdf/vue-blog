import Vue from 'vue'
import Router from 'vue-router'

import Home from '../pages/home/home.vue'
import Login from '../pages/login/login.vue'
import Register from '../pages/register/register.vue'
import Create from '../pages/create/create.vue'
import My from '../pages/my/my.vue'
import Detail from '../pages/detail/detail.vue'
import User from '../pages/user/user.vue'
import Edit from '../pages/edit/edit.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home
  },{
    path: '/login',
    component: Login
  },{
    path: '/register',
    component: Register
  },{
    path: '/create',
    component: Create
  },{
    path: '/my',
    component: My
  },{
    path: '/detail',
    component: Detail
  },{
    path: '/user',
    component: User
  },{
    path: '/edit',
    component: Edit
  }

]

export default new Router({
  routes
})