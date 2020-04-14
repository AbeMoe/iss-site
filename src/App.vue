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
        { title: 'Map', icon: 'mdi-map', route:'/map' },
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