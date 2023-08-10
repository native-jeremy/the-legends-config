window.onload = async () => {
    //Element Variables
    const sliderControls = document.querySelector('.slider-controls');
    const triggerModal = document.getElementById("triggerModal");
    //let triggerLoader = document.getElementById("trigger");
    const wrapper = document.querySelector(".swiper-wrapper");
    let Title = document.querySelectorAll("._title");
    let Weeks = document.querySelectorAll("._weeks");
    let Description = document.querySelectorAll("._description");

    //Global Variables
    let user;
    let programData;
    let programArray = new Array();
    
    // Program Selection Request
    Wized.request.await("Load Users Program", (response) => {
      user = response.data;
      console.log(user);
  
      Wized.request.await("Load Program Selection", (response) => {
        programData = response.data;
        console.log(programData);
  
        for (let i = 0; i < programData.length; i++) {
          const program = programData[i];
          //console.log("Q3 Answer:", program.Q3)
          //console.log("User Answer:", user.Q3)
          if (program.Q2.includes(user.Q2)) {
            ////////////////////////////////////////////////////////////////
            if (program.Q3.includes(user.Q3)) {
              //////////////////////////////////////////////////////////
              if (program.Q4.some((item) => user.Q4.includes(item))) {
                console.log("Found A Match! Continuing With Conditional Match");
                ////////////////////////////////////////////////////
                if (program.Q5.includes(user.Q5)) {
                  //////////////////////////////////////////////
                  if (program.Q6.some((item) => user.Q6.includes(item))) {
                    num++
                    function match(ID, Title, Image)
                    {
                        this.ID = program.ID;
                        this.Title = program.Title;
                        this.Image = program.Image;
                    }
                   
                    //programObject.push(program);
                    programArray.push(new match(program.ID, program.Title, program.Image));
                    console.log(
                      "Found A Match Here Is Your Program! =",
                      `[ ${programArray} ]`
                    );
                    programArray.forEach((item) =>{
                        console.log("Item In Array", item);
                        Title = item.Title
                        Description = item.Description
                        Weeks = item.Weeks
                    });
                    /////////////////////////////////////////
                  }
                }
              }
            }
          }
        }
        if (programArray.length > 0) {
          let programMatch = programArray;
          sliderControls.style.display = "flex";
  
          programArray.forEach((item) => {
              item = document.createElement("div");
              item.classList.add("swiper-slide");
              item.innerHTML = `<div w-el="program_slide_image" class="app-slide-image no-margin"
                      style="background-image: url(&quot;undefined&quot;);" w-el-style-background-image="none">
                      <div class="app-block fixed overlay full-height">
                          <div class="app-block-content">
                              <div class="info-block auto-margin">
                                  <div class="info-block-header">
                                      <div class="split-dynamic-text center">
                                          <div w-el="program_slide_weeks"
                                              class="generic-text-style-2 margin-right-split-dnyamic-text">8</div>
                                          <div class="generic-text-style-2 center-align">wEEK program</div>
                                      </div>
                                      <div w-el="program_slide_name" class="main-heading-style-6 center-align slide-title"
                                          w-el-text="Super Strength Transformation"></div>
                                  </div><a data-w-id="5c806ac3-c34a-bc93-6409-9da4edc693c2" href="#"
                                      class="button-style-1 half w-button">Program Details</a><a href="/questionnaire"
                                      class="button-style-4 w-button">Back to Questionnaire</a>
                                  <link rel="prerender" href="/questionnaire">
                              </div>
                          </div>
                      </div>
                  </div>
                  <div style="transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                      class="app-view-animation">
                      <div class="app-body">
                          <div class="content">
                              <div class="content-headings margin-bottom">
                                  <div class="split-dynamic-text">
                                      <div w-el="program_slide_weeks"
                                          class="generic-text-style-6 margin-right-split-dnyamic-text">8</div>
                                      <div class="generic-text-style-6">wEEK program</div>
                                  </div>
                                  <h2 w-el="program_slide_name" class="main-heading-style-1"
                                      w-el-text="Super Strength Transformation"></h2>
                              </div>
                              <div class="content-block base-block">
                                  <div class="content-block-header">
                                      <h2 class="main-heading-style-2">Overview</h2>
                                  </div>
                                  <div class="content-block-body">
                                      <p w-el="program_description" class="body-copy-text-style-1">This is the description for
                                          this program.<br>This will detail the types of workouts with the program. It should
                                          detail to main object of the program and the results that can be expected. This
                                          description can be as long as required</p>
                                  </div>
                              </div>
                              <div class="content-block">
                                  <div class="content-block-header">
                                      <h2 class="main-heading-style-2">Key points</h2>
                                  </div>
                                  <div class="content-block-body">
                                      <div class="content-block-body-copy">
                                          <p w-el="program_key_points" class="body-copy-text-style-1">• &nbsp; &nbsp;Equipment
                                              required<br>• &nbsp; &nbsp;Low impact exercises<br>• &nbsp; &nbsp;Functional
                                              movements exercises<br>• &nbsp; &nbsp;Build core and back strength</p>
                                      </div>
                                  </div>
                              </div>
                              <div class="content-block">
                                  <div class="content-block-header">
                                      <h2 class="main-heading-style-2">Workout Structure (Weekly)</h2>
                                  </div>
                                  <div class="content-block-body">
                                      <div class="content-block-body-header">
                                          <h3 class="generic-text-style-6 non-caps">Core Workouts</h3>
                                      </div>
                                      <div class="content-block-body-copy">
                                          <p w-el="program_structure_core" class="body-copy-text-style-1">• &nbsp; &nbsp;Strength
                                              &amp; Cardio Circuits (x2) <br>• &nbsp; &nbsp;HIIT Session (low impact) (x1)</p>
                                      </div>
                                  </div>
                                  <div class="content-block-body margin-top">
                                      <div class="content-block-body-header">
                                          <h3 class="generic-text-style-6 non-caps">Recommended</h3>
                                      </div>
                                      <div class="content-block-body-copy">
                                          <p w-el="program_structure_recommended" class="body-copy-text-style-1">• &nbsp;
                                              &nbsp;Full body strength (x1)<br>• &nbsp; &nbsp;30-45min LISS (x2)<br>• &nbsp;
                                              &nbsp;Stretch (x1)</p>
                                      </div>
                                  </div>
                              </div>
                              <div class="content-block">
                                  <div class="content-block-header">
                                      <h2 class="main-heading-style-2">FAQ</h2>
                                  </div>
                                  <div class="accordion style-2">
                                      <div data-w-id="318dd5d4-e2e9-7095-276c-a871128f0316" class="accordion-header style-2">
                                          <h2 class="generic-text-style-6 non-caps">What’s my investment?</h2>
                                          <div class="accordion-header-arrow">
                                              <div class="accordion-arrow-icon"></div>
                                          </div>
                                      </div>
                                      <div class="accordion-body style-2">
                                          <p class="body-copy-text-style-1">This is the description for this program.<br>This will
                                              detail the types of workouts with the program. It should detail to main object of
                                              the program and the results that can be expected. This description can be as long as
                                              required</p>
                                      </div>
                                  </div>
                                  <div class="accordion style-2">
                                      <div data-w-id="318dd5d4-e2e9-7095-276c-a871128f0321" class="accordion-header style-2">
                                          <h2 class="generic-text-style-6 non-caps">Can I cancel at anytime?</h2>
                                          <div class="accordion-header-arrow">
                                              <div class="accordion-arrow-icon"></div>
                                          </div>
                                      </div>
                                      <div class="accordion-body style-2">
                                          <p class="body-copy-text-style-1">This is the description for this program.<br>This will
                                              detail the types of workouts with the program. It should detail to main object of
                                              the program and the results that can be expected. This description can be as long as
                                              required</p>
                                      </div>
                                  </div>
                                  <div class="accordion style-2">
                                      <div data-w-id="318dd5d4-e2e9-7095-276c-a871128f032c" class="accordion-header style-2">
                                          <h2 class="generic-text-style-6 non-caps">Can I swap Programs?</h2>
                                          <div class="accordion-header-arrow">
                                              <div class="accordion-arrow-icon"></div>
                                          </div>
                                      </div>
                                      <div class="accordion-body style-2">
                                          <p class="body-copy-text-style-1">This is the description for this program.<br>This will
                                              detail the types of workouts with the program. It should detail to main object of
                                              the program and the results that can be expected. This description can be as long as
                                              required</p>
                                      </div>
                                  </div>
                                  <div class="accordion style-2">
                                      <div data-w-id="318dd5d4-e2e9-7095-276c-a871128f0337" class="accordion-header style-2">
                                          <h2 class="generic-text-style-6 non-caps">Do I have to change my diet?</h2>
                                          <div class="accordion-header-arrow">
                                              <div class="accordion-arrow-icon"></div>
                                          </div>
                                      </div>
                                      <div class="accordion-body style-2">
                                          <p class="body-copy-text-style-1">This is the description for this program.<br>This will
                                              detail the types of workouts with the program. It should detail to main object of
                                              the program and the results that can be expected. This description can be as long as
                                              required</p>
                                      </div>
                                  </div>
                              </div><a w-el="questionnaire_user_program_added" data-w-id="318dd5d4-e2e9-7095-276c-a871128f0341"
                                  href="/stripe" class="button-style-1 w-button"
                                  w-el-onclick-0-0="9165cc42-4c13-4be1-b1f2-51a5a8b8a571-0-0"
                                  w-el-onclick-1-0="9165cc42-4c13-4be1-b1f2-51a5a8b8a571-1-0">Let’s get started</a><a
                                  href="/questionnaire" class="button-style-5 w-button">back to programs</a>
                              <link rel="prerender" href="/questionnaire">
                          </div>
                      </div>
                  </div>`;
              wrapper.append(item);
          });
          Wized.data.setVariable("program", programMatch);
          const id = Wized.data.get("v.program");
          console.log("Program Variable! =", id);
          setTimeout(() => {
            Wized.request.execute("Load Program Filter");
            /////////////////////////////////////////
    
            const swiper = new Swiper(".swiper", {
              // Optional parameters
              speed: 1000,
              loop: false,
              observer: true,
              observeParents: true,
              slidesPerView: 1,
              shortSwipes: true,
              watchSlidesProgress: true,
              initialSlide: 0,
    
              // Navigation arrows
              navigation: {
                nextEl: ".right-slide-arrow-button",
                prevEl: ".left-slide-arrow-button",
              },
            });
            /////////////////////////////////////////
            swiper.on("slideChange", function () {
              Webflow.require("ix2").init();
              /*slideBtn_Left.classList.remove("swiper-button-lock");
              slideBtn_Right.classList.remove("swiper-button-lock");*/
            });
          }, 2000);
  
          Wized.data.listen("v.programMatch", async () => {
              const programMatch = await Wized.data.get("v.program"); // Get new value
              console.log("Program Match: ", programMatch); // Console log new value
          });
        }
        else {
            triggerModal.click();
        }
      });
    });
  };