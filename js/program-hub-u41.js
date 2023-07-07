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

      let workout = document.querySelectorAll(".workouts");
      let icon = document.querySelectorAll(".completed-icon");
      let week = document.querySelectorAll(".week");
      let workoutTitle = document.querySelectorAll(".workout-title");

      if (applyData !== undefined)
      {
        for (let i = 0; i < applyCompleted.length; i++) {

          for (let index = 0; index < workout.length; index++) {
            if (week[index] && workoutTitle[index] === applyWeek[index] && applyName[index]) {
              icon[i].classList.add("complete-indicator");
            }
          }
          
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
