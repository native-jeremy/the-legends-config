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
      let applyData = getData.data;
      let applyCompleted = getData.data.Completed;
      let applyWeek = applyData.Completed_Week;
      let applyName = applyData.Completed_Name;
      console.log(applyData);

      let workout = document.querySelectorAll('.workouts');
      let icon = document.querySelectorAll('.completed-icon');
      let week1 = document.querySelectorAll('.week')[0]
      let week2 = document.querySelectorAll('.week')[1]
      let workoutTitle = document.querySelectorAll('.workout-title');

      if (applyData !== undefined)
      {
        for (let index = 0; index < workout.length; index++) {
          icon = icon[index];
          workoutTitle = workoutTitle[index];
          workoutName = workoutTitle[index];

          for (let i = 0; i < applyCompleted.length; i++) {
            applyWeek = applyWeek[i];
            applyName = applyName[i];
          }

          if (week1.textContent.toLowerCase().includes(applyWeek && applyName) || week2.textContent.toLowerCase().includes(applyWeek && applyName) && workoutTitle.textContent.toLowerCase().includes(applyWeek && applyName)) {
            icon.classList.add("complete-indicator");
          }

          console.log("Week", week1);
          console.log("Week", week2);
          console.log("Workout Title", workoutTitle.textContent.toLowerCase());
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
