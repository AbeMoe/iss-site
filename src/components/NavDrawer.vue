<template>
    <v-navigation-drawer app color="primary" dark expand-on-hover>   
        <v-list-item
          v-for="button in buttons"
          :key="button.title"
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

    </v-navigation-drawer>
</template>

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