export default {
  
  name: 'peopleinSpace',

  data: function() 
  {
    return{
      people:[],
      snackbar: false,
      snackbarMessage: 'Error!',
      total:undefined
      
    }
  },
  async mounted()
  {
    try
    {
      var result = await this.axios.get('http://api.open-notify.org/astros.json')
      this.total = result.data.number
      this.people = result.data.people;
    }
    catch(e)
    {
      console.log(e);
      alert('failed to get postion!');
    }
    
  }
}