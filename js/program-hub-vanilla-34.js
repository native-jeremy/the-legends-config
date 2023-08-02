/* Define - Intialisation - Elements Retreived
----------------------------------------------------------------
*/

//Element Triggers

/* Wized Intialisation
----------------------------------------------------------------
*/

let userData;
let users;
let diffRes;

window.onload = async () => {
    //const startNextButton = document.getElementById("startNextWorkout");
    startNext = false;

     // Completed Data Load
    Wized.request.await("Load Users Program Hub", (response) => {
       console.log("Users ", response.data.Add_Program[0]);

       userData = response.data;

       users = userData.Add_Program[0];

       loadAmrapData();
          
       async function loadAmrapData() {
  
       Wized.request.await("Load weeks - HUB", (response) => {

       diffRes = response.data;

       const program = users.filter(checkProgram);

       function checkProgram(currentProgram)
       {
        return currentProgram == diffRes.Program[0];
       }
           
       console.log("Users Response ", users);
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
