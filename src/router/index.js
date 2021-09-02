import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import ('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import ('../views/Login.vue'),
    beforeEnter: (to, from, next) => {
      if(store.state.auth.token){
        next({
          path: '/page-not-found',
          query: {
            redirectFrom: to.fullPath
          }
        })
      }else{
        next()
      }
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    beforeEnter: (to, from, next) => {
      if(store.state.auth.token){
        next({
          path: '/page-not-found',
          query: {
            redirectFrom: to.fullPath
          }
        })
      }else{
        next()
      }
    }
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/Users.vue'),
    beforeEnter: (to, from, next) => {
      if(store.state.auth.token === ''){
        next({
          path: '/login',
          query: {
            redirectFrom: to.fullPath
          }
        })
      }else{
        next()
      }
    }
  },
  {
    path: '/employees',
    name: 'Employees',
    component: () => import('../views/Employees.vue'),
    beforeEnter: (to, from, next) => {
      if(store.state.auth.token === ''){
        next({
          path: '/login',
          query: {
            redirectFrom: to.fullPath
          }
        })
      }else{
        next()
      }
    }
  },
  {
    path: '/page-not-found',
    name: 'NotFound',
    component: () => import('../views/PageNotFound.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/page-not-found'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
