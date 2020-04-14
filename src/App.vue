<template>
  <v-app>
    <NavDrawer :buttons="buttons"/>
      <v-content>
            <router-view/>
      </v-content>
  </v-app>
</template>

<script>
import NavDrawer from '@/components/NavDrawer.vue'
export default {
  data ()  {
    return {
      buttons:
      [
        { title: 'Current Location', icon: 'mdi-map', route:'/currentLocation' },
        { title: 'Pass Over Times', icon: 'mdi-map', route:'/PassOver' },
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