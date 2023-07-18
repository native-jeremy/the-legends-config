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

      let completeWeek1 = document.querySelector(".complete-week-1");
      let completeWeek2 = document.querySelector(".complete-week-2");
      let workout = document.querySelectorAll(".workouts");
      let icon = document.querySelectorAll(".completed-icon");

      let completedWeek1Array = [];
      let completedWeek2Array = [];

      let progressNum = applyCompleted.length / workout.length * 100;


setTimeout(() => {
      if (applyCompleted.length !== 0)
      {
        for (let i = 0; i < applyCompleted.length; i++) {
          if (applyWeek.includes("week 1")) {
            completedWeek1Array.push(applyWeek[i]);
          }
          else if (applyWeek.includes("week 2")) {
            completedWeek2Array.push(applyWeek[i]);
          }
        }
        completeWeek1.textContent = completedWeek1Array.length;
        completeWeek2.textContent = completedWeek2Array.length;

        for (let i = 0; i < workout.length; i++) {
          const currentWorkout = workout[i];
          const currentIcon = icon[i];

          for (let j = 0; j < applyWorkout.length; j++) {
            const currentWeek = applyWeek[j];
            const currentName = applyName[j];
            const currentCompleted = applyWorkout[j];

            if (currentWorkout.textContent.includes(currentWeek)) {
              if (currentWorkout.textContent.includes(currentName)) {
                if (currentWorkout.textContent.includes(currentCompleted)) {
                  currentIcon.classList.add("complete-indicator");
                }
              }
            }
          }
            //icon[i].classList.add("complete-indicator");
        }
        const circleProgress = new CircleProgress('.circle-latest');
          circleProgress.attr({
          max: 100,
          value: progressNum,
          textFormat: "percent",
          indeterminateText: 0});
      }
    }, 1000);
    }
  });
}

            /*if (workout[index].textContent.includes(applyWeek)) {
              if (workout[index].textContent.includes(applyName)) {
                if (workout[index].textContent.includes(applyWorkout)) {
                  icon[index].classList.add("complete-indicator");
                }
              }
            }*/
