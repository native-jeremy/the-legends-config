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
    let workout = document.querySelectorAll(".workouts");

    //App Blur Reset
    app.style.filter = "blur(0px)"

     if (response.status === 200) {
    setTimeout(loopCompleted, 2000);
     }
    else {
      console.log("Response not loaded")
    }
    function loopCompleted ()
    {
      
      for (let i = 0; i < applyData.length; i++) {
        
        if (icon.length <= applyData.length)
        {
          icon[i].classList.add("complete-indicator");
        }
        else {
          console.log("You have Completed Too Many Workouts")
        }
        //console.log(applyData.length)
      }
      /*for (let index = 0; index < workout.length; index++) {
        console.log(workout[index])
      }*/
    }

      let progressNum = applyData.length / workout.length * 100
      
      const circleProgress = new CircleProgress('.circle-latest');
        circleProgress.attr({
        max: 100,
        value: progressNum,
        textFormat: "percent",
        indeterminateText: 0
      });
  });
}
