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

     // Completed Data Load
    Wized.request.await("Load Users", (response) => {
       console.log("Users ", response);

       let users = response.data;

       loadAmrapData(users);
          
       async function loadAmrapData(users) {
  
       Wized.request.await("Load weeks - HUB", (response) => {

       let = diffRes = response.data;

       const program = users.filter(checkProgram);

       function checkProgram(currentProgram)
       {
        return currentProgram.Add_Program[0] == diffRes.Program[0];
       }
              
       console.log("Weeks Response ", diffRes);
       console.log("Users Program Array ", program);

       for (let i = 0; i < diffRes.length; i++) {

        let div = document.createElement("div");
        document.body.append(div);

        const weeks = diffRes.filter(checkWeeks);

        function checkWeeks(week)
        {
         return week.Week == "week " + [i];
        }

        for (let m = 0; m < weeks.length; m++) {
            if (diffRes[i].Week == weeks[m].Week)
            {
                let h2 = document.createElement("h2");
                h2.innerHTML = weeks[m].Week;
                div.append(h2);
            }
            console.log('Weeks: ' + weeks[m].Week);
        }

        console.log("Weeks " + i + " Filtered Array", weeks);
       }
      });
     }
    });
  };
