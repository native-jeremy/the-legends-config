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
    //const repAmount = repData.data[0].Amounts_Name[0];
    console.log(applyData);
    let icon = document.querySelector(".completed-icon");
    let i = 0;
    
    /*for (let i = 0; i < applyData.length; i++) {
        //if ( i < applyData.length){
        let completed = document.createElement("div");
        completed.classList.add("completed")
        icon[i].append(completed);
        //icon[i].append(completed);
        //}
      }*/
      
       applyData.forEach((complete) => {
        icon.classList.add("complete-indicator")
      });

  /*if (sirenText.innerHTML === "Off") {
    Wized.data.setCookie("sirenmute", "on");
    sirenText.innerHTML = "On";
    sirenToggleOn.classList.toggle("on");
  } else if (sirenText.innerHTML === "On") {
    Wized.data.setCookie("sirenmute", "muted");
    sirenText.innerHTML = "Off";
    sirenToggleOn.classList.toggle("on");
  }*/
  });
}
