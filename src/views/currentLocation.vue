<template>
    <Map/>
</template>

<script>
import Map from '@/components/Map.vue'
export default {
  
  name: 'MapView',
  components: 
  {
    Map,
  },
  data: function() 
  {
    return{
      google: undefined,
      position: undefined,
      center:{lat:0,lng:0}
    }
  },
  async mounted()
  {
    try
    {
      var google = await this.$gmapApiPromiseLazy();
      var result = await this.axios.get('http://api.open-notify.org/iss-now.json')
      var {latitude, longitude} = result.data.iss_position;
      var iss_position = new google.maps.LatLng(latitude,longitude);
      this.position = iss_position
      this.$refs.map.$mapObject.panTo({lat:parseFloat(latitude),lng:parseFloat(longitude)})
    }
    catch(e)
    {
      console.log(e);
      alert('failed to get postion!');
    }
    
  }
}
</script>
