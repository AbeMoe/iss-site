module.exports = {
  
  name: 'MapView',

  data: function() 
  {
    return{
      google: undefined,
      position: undefined,
      label: undefined,
      snackbar:false,
      snackbarMessage: "error!",
      center:{lat:0,lng:0}
    }
  },
  methods:
  {
    passOverTime: async function(e)
    {
      try
      {
      this.snackbar = false;
      console.log(`http://api.open-notify.org/iss-pass.json?lat=${e.latLng.lat()}&lon=${e.latLng.lng()}&n=1`);
      //var result = await this.axios.get(`http://api.open-notify.org/iss-pass.json?lat=${e.latLng.lat()}&lon=${e.latLng.lng()}`)
      this.position = e.latLng
      var date = new Date(result.data.response[0].risetime);
      
      this.snackbarMessage = `The ISS will pass over here on ${date.toString()}`;
      this.snackbar = true;
      }
      catch(e)
      {
        this.snackbarMessage = `Unable to process your request at this time :(`;
        this.snackbar = true;
      }
    }
  },
  async mounted()
  {
    this.snackbarMessage = `Click anywhere to see when the ISS will pass overhead!`;
      this.snackbar = true;
    
  }
}