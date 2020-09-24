import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import About from '../views/About.vue'
// import Schedule from '../components/Schedule.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
      component: () => import('@/components/Viewrecord')
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import('@/components/Schedule')
  }

]

const router = new VueRouter({
  routes
})

export default router
