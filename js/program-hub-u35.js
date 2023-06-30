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
      let applyData = getData.data.Completed;
      console.log(applyData);
      let workout = document.querySelectorAll(".workouts");
      let icon = document.querySelectorAll(".completed-icon");

      if (applyData.length !== 0)
      {
        for (let i = 0; i < applyData.length; i++) {
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
