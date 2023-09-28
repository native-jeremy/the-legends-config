window.onload = async () => {
  const startNextButton = document.getElementById("startNextWorkout");
  startNext = false;
  let applyCompleted;
  let applyWorkout;
  let applyWeek;
  let applyName;

  Wized.request.await("Load Users Program Hub", (response) => {
      setTimeout(() => {
        const snapshot = response.data;
        applyCompleted = snapshot.Completed_Workout;
        applyWorkout = snapshot.Completed_Workout_ID;
        applyWeek = snapshot.Completed_Workout_Week;
        applyName = snapshot.Completed_Workout_Name;

        if (
          applyCompleted &&
          applyWeek &&
          applyName &&
          applyWorkout !== undefined
        ) {
          console.log("User Data ", snapshot);
          console.log("User Completed Amount ", applyCompleted.length);
          console.log("User Completed Workout IDs ", applyWorkout);
          console.log("User Completed Weeks ", applyWeek);
          console.log("User Completed Names ", applyName);

          let workout = document.querySelectorAll(".workouts");
          let recovery = document.querySelectorAll(".recoveries");
          let icon = document.querySelectorAll(".completed-icon");

          /*if (!currentIcon.classList.contains("complete-indicator")) {
            if (startNext === false) {
                startNextButton.href = currentWorkout.href;
                startNext = true;
                console.log(currentWorkout);
              }
            }
          }*/

          const circleProgress = new CircleProgress(".circle-latest");
          circleProgress.attr({
            max: 100,
            value: progressNum,
            textFormat: "percent",
            indeterminateText: 0,
          });
        } 
        else {
          const circleProgress = new CircleProgress(".circle-latest");
          circleProgress.attr({
            max: 100,
            value: 0,
            textFormat: "percent",
            indeterminateText: 0,
          });
        }
    }, 6000);
    const currentUser = response.data;
    let weekTracker = currentUser.Program_Week_Tracker;

    console.log("User Request:", currentUser);

    // Program
    Wized.request.await("Load weeks - HUB", (response) => {
      const currentProgram = response.data;
      console.log("Program Request:", currentProgram);
      let sessionAmount = currentUser.Q7[0]

      function delayedAction() {
        const sessions = document.querySelectorAll(".sessions");
        const weekOpen = document.querySelectorAll(".week_interaction");
        const weeks = document.querySelectorAll(".weeks");

        // Sessions
        sessions.forEach((session, index) => {
            num = currentProgram[index].Workouts.length;
            session.querySelectorAll(".workouts").forEach((el, index) => {
                if (num > sessionAmount)
                {   num = num - 1
                    el.remove();
                }
                else {
                    return false;
                }
                if(el.textContent.includes(applyWorkout && applyWeek))
                {
                  icon[index].classList.add("complete-indicator")
                }
                else {
                  return false;
                }
            });
        });

        // Interactions Reset
        console.log("interaction loaded");
        window.Webflow && window.Webflow.destroy();
        window.Webflow && window.Webflow.ready();
        window.Webflow && window.Webflow.require("ix2").init();
        document.dispatchEvent(new Event("readystatechange"));
        weekOpen.forEach((week, index) => {
        if(index !== weekTracker)
        {
            weekOpen[index].click();
            if(index > weekTracker)
            { 
            	sessions[index].classList.add("disabled")
            }
        }
        });
      }

      setTimeout(delayedAction, 2000);
    });
  });
};
