<template>
  <v-app>
    <NavDrawer :buttons="buttons"/>
    <router-view></router-view>
  </v-app>
</template>

<script>
import NavDrawer from '@/components/NavDrawer.vue'
export default {
  data ()  {
    return {
      buttons:
      [
        { title: 'Analytics', icon: 'mdi-chart-line', route:'/analytics' },
        { title: 'Users', icon: 'mdi-account',route:'/users' },
        { title: 'Resources', icon: 'mdi-food-apple',route:'/resources' },
        { title: 'Category', icon: 'mdi-map-marker-multiple',route:'/category' },
        { title: 'Copilotships', icon: 'mdi-account-multiple',route:'/mentorship'}
      ]
    }
  },
  name: 'App',
  components: 
  {
    NavDrawer,
  }
}
</script>