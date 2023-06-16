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
    let applyData = getData.data.Completed;
    console.log(applyData);
    //let workout = document.querySelectorAll(".workouts");
    let icon = document.querySelectorAll(".completed-icon");
    let workout = document.querySelectorAll(".workout");
    
    setTimeout(loopCompleted, 2000);
    
    function loopCompleted ()
    {
      for (let i = 0; i < applyData.length; i++) {
        icon[i].classList.add("complete-indicator");
        let completeAmount = applyData.length
        console.log(completeAmount)
      }
    }
      for (let index = 0; index < workout.length; index++) {
        let workoutAmount = workout.length;
        console.log(workoutAmount)
      }

      let progressNum = workoutAmount / completeAmount * 100
      
      const circleProgress = new CircleProgress('.circle-latest');
        circleProgress.attr({
        max: 100,
        value: progressNum,
        textFormat: "percent",
        indeterminateText: 0
      });
  });
}
