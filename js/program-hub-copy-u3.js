/* Define - Intialisation - Elements Retreived
----------------------------------------------------------------
*/

//Element Triggers


/* Wized Intialisation
----------------------------------------------------------------
*/

window.onload = async () => {

    // Completed Data Load
    Wized.request.await("Load Users", (response) => {
        const getData = response;
        let applyCompleted = getData.data.Completed;
        let applyWeek = getData.data.Completed_Week;
        let applyName = getData.data.Completed_Name;
        let applyWorkout = getData.data.Completed_Workout_ID;
  
        const app = Vue.createApp( {
        data () {
          return {
              showBooks: true,
              books: [
                  {title: "Hello MJX Family", author: 'Morgan', image: 'images/mjx.jpg'},
                  {title: "Hello Xavier", author: 'Morgan', image: 'images/xav.jpg'},
                  {title: "Hello Jessica", author: 'Morgan', image: 'images/jess.jpg'},
              ],
              getData.data
          }
        },
        methods: {
            toggleBooks() {
                this.showBooks = !this.showBooks
            },
        }
        })
  
        app.mount('#app');
          const circleProgress = new CircleProgress('.circle-latest');
          circleProgress.attr({
          max: 100,
          value: 0,
          textFormat: "percent",
          indeterminateText: 0});
    });
  };
