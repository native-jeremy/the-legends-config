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

  setTimeout(() => {

    if (response.status === 200)
    {
      const getData = response;
      let applyCompleted = getData.data.Completed;
      let applyWeek = getData.data.Completed_Week;
      let applyName = getData.data.Completed_Name;
      let applyWorkout = getData.data.Completed_Workout_ID;

      if (applyCompleted && applyWeek && applyName && applyWorkout !== undefined) 
      {
      console.log("User Data ", getData.data);
      console.log("User Completed Amount ", applyCompleted.length);
      console.log("User Completed Weeks ", applyWeek);
      console.log("User Completed Names ", applyName);
      console.log("User Completed Workout IDs ", applyWorkout);

      let completeWeek1 = document.querySelector(".complete-week-1");
      let completeWeek2 = document.querySelector(".complete-week-2");
      let workout = document.querySelectorAll(".workouts");
      let recovery = document.querySelectorAll(".recoveries");
      let icon = document.querySelectorAll(".completed-icon");
      let iconRec = document.querySelectorAll(".completed-icon");

      let completedWeek1Array = [];
      let completedWeek2Array = [];
      let completedRecoveriesArray = [];

      for (let i = 0; i < applyWeek.length; i++) {
        if (applyWeek[i].includes("week 1")) {
            completedWeek1Array.push(applyWeek[i]);
        }
        if (applyWeek[i].includes("week 2")) {
            completedWeek2Array.push(applyWeek[i]);
        }
        if (applyWeek[i].includes("recovery")) {
            completedRecoveriesArray.push(applyWeek[i]);
         }      
    }
    completeWeek1.textContent = completedWeek1Array.length;
    completeWeek2.textContent = completedWeek2Array.length;

    console.log("Week 1 Completed Array ", completedWeek1Array);
    console.log("Week 2 Completed Array ", completedWeek2Array);
    console.log("Recoveries Completed Array ", completedRecoveriesArray);

      let progressNum = applyCompleted.length / workout.length * 100;

      if (applyCompleted.length !== 0)
      {
        for (let i = 0; i < workout.length; i++) {
          const currentWorkout = workout[i];
          const currentIcon = icon[i];

          for (let j = 0; j < applyWorkout.length; j++) {
            const currentWeek = applyWeek[j];
            const currentName = applyName[j];
            const currentCompleted = applyWorkout[j];

            if(workout.find(o => o.classList.contains("complete-indicator")))
            {
              console.log(workout);
            }

            if (currentWorkout.textContent.includes(currentWeek)) {
              if (currentWorkout.textContent.includes(currentName)) {
                if (currentWorkout.textContent.includes(currentCompleted)) {
                  currentIcon.classList.add("complete-indicator");
                }
              }
            }
          }
        }

        for (let l = 0; l < recovery.length; l++) {
          const currentRecovery = recovery[l];
          const currentRecoveryIcon = iconRec[l];

          for (let m = 0; m < applyWorkout.length; m++) {
            const currentRecoveryWeek = applyWeek[m];
            const currentRecoveryName = applyName[m];
            const currentRecoveryCompleted = applyWorkout[m];

            if (currentRecovery.textContent.includes(currentRecoveryWeek)) {
              if (currentRecovery.textContent.includes(currentRecoveryName)) {
                if (currentRecovery.textContent.includes(currentRecoveryCompleted)) {
                  currentRecoveryIcon.classList.add("complete-indicator");
                }
              }
            }
          }
            //icon[i].classList.add("complete-indicator");
        }
        }
        const circleProgress = new CircleProgress('.circle-latest');
          circleProgress.attr({
          max: 100,
          value: progressNum,
          textFormat: "percent",
          indeterminateText: 0});
      }
      else {
        const circleProgress = new CircleProgress('.circle-latest');
        circleProgress.attr({
        max: 100,
        value: 0,
        textFormat: "percent",
        indeterminateText: 0});
      }
    }
  }, 3000);
  });
}
