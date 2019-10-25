/*global Vue */
/*global fetch*/

let app = new Vue({
    el: '#app',
    data: {
        players: [],
        prefix: '',
        index: 0,
    },
    methods: {
        async fetchREST() {
          console.log("In Fetch " + this.prefix);
          this.index += 1;
          let id = this.index;
          let response = await axios("https://www.balldontlie.io/api/v1/players?search=" + this.prefix);
          if (id != this.index) 
          {
              return;
          }
            
          console.log(response);
          
          this.players = response.data.data;
          
          console.log(this.players);
        },
  },
});