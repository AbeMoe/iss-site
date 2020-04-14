<template>
    <v-navigation-drawer app  expand-on-hover>
      <v-container fill-height fluid ma-0 pa-0>
        <v-row align="center" justify="space-around"  v-for="button in buttons" :key="button.title">
          <v-list-item
           link
          :to="button.route"
          >
          <v-list-item-icon>
            <v-icon>{{ button.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ button.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-row>
      </v-container>
        

    </v-navigation-drawer>
</template>
<style scoped>

</style>
  <script>
  export default {
    data () {
      return {

      }
    },
    props:
    {
      buttons: Array,
    },
  }
</script>