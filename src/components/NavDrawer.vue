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
        name: this.$store.state.firstname,
        color: 'primary',
        colors: [
          'primary',
          'blue',
          'success',
          'red',
          'teal',
        ],
        drawer: false,
        expandOnHover: true,
        temporary: false,
      }
    },
    mounted:function ()
    {
      console.log(this.isMobile())
      if(this.isMobile())
      {
        //this.drawer= false
        //this.temporary = false
      }
      else
      {
        this.drawer = true
      }
    },
    methods:
    {
      isMobile:function ()
      {
        const toMatch = 
        [
          /Android/i,
          /webOS/i,
          /iPhone/i,
          /iPad/i,
          /iPod/i,
          /BlackBerry/i,
          /Windows Phone/i
        ];
        return toMatch.some((toMatchItem) => {
          return navigator.userAgent.match(toMatchItem);
        });
      },
      hide: function()
      {
        this.drawer = !this.drawer;
      },
      logout: async function()
      {
        await this.$store.dispatch('logout');
        this.$router.push({name:'login'});
      }
    },
    props:
    {
      buttons: Array,
    },
  }
</script>