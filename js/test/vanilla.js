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
let dynamicContent = document.getElementById("dynamic_content");

window.onload = async () => {
  //const startNextButton = document.getElementById("startNextWorkout");
  startNext = false;

  // Completed Data Load
  Wized.request.await("Load Users Program Hub", (response) => {
    /*console.log("Users ", response.data);

       /*userData = response.data;
       users = userData;*/

    loadAmrapData();

    async function loadAmrapData() {
      Wized.request.await("Load weeks - HUB", (response) => {
        diffRes = response.data;

        const mainArray = diffRes.filter((item) => {
          return item.Program_Name[0] === "Stay Strong";
        });

        console.log(mainArray.sort());

        for (let i = 0; i < mainArray.length; i++) {
          const realNumber = i + 1;
          const newArray = mainArray.filter((item) => {

            return item.Week_name === "week " + [realNumber];
          });

          newArray.forEach(week => {
            const box = `
            <a href="/workout-overview" class="capsule-body style-1 workouts w-inline-block">
            <div class="capsule-image-block"></div>
            <div class="capsule-header-content">
              <div class="capsule-header-text">
                  <h2 class="main-heading-style-1 workout-title">Run to the Sun</h2>
                  <div class="split-dynamic-text">
                  <div class="generic-text-style-1">HIIT Workout</div>
                  <div class="generic-text-style-1 left-right-margin"> | </div>
                  <div class="generic-text-style-1">30min</div>
              </div>
              <div w-el="complete_filter_week" class="generic-text-style-1 complete-filter" w-el-text="HIIT Workout">week 1</div>
              <div w-el="complete_filter_name" class="generic-text-style-1 complete-filter" w-el-text="HIIT Workout">Leg Day</div>
              <div w-el="complete_filter_id" class="generic-text-style-1 complete-filter" w-el-text="HIIT Workout">rec2DR4Jraed7Skyn</div>
              </div><div class="completed-icon"></div>
            </div>
            </a><link rel="prerender" href="/workout-overview">`;
              dynamicContent.innerHTML = dynamicContent.innerHTML + box;
          });
          console.log("week " + [realNumber], newArray);
        }
      });
    }
  });
};
