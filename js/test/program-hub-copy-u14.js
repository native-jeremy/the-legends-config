 /* Define - Intialisation - Elements Retreived
----------------------------------------------------------------
*/

//Element Triggers


/* Wized Intialisation
----------------------------------------------------------------
*/

window.onload = async () => {

    // Completed Data Load
    Wized.request.await("Load Users Program Hub", (response) => {
        const getData = response;
        let applyCompleted = getData.data.Completed;
        let applyWeek = getData.data.Completed_Week;
        let applyName = getData.data.Completed_Name;
        let applyWorkout = getData.data.Completed_Workout_ID;
        console.log('getData ', getData)
  
        const app = Vue.createApp( {
        data () {
          return {
              showBooks: true,
              books: [
                  {title: "Hello DEV NDA", author: 'DEV NDA', image: '', number: "1"},
                  {title: "Hello DEV NDA", author: 'DEV NDA', image: '',  number: "2"},
                  {title: "Hello DEV NDA", author: 'DEV NDA', image: '',  number: "3"},
                  {title: "Hello DEV NDA", author: 'DEV NDA', image: '', number: "4"},
                  {title: "Hello DEV NDA", author: 'DEV NDA', image: '',  number: "5"},
                  {title: "Hello DEV NDA", author: 'DEV NDA', image: '',  number: "6"},
                  {title: "Hello DEV NDA", author: 'DEV NDA', image: '', number: "7"},
                  {title: "Hello DEV NDA", author: 'DEV NDA', image: '',  number: "8"},
                  {title: "Hello DEV NDA", author: 'DEV NDA', image: '',  number: "9"},
              ],
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
