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
    let icon = document.querySelector(".completed-icon");

       applyData.forEach((complete) => {
        icon.classList.add("complete-indicator")
      });
  });
}
