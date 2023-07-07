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
      console.log(applyData);
      let workout = document.querySelectorAll(".workouts");
      let icon = document.querySelectorAll(".completed-icon");
      let week = document.querySelectorAll(".week");
      let workoutTitle = document.querySelectorAll(".workout-title");

      if (applyData !== undefined)
      {
        for (let i = 0; i < applyData.length; i++) {
          if (week && workoutTitle === applyData) {
            
          }
            icon[i].classList.add("complete-indicator");
        }
        let progressNum = applyData.length / workout.length * 100
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
