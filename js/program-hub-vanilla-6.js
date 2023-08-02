/* Define - Intialisation - Elements Retreived
----------------------------------------------------------------
*/

//Element Triggers

/* Wized Intialisation
----------------------------------------------------------------
*/

window.onload = async () => {
    //const startNextButton = document.getElementById("startNextWorkout");
    startNext = false;
  
       loadAmrapData();
          
       async function loadAmrapData() {
  
       Wized.request.await("Load weeks - HUB", (response) => {
              
       diffRes = response;

       const weeks = diffRes.filter(checkWeeks);

       function checkWeeks(week)
       {
        return week == "week 1";
       }
       
       console.log("Weeks Response ", diffRes);
       console.log("Weeks Filtered Array ", weeks);
      });
     }
  
    /* Completed Data Load
    Wized.request.await("Load Users", (response) => {
      setTimeout(() => {
        if (response.status === 200) {
          const getData = response;
          let applyCompleted = getData.data.Completed;
          let applyWeek = getData.data.Completed_Week;
          let applyName = getData.data.Completed_Name;
          let applyWorkout = getData.data.Completed_Workout_ID;
  
          if (
            applyCompleted &&
            applyWeek &&
            applyName &&
            applyWorkout !== undefined
          ) {
            console.log("User Data ", getData.data);
            console.log("User Completed Amount ", applyCompleted.length);
            console.log("User Completed Weeks ", applyWeek);
            console.log("User Completed Names ", applyName);
            console.log("User Completed Workout IDs ", applyWorkout);
  
            let completeWeek1 = document.querySelector(".complete-week-1");
            let completeWeek2 = document.querySelector(".complete-week-2");
            let completeWeek3 = document.querySelector(".complete-week-3");
            let completeWeek4 = document.querySelector(".complete-week-4");
            let completeWeek5 = document.querySelector(".complete-week-5");
            let completeWeek6 = document.querySelector(".complete-week-6");
            let completeWeek7 = document.querySelector(".complete-week-7");
            let completeWeek8 = document.querySelector(".complete-week-8");
            let completeWeek9 = document.querySelector(".complete-week-9");
            let completeWeek10 = document.querySelector(".complete-week-10");
            let completeWeek11 = document.querySelector(".complete-week-11");
            let completeWeek12 = document.querySelector(".complete-week-12");
            let completeWeek13 = document.querySelector(".complete-week-13");
            let completeWeek14 = document.querySelector(".complete-week-14");
            let completeWeek15 = document.querySelector(".complete-week-15");
            let completeWeek16 = document.querySelector(".complete-week-16");
            let completeWeek17 = document.querySelector(".complete-week-17");
            let completeWeek18 = document.querySelector(".complete-week-18");
            let completeWeek19 = document.querySelector(".complete-week-19");
            let completeWeek20 = document.querySelector(".complete-week-20");
            let completeWeek21 = document.querySelector(".complete-week-21");
            let completeWeek22 = document.querySelector(".complete-week-22");
            let completeWeek23 = document.querySelector(".complete-week-23");
            let completeWeek24 = document.querySelector(".complete-week-24");
            let completeWeek25 = document.querySelector(".complete-week-25");
  
            let workout = document.querySelectorAll(".workouts");
            let recovery = document.querySelectorAll(".recoveries");
            let icon = document.querySelectorAll(".completed-icon");
            let iconRec = document.querySelectorAll(".completed-icon");
  
            let completedRecoveriesArray = [];
            let completedWeek1Array = [];
            let completedWeek2Array = [];
            let completedWeek3Array = [];
            let completedWeek4Array = [];
            let completedWeek5Array = [];
            let completedWeek6Array = [];
            let completedWeek7Array = [];
            let completedWeek8Array = [];
            let completedWeek9Array = [];
            let completedWeek10Array = [];
            let completedWeek11Array = [];
            let completedWeek12Array = [];
            let completedWeek13Array = [];
            let completedWeek14Array = [];
            let completedWeek15Array = [];
            let completedWeek16Array = [];
            let completedWeek17Array = [];
            let completedWeek18Array = [];
            let completedWeek19Array = [];
            let completedWeek20Array = [];
            let completedWeek21Array = [];
            let completedWeek22Array = [];
            let completedWeek23Array = [];
            let completedWeek24Array = [];
            let completedWeek25Array = [];
  
            for (let i = 0; i < applyWeek.length; i++) {
  
              // Recovery Array Condition
              if (applyWeek[i].includes("recovery")) {
                completedRecoveriesArray.push(applyWeek[i]);
              }
              else {
                console.log("No Week Matched: " + applyWeek[i]);
              }
  
              // Week 1 Array Condition
              if (applyWeek[i].includes("week 1")) {
                completedWeek1Array.push(applyWeek[i]);
              }
              else {
                console.log("No Week Matched: " + applyWeek[i]);
              }
  
              // Week 2 Array Condition
              if (applyWeek[i].includes("week 2")) {
                completedWeek2Array.push(applyWeek[i]);
              }
              else {
                console.log("No Week Matched: " + applyWeek[i]);
              }
  
              // Week 3 Array Condition
              if (applyWeek[i].includes("week 3")) {
                completedWeek3Array.push(applyWeek[i]);
              }
              else {
                console.log("No Week Matched: " + applyWeek[i]);
              }
  
              // Week 4 Array Condition
              if (applyWeek[i].includes("week 4")) {
                completedWeek4Array.push(applyWeek[i]);
              }
              else {
                console.log("No Week Matched: " + applyWeek[i]);
              }
  
              // Week 5 Array Condition
              if (applyWeek[i].includes("week 5")) {
                completedWeek5Array.push(applyWeek[i]);
              }
              else {
                console.log("No Week Matched: " + applyWeek[i]);
              }
  
              // Week 6 Array Condition
              if (applyWeek[i].includes("week 6")) {
                completedWeek6Array.push(applyWeek[i]);
              }
              else {
                console.log("No Week Matched: " + applyWeek[i]);
              }
  
              // Week 7 Array Condition
              if (applyWeek[i].includes("week 7")) {
                completedWeek7Array.push(applyWeek[i]);
              }
              else {
                console.log("No Week Matched: " + applyWeek[i]);
              }
  
              // Week 8 Array Condition
              if (applyWeek[i].includes("week 8")) {
                completedWeek8Array.push(applyWeek[i]);
              }
              else {
                console.log("No Week Matched: " + applyWeek[i]);
              }
  
              // Week 9 Array Condition
              if (applyWeek[i].includes("week 9")) {
                completedWeek9Array.push(applyWeek[i]);
              }
              else {
                console.log("No Week Matched: " + applyWeek[i]);
              }
  
              // Week 10 Array Condition
              if (applyWeek[i].includes("week 10")) {
                completedWeek10Array.push(applyWeek[i]);
              }
              else {
                console.log("No Week Matched: " + applyWeek[i]);
              }
  
              // Week 11 Array Condition
              if (applyWeek[i].includes("week 11")) {
                completedWeek11Array.push(applyWeek[i]);
              }
              else {
                console.log("No Week Matched: " + applyWeek[i]);
              }
  
              // Week 12 Array Condition
              if (applyWeek[i].includes("week 12")) {
                completedWeek12Array.push(applyWeek[i]);
              }
              else {
                console.log("No Week Matched: " + applyWeek[i]);
              }
  
              // Week 13 Array Condition
              if (applyWeek[i].includes("week 13")) {
                completedWeek13Array.push(applyWeek[i]);
              }
              else {
                console.log("No Week Matched: " + applyWeek[i]);
              }
  
              // Week 14 Array Condition
              if (applyWeek[i].includes("week 14")) {
                completedWeek14Array.push(applyWeek[i]);
              }
              else {
                console.log("No Week Matched: " + applyWeek[i]);
              }
  
              // Week 15 Array Condition
              if (applyWeek[i].includes("week 15")) {
                completedWeek15Array.push(applyWeek[i]);
              }
              else {
                console.log("No Week Matched: " + applyWeek[i]);
              }
  
              // Week 16 Array Condition
              if (applyWeek[i].includes("week 16")) {
                completedWeek16Array.push(applyWeek[i]);
              }
              else {
                console.log("No Week Matched: " + applyWeek[i]);
              }
  
              // Week 17 Array Condition
              if (applyWeek[i].includes("week 17")) {
                completedWeek17Array.push(applyWeek[i]);
              }
              else {
                console.log("No Week Matched: " + applyWeek[i]);
              }
  
              // Week 18 Array Condition
              if (applyWeek[i].includes("week 18")) {
                completedWeek18Array.push(applyWeek[i]);
              }
              else {
                console.log("No Week Matched: " + applyWeek[i]);
              }
  
              // Week 19 Array Condition
              if (applyWeek[i].includes("week 19")) {
                completedWeek19Array.push(applyWeek[i]);
              }
              else {
                console.log("No Week Matched: " + applyWeek[i]);
              }
  
              // Week 20 Array Condition
              if (applyWeek[i].includes("week 20")) {
                completedWeek20Array.push(applyWeek[i]);
              }
              else {
                console.log("No Week Matched: " + applyWeek[i]);
              }
  
              // Week 21 Array Condition
              if (applyWeek[i].includes("week 21")) {
                completedWeek21Array.push(applyWeek[i]);
              }
              else {
                console.log("No Week Matched: " + applyWeek[i]);
              }
  
              // Week 22 Array Condition
              if (applyWeek[i].includes("week 22")) {
                completedWeek22Array.push(applyWeek[i]);
              }
              else {
                console.log("No Week Matched: " + applyWeek[i]);
              }
  
              // Week 23 Array Condition
              if (applyWeek[i].includes("week 23")) {
                completedWeek23Array.push(applyWeek[i]);
              }
              else {
                console.log("No Week Matched: " + applyWeek[i]);
              }
  
              // Week 24 Array Condition
              if (applyWeek[i].includes("week 24")) {
                completedWeek24Array.push(applyWeek[i]);
              }
              else {
                console.log("No Week Matched: " + applyWeek[i]);
              }
  
              // Week 25 Array Condition
              if (applyWeek[i].includes("week 25")) {
                completedWeek25Array.push(applyWeek[i]);
              }
              else {
                console.log("No Week Matched: " + applyWeek[i]);
              }
            }
            completeWeek1.textContent = completedWeek1Array.length;
            completeWeek2.textContent = completedWeek2Array.length;
            completeWeek3.textContent = completedWeek3Array.length;
            completeWeek4.textContent = completedWeek4Array.length;
            completeWeek5.textContent = completedWeek5Array.length;
            completeWeek6.textContent = completedWeek6Array.length;
            completeWeek7.textContent = completedWeek7Array.length;
            completeWeek8.textContent = completedWeek8Array.length;
            completeWeek9.textContent = completedWeek9Array.length;
            completeWeek10.textContent = completedWeek10Array.length;
            completeWeek11.textContent = completedWeek11Array.length;
            completeWeek12.textContent = completedWeek12Array.length;
            completeWeek13.textContent = completedWeek13Array.length;
            completeWeek14.textContent = completedWeek14Array.length;
            completeWeek15.textContent = completedWeek15Array.length;
            completeWeek16.textContent = completedWeek16Array.length;
            completeWeek17.textContent = completedWeek17Array.length;
            completeWeek18.textContent = completedWeek18Array.length;
            completeWeek19.textContent = completedWeek19Array.length;
            completeWeek20.textContent = completedWeek20Array.length;
            completeWeek21.textContent = completedWeek21Array.length;
            completeWeek22.textContent = completedWeek22Array.length;
            completeWeek23.textContent = completedWeek23Array.length;
            completeWeek24.textContent = completedWeek24Array.length;
            completeWeek25.textContent = completedWeek25Array.length;
  
            console.log("Recoveries Completed Array ", completedRecoveriesArray);
            console.log("Week 1 Completed Array ", completedWeek1Array);
            console.log("Week 2 Completed Array ", completedWeek2Array);
            console.log("Week 3 Completed Array ", completedWeek3Array);
            console.log("Week 4 Completed Array ", completedWeek4Array);
            console.log("Week 5 Completed Array ", completedWeek5Array);
            console.log("Week 6 Completed Array ", completedWeek6Array);
            console.log("Week 7 Completed Array ", completedWeek7Array);
            console.log("Week 8 Completed Array ", completedWeek8Array);
            console.log("Week 9 Completed Array ", completedWeek9Array);
            console.log("Week 10 Completed Array ", completedWeek10Array);
  
            let progressNum = (applyCompleted.length / workout.length) * 100;
  
            if (applyCompleted.length !== 0) {
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
  
                if (!currentIcon.classList.contains("complete-indicator")) {
                  if (startNext === false) {
                    startNextButton.href = currentWorkout.href;
                    startNext = true;
                    console.log(currentWorkout);
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
                    if (
                      currentRecovery.textContent.includes(currentRecoveryName)
                    ) {
                      if (
                        currentRecovery.textContent.includes(
                          currentRecoveryCompleted
                        )
                      ) {
                        currentRecoveryIcon.classList.add("complete-indicator");
                      }
                    }
                  }
                }
                //icon[i].classList.add("complete-indicator");
              }
            }
            const circleProgress = new CircleProgress(".circle-latest");
            circleProgress.attr({
              max: 100,
              value: progressNum,
              textFormat: "percent",
              indeterminateText: 0,
            });
          } else {
            const circleProgress = new CircleProgress(".circle-latest");
            circleProgress.attr({
              max: 100,
              value: 0,
              textFormat: "percent",
              indeterminateText: 0,
            });
          }
        }
      }, 6000);
    });*/
  };
