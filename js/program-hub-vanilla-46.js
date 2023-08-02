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

       users = userData.Add_Program;

       loadAmrapData();
          
       async function loadAmrapData() {
  
       Wized.request.await("Load weeks - HUB", (response) => {

       diffRes = response.data;
           
       console.log("Users Response ", users[0]);
       console.log("Weeks Response ", diffRes);

       diffRes.forEach(diff => {
        diff.filter(diff.Program[0] = users[0])
       });

       for (let i = 0; i < diffRes.length; i++) {

        let div = document.createElement("div");
        document.body.append(div);

        const program = users.filter(checkProgram);

        function checkProgram(currentProgram)
        {
         return currentProgram[0] == diffRes[i].Program[0];
        }

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
                weeks[m].Workout_Names.forEach(Title => {
                    let h3 = document.createElement("h3");
                    h3.innerHTML = Title;
                    div.append(h3);
                });
            }
            console.log('Weeks: ' + weeks[m].Week);
        }

        console.log("Weeks " + i + " Filtered Array", weeks);
        console.log("Users Program Array ", program);
       }
      });
     }
    });
  };
