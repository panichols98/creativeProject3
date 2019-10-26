/*global Vue */
/*global fetch*/
/*global axios*/

let app = new Vue({
    el: '#app',
    data: {
        players: [],
        prefix: '',
        index: 0,
        viewStats: false,
        playerData: [],
    },
    methods: {
        async fetchREST() {
            this.viewStats = false;
            console.log("In Fetch " + this.prefix);
            this.index += 1;
            let id = this.index;
            let response = await axios("https://www.balldontlie.io/api/v1/players?search=" + this.prefix);
            if (id != this.index) {
                return;
            }
            console.log("response");
            console.log(response);

            this.players = response.data.data;

            console.log("players");
            console.log(this.players);

        },
        async getStats(id) {
            this.viewStats = true;
            let response = await axios("https://www.balldontlie.io/api/v1/season_averages?season=2018&player_ids[]=" + id);
            this.playerData = response.data.data;
            console.log(this.playerData[0]);
        },
    },
});
