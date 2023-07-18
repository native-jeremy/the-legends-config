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

    if (response.status === 200)
    {
      const getData = response;
      let applyCompleted = getData.data.Completed;
      let applyWeek = getData.data.Completed_Week;
      let applyName = getData.data.Completed_Name;
      let applyWorkout = getData.data.Completed_Workout_ID;

      console.log("User Data ", getData.data);
      console.log("User Completed Amount ", applyCompleted.length);
      console.log("User Completed Weeks ", applyWeek);
      console.log("User Completed Names ", applyName);
      console.log("User Completed Workout IDs ", applyWorkout);

      let workout = document.querySelectorAll(".workouts");
      let icon = document.querySelectorAll(".completed-icon");

      if (applyCompleted.length !== 0)
      {
        for (let i = 0; i < applyCompleted.length; i++) {

            if (workout[i].textContent.includes(applyWeek)) {
              if (workout[i].textContent.includes(applyName)) {
                if (workout[i].textContent.includes(applyWorkout)) {
                  icon[i].classList.add("complete-indicator");
                }
              }
            }
            //icon[i].classList.add("complete-indicator");
        }
        let progressNum = applyCompleted.length / workout.length * 100
        const circleProgress = new CircleProgress('.circle-latest');
          circleProgress.attr({
          max: 100,
          value: progressNum,
          textFormat: "percent",
          indeterminateText: 0});
      }
    }
  });
}
