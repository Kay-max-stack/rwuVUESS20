import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    //Über diese Arrows werden die Components direkt importiert
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/jokes',
    name: 'Jokes',
    component: () => import('../views/Jokes.vue')
  },
  {
    path: '/beer',
    name: 'Beer',
    component: () => import('../views/Beer.vue')
  }
]
//Wurde initial beim Erzeugen des Routers generiert
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
