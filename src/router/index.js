import Vue from 'vue'
import VueRouter from 'vue-router'
import currentLocation from '@/views/currentLocation/currentLocation.vue'
import PassOver from '@/views/PassOver/PassOver.vue'
import peopleInSpace from '@/views/peopleInSpace/peopleInSpace.vue'


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
  {
    path: '/peopleInSpace',
    name: 'peopleInSpace',
    component: peopleInSpace
  },
]

const router = new VueRouter({
  routes
})

export default router
