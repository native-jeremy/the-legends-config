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

    if (response === 200)
    {
      const getData = response;
      let applyData = getData.data.Completed;
      console.log(applyData);
      let workout = document.querySelectorAll(".workouts");
      let icon = document.querySelectorAll(".completed-icon");
  
      setTimeout(loopCompleted, 2000);
      function loopCompleted ()
      {
        
        for (let i = 0; i < applyData.length; i++) {
          icon[i].classList.add("complete-indicator");
          //console.log(applyData.length)
        }
        /*for (let index = 0; index < workout.length; index++) {
          console.log(workout[index])
        }*/
      }
  
      setTimeout(() => {
        let progressNum = applyData.length / workout.length * 100
        const circleProgress = new CircleProgress('.circle-latest');
          circleProgress.attr({
          max: 100,
          value: progressNum,
          textFormat: "percent",
          indeterminateText: 0
        });
      }, 2000)
    }
  });
}
