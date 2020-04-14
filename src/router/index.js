import Vue from 'vue'
import VueRouter from 'vue-router'
import currentLocation from '@/views/currentLocation/currentLocation.vue'
import PassOver from '@/views/PassOver/PassOver.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/currentLocation',
    name: 'currentLocation',
    component: currentLocation
  },
  {
    path: '/PassOver',
    name: 'PassOver',
    component: PassOver
  },
]

const router = new VueRouter({
  routes
})

export default router
