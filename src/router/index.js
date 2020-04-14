import Vue from 'vue'
import VueRouter from 'vue-router'
import MapView from '../views/Map/Map.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/map',
    name: 'Home',
    component: MapView
  },
]

const router = new VueRouter({
  routes
})

export default router
