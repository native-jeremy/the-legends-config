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
    let workout = document.querySelectorAll(".workouts");
    let icon = document.querySelectorAll(".completed-icon");
    
    setTimeout(loopCompleted, 2000);
    
    function loopCompleted ()
    {
      for (let i = 0; i < applyData.length; i++) {
        icon[i].classList.add("complete-indicator");
        workout[i].classList.add("disabled");
        workout[i].href = "";
      }
    }
  });
}
