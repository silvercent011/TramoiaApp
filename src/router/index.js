import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import(/* webpackChunkName: "projects" */ '../views/ProjectSelector.vue')
  },
  {
    path: '/projects/:id',
    name: 'ProjectsPg',
    component: () => import(/* webpackChunkName: "projectspg" */ '../views/ProjectPage.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
