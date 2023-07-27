/* Define - Intialisation - Elements Retrieved
----------------------------------------------------------------
*/

//Element Triggers
const videoContainer = document.getElementById("videoContainer");
const loaderTrigger = document.getElementById("Trigger");
const exerciseTitle = document.getElementById("exerciseTitle");
const exerciseHeader = document.getElementById("exerciseHeader");
const roundPopup = document.getElementById("roundPopup");
const roundTitle = document.getElementById("roundTitle");
const roundNumHeader = document.getElementById("headerNumText");
const roundText = document.getElementById("roundText");
const videoChange = document.getElementById("videoChange");
const paramTest = document.getElementById("paramTest");
const paramTestBase = document.getElementById("paramTestBase");
//const exerciseChangeTitle = document.getElementById("exerciseChangeTitle");
//const exerciseAmrapTitle = document.querySelectorAll('.amrap-title');

// Element Declarations
const repText = document.getElementById("repText");
const timerText = document.getElementById("safeTimerDisplay");
const currentTest = document.getElementById("current");
const durationTest = document.getElementById("dur");
const RoundNumberText = document.getElementById("mainNumText");

// Param Int Set Variables
let setIntRoundNum;
let setIntExercisesNum;
let setIntExerciseNum;

// Param Get Variables
let getRoundNum;
let getExercisesNum;
let getExerciseNum;

// Param Set Variables
let setRoundNum;
let setExercisesNum;
let setExerciseNum;

// Temp Variables
let exerciseDiffRes;
let roundRes;
let roundResIndex;
let roundLength;
let exerciseData;
let roundRealNumber;
let audioRes;
let audioIndex;
let checkAmrapVideo;
let checkAmrapAudio;
let exerciseRes;
let diffLength;
let diffCurrent;
let diffRes;

// Siren = Define - Intialisation
const siren = document.getElementById("siren");
const sirenText = document.getElementById("sirenText");
const sirenAudio = document.getElementById("sirenAudio");
const sirenToggleOn = document.getElementById("sirenToggleOn");

// Voice = Define - Intialisation
const voice = document.getElementById("voice");
const voiceText = document.getElementById("voiceText");
const voiceAudio = document.getElementById("voiceAudio");
const voiceToggleOn = document.getElementById("voiceToggleOn");

// Exercise Controls
// Enabled States
const playButton = document.getElementById("playButton");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const backButton = document.getElementById("backButton");
// Disabled States
const playButtonDisabled = document.getElementById("playButtonDisabled");
const nextButtonDisabled = document.getElementById("nextButtonDisabled");
const prevButtonDisabled = document.getElementById("prevButtonDisabled");

// Diffcult = define - Intialisation
const minusBtn = document.getElementById("minusBtn");
const currentNum = document.getElementById("currentNum");
const limitNum = document.getElementById("limitNum");
const plusBtn = document.getElementById("plusBtn");
let maxLimit;
let minLimit = 1;
let amount = 1;
currentNum.innerHTML = amount;

let refreshNum = 0;

/* Wized Intialisation
----------------------------------------------------------------
*/

// [- Step 1 -] Window Load Async Function To Intialise Wized - Asap = Aysnc
window.onload = async () => {
  //const roundIndex = await Wized.data.get("c.roundindex");
  const cookieIndex = await Wized.data.get("c.cookieindex");
  const dataIndex = await Wized.data.get("v.dataindex");
  const statusNum = await Wized.data.get("v.statusnum");
  const exerciseIndex = await Wized.data.get("c.exerciseindex");
  const exerciseParam = await Wized.data.get("n.parameter.exercise");
  const exercisesParam = await Wized.data.get("n.parameter.exercises");
  const roundParam = await Wized.data.get("n.parameter.round");
  const workoutParam = await Wized.data.get("n.parameter.workout");
  const sirenCookieInt = await Wized.data.get("c.sirenmute");
  const voiceCookieInt = await Wized.data.get("c.voicemute");

  // URL Searching Setup and Declaration
  let activeParam = document.getElementById("activeParam");
  let params = window.location.href;
  let url = new URL(params);
  let checkurl = url.searchParams;

  window.history.replaceState(null, null, url.toString());

  enableDisabledStates();

  Wized.request.await("Load Round Info", (response) => {
    console.log("---------------------------------------");
    console.log("Round Info Response", response);

    roundRes = response;

    roundSelected = roundRes.data[parseInt(roundParam)].Round_Selection;

    console.log("Round Selection Name ", response);
  });

  /*Wized.request.await("Load Audio", (response) => {    
    console.log("Audio Response", response);

    audioRes = response;
  })*/

  // [- Step 2 -] Exercises Request Response From Wized
  Wized.request.await("Load Exercises", (response, exerciseDiffRes) => {
    const repDataInt = response;
    let repAmount;
    let repType;
    let newcookieIndex;
    let amrapBool;
    const amrapResponse = response;
    let checkAmrap;

    if (repDataInt.status === 200) {
      loaderTrigger.click();
      videoContainer.style.opacity = "1";
    }

    roundLength = roundRes.data.length;

    roundRealNumber = parseInt(roundParam) + 1;

    if (parseInt(exercisesParam) !== 0 /*|| roundRealNumber < roundLength*/) {
      roundPopup.style.display = "none";
      roundText.style.display = "none";
    }

    if (roundRealNumber > roundLength) {
      RoundNumberText.innerHTML = "Workout Completed";
      roundTitle.innerHTML = "Congratulations!";
      roundNumHeader.innerHTML = "";
      Wized.data.setVariable("complete", "completed");
      enableDisabledStates();
    } else if (parseInt(roundParam) !== 0) {
      RoundNumberText.innerHTML = parseInt(roundParam);
      roundNumHeader.innerHTML = parseInt(roundParam);
    } else if (parseInt(roundParam) === 0 && roundSelected !== "Warmup"){
      RoundNumberText.innerHTML = parseInt(roundParam + 1);
      roundNumHeader.innerHTML = parseInt(roundParam + 1);
    }
    else if (parseInt(roundParam) === 0 && roundSelected === "Warmup"){
      RoundNumberText.innerHTML = "Warm Up";
      roundTitle.innerHTML = "";
      roundNumHeader.innerHTML = "";
    }

    console.log("---------------------------------------");
    console.log("Rounds Res Length", roundLength);

    exerciseData = repDataInt.data[parseInt(exercisesParam)];

    console.log("---------------------------------------");
    console.log(
      "Round Number",
      parseInt(roundParam),
      "Exercises Number",
      parseInt(exercisesParam),
      "Exercise Number",
      parseInt(exerciseParam)
    );
    console.log("---------------------------------------");
    console.log("All Exercises", amrapResponse);
    console.log("---------------------------------------");
    console.log("Single Exercise:", repDataInt.data[parseInt(exercisesParam)]);

    console.log("Diff Response Secondary:", exerciseDiffRes);

    //console.log("Audio", amrapResponse.data[parseInt(exercisesParam)].Audio_Source);

    let audioSrc = document.getElementById("voiceSrc");
    let audioIndex = parseInt(exerciseParam);
    let vidSrc = document.getElementById("video");
    let videoIndex = parseInt(exerciseParam);

    if (exerciseData !== undefined) {
      repAmount =
        repDataInt.data[parseInt(exercisesParam)]
          .Amounts_Name /*[diffCurrent]*/;
      repType = repDataInt.data[parseInt(exercisesParam)].Rep_Type /*[0]*/;
      amrapBool = repDataInt.data[parseInt(exercisesParam)].Amrap;

      if (amrapBool == "True") {
        loadData();
        
        async function loadData() {

          Wized.request.await("Load Exercise Diff", (response) => {
            
            diffRes = response;
            console.log("---------------------------------------");
            console.log("Exercise Diff Info Response TEMP! ", diffRes);

            /*let diffStr = currentNum.innerHTML;
            let diffInt = parseInt(diffStr);
            diffCurrent = diffInt - 1;*/

            exerciseDiffRes = diffRes;

            console.log("Diff Res RETURNED! ", exerciseDiffRes);

            let amrapLength =
              amrapResponse.data[parseInt(exercisesParam)].Exercise_Selection
                .length;

            diffLength =
            diffRes.data[parseInt(exercisesParam)].Video.length;
            maxLimit = diffLength;
            limitNum.innerHTML = maxLimit;
            console.log(
              "Diff Video Length Exercise:",
              diffRes.data[parseInt(exercisesParam)].Video.length
            );
            console.log(
              "Diff Length :",
              diffRes.data.length
            );
            //checkAmrapAudio = setInterval(audioCheck, 0);
            newcookieIndex =
            diffRes.data[parseInt(exercisesParam)].Video.length;
            console.log("Amrap length:", newcookieIndex);

            let currentNumber = 0;
            let currentNumberText;

            let controlPlusNumber = [];
            let controlMinusNumber = [];
            let videoSrcIndex = [];
            
            if (videoSrcIndex.length  <= 0) {
              
              for (let i = 0; i < amrapLength; i++)
              {
                videoSrcIndex.push(currentNumber);
              }
            }

            vidSrc.src =
            exerciseDiffRes.data[parseInt(videoIndex)].Video[currentNumber].url;

            if (videoSrcIndex.length > 0) {
              for (let i = 0; i < amrapLength; i++) {

                //controlNumber.push(currentNumber);
                let content = document.querySelector("#controls");
                let sortedAmrapTitle =
                  repDataInt.data[
                    parseInt(exercisesParam)
                  ].Diff_Exercise_Lookup.reverse();
                let amrapResTitle = sortedAmrapTitle[i];

                let amrapControl;
                let amrapHeader;
                let amrapHeaderText;
                let amrapHeaderTop;
                let amrapTitle;
                let amrapTrigger;
                let amrapCounter;
                let amrapDivider;
                let amrapLimit;
                let amrapPlus;
                let amrapPlusArrow;
                let amrapMinus;
                let amrapMinusArrow;
                let amrapMinNumm = 0;
                let ammrapLimitNumm = maxLimit;

                //Amrap Control Div "body"
                amrapControl = document.createElement("div");
                amrapControl.classList.add(
                  "accordion",
                  "style-1",
                  "amrap-diff-controls"
                );

                content.append(amrapControl);

                currentNumber = videoSrcIndex[i];

                currentNumberText = currentNumber + 1;

                //Amrap Header Content - Content Div
                amrapHeader = document.createElement("div");
                amrapHeader.classList.add("accordion-header", "style-3");

                amrapControl.appendChild(amrapHeader);

                //Amrap Header Text Content - Content Div
                amrapHeaderText = document.createElement("div");
                amrapHeaderText.classList.add("accordion-header-text", "style-2");

                amrapHeader.appendChild(amrapHeaderText);

                //Amrap Header Top Content - Content Div
                amrapHeaderTop = document.createElement("div");
                amrapHeaderTop.classList.add("accordion-header-top-content");

                amrapHeaderText.appendChild(amrapHeaderTop);

                //Amrap Exercise Title Text
                amrapTitle = document.createElement("h2");
                amrapTitle.classList.add("main-sub-heading-style-1");
                amrapTitle.innerHTML = amrapResTitle;

                amrapHeaderTop.appendChild(amrapTitle);

                //Counter Content Div
                amrapTrigger = document.createElement("div");
                amrapTrigger.classList.add("diff-trigger");

                amrapHeader.appendChild(amrapTrigger);

                //Minus Button
                amrapMinus = document.createElement("div");
                amrapMinus.classList.add("counter-btn", "minus-btn");

                amrapTrigger.appendChild(amrapMinus);

                //Minus Button > Left Arrow
                amrapMinusArrow = document.createElement("div");
                amrapMinusArrow.classList.add("counter-arrow", "left");

                amrapMinus.appendChild(amrapMinusArrow);

                //Current Diffculty Text "1" - example
                amrapCounter = document.createElement("div");
                amrapCounter.classList.add("num", "current", "current-num");
                amrapCounter.innerHTML = currentNumberText;

                amrapTrigger.appendChild(amrapCounter);

                //Divider "/" Text
                amrapDivider = document.createElement("div");
                amrapDivider.classList.add("num", "divider");
                amrapDivider.innerHTML = "/";

                amrapTrigger.appendChild(amrapDivider);

                //Limit Text
                amrapLimit = document.createElement("div");
                amrapLimit.classList.add("num", "limit", "limit-num");
                amrapLimit.innerHTML = ammrapLimitNumm;

                amrapTrigger.appendChild(amrapLimit);

                //Plus Button
                amrapPlus = document.createElement("div");
                amrapPlus.classList.add("counter-btn", "Plus-btn");

                amrapTrigger.appendChild(amrapPlus);

                //Plus Button > Right Arrow
                amrapPlusArrow = document.createElement("div");
                amrapPlusArrow.classList.add("counter-arrow", "right");

                amrapPlus.appendChild(amrapPlusArrow);

                controlPlusNumber.push(amrapPlus);
                controlMinusNumber.push(amrapMinus);

                controlPlusNumber[i].addEventListener("click", () => {
                  if (currentNumber < ammrapLimitNumm) {
                    currentNumber++;
                    videoSrcIndex[i] = currentNumber;
                    currentNumberText = videoSrcIndex[i]
                    //amrapTitle.innerHTML  = amrapCurrentNumm;
                    amrapCounter.innerHTML = currentNumberText;
                    //vidSrc.src = repDataInt.data[parseInt(exercisesParam)].Diff_Video[controlNumber[i]].url;
                    if (videoIndex === videoSrcIndex[i])
                    {
                      vidSrc.src =
                      exerciseDiffRes.data[parseInt(videoIndex)].Video[videoSrcIndex[i]].url;
                      enableDisabledStates();
                      playVideoDiff();
                      setTimeout(enableActiveStates, 1500);
                      setTimeout(autoPlayVideo, 2000);
                      
                    }
                    console.log("Amrap Diff Increased");
                    console.log("CurrentNumber Array: ", controlPlusNumber);
                  }
                });

                controlMinusNumber[i].addEventListener("click", () => {
                  if (currentNumber > amrapMinNumm) {
                    currentNumber--;
                    videoSrcIndex[i] = currentNumber;
                    currentNumberText = videoSrcIndex[i]
                    //amrapTitle.innerHTML  = amrapCurrentNumm;
                    amrapCounter.innerHTML = currentNumberText;
                    if (videoIndex === videoSrcIndex[i])
                    {
                      vidSrc.src =
                      exerciseDiffRes.data[parseInt(videoIndex)].Video[videoSrcIndex[i]].url;
                      enableDisabledStates();
                      playVideoDiff();
                      setTimeout(enableActiveStates, 1500);
                      setTimeout(autoPlayVideo, 2000);
                    }
                    /*vidSrc.src =
                    exerciseDiffRes.data[parseInt(videoIndex)].Video[videoSrcIndex[i]].url;*/
                    console.log("Amrap Diff Decreased");
                    console.log("CurrentNumber Array: ", controlMinusNumber);
                  }
                });

                checkAmrapVideo = setInterval(() => {
                  
                  let videoCurrentSrc;
                  let videos = document.getElementById("video");
        
                  if (Math.floor(videos.currentTime) === Math.floor(videos.duration)) {
                    if (
                      videoIndex < diffLength
                    ) {
                      videoIndex = videoIndex + 1;
                      console.log("Current Exercise Index For Video", parseInt(videoIndex));
                      videoCurrentSrc =
                      diffRes.data[parseInt(videoIndex)].Video[
                        videoSrcIndex[videoIndex]
                        ].url;
                      console.log("---------------------------------------");
                      console.log(videoCurrentSrc);
                      console.log("---------------------------------------");
                      console.log("Ran Request Video Src => Updated");
        
                      videos.src = videoCurrentSrc;
                      videos.play();
                    }
                  } else if (
                    videoIndex >= diffLength
                  ) {
                    videoIndex = 0;
                    videoCurrentSrc =
                    exerciseDiffRes.data[parseInt(videoIndex)].Video[
                      videoSrcIndex[i]
                      ].url;
                    console.log("---------------------------------------");
                    console.log(videoCurrentSrc);
                    console.log("---------------------------------------");
                    console.log("Ran Request Video Src <= Reset ");
        
                    console.log("---------------------------------------");
                    console.log("Current Video Index:", parseInt(videoIndex));
        
                    videos.src = videoCurrentSrc;
                    videos.play();
                  }
                }, 0);
              }
            }

            console.log("Video Index Array: ", videoSrcIndex);
            console.log("Control Plus Array: ", controlPlusNumber);
            console.log("Control Minus Array: ", controlMinusNumber);

          });
        }
      } else {

        clearInterval(checkAmrapVideo);
        let diffStr = currentNum.innerHTML;
        let diffInt = parseInt(diffStr);
        diffCurrent = diffInt - 1;

        diffLength =
          repDataInt.data[parseInt(exercisesParam)].Diff_Video.length;
        maxLimit = diffLength;
        limitNum.innerHTML = maxLimit;
        console.log(
          "Diff Video Length Exercise:",
          repDataInt.data[parseInt(exercisesParam)].Diff_Video.length
        );
        console.log(
          "Diff Length :",
          repDataInt.data[parseInt(exercisesParam)].length
        );

        DiffControlsSingle();
        vidSrc.src =
        repDataInt.data[parseInt(exercisesParam)].Diff_Video[diffCurrent].url;
      }

      audioSrc.src =
        repDataInt.data[parseInt(exercisesParam)].Audio_Source[0].url;
      //let roundLength = amrapResponse.data[parseInt(exerciseParam)].Video.length
      let exercisesLength =
        amrapResponse.data[parseInt(exercisesParam)].Exercise_Selection.length;
      let roundLength = repDataInt.data.length;


      // Diff Increase Click Controls - Single Exercise
      function DiffControlsSingle() {
        plusBtn.addEventListener("click", function () {
          if (amount < maxLimit) {
            diffCurrent++;
            amount++;
            currentNum.innerHTML = amount;
            enableDisabledStates();
            playVideoDiff();
            vidSrc.src =
              repDataInt.data[parseInt(exercisesParam)].Diff_Video[
                diffCurrent
              ].url;
            setTimeout(enableActiveStates, 1500);
            setTimeout(autoPlayVideo, 2000);
          } else {
            amount = maxLimit;
          }
          console.log("---------------------------------------");
          console.log("Current Difficulty:", diffCurrent);
        });

        // Diff Decrease Click Controls - Single Exercise
        minusBtn.addEventListener("click", function () {
          if (amount > minLimit) {
            diffCurrent--;
            amount--;
            currentNum.innerHTML = amount;
            enableDisabledStates();
            playVideoDiff();
            vidSrc.src =
              repDataInt.data[parseInt(exercisesParam)].Diff_Video[
                diffCurrent
              ].url;
            setTimeout(enableActiveStates, 1500);
            setTimeout(autoPlayVideo, 2000);
          } else {
            amount = minLimit;
          }
          console.log("---------------------------------------");
          console.log("Current Difficulty:", diffCurrent);
        });
      }

      // Diff Increase Click Controls - Amrap Exercises
      /*function DiffControlsAmrap() {

      }*/

      let clearStates = setTimeout(() => {
        enableActiveStates();
        clearTimeout(clearStates);
      }, 1500);

      console.log("---------------------------------------");
      console.log("Exercise Length", exercisesLength);
      console.log("---------------------------------------");
      console.log("Round Length", roundLength);
      //RoundNumberText.innerHTML = parseInt(exercisesParam) + 1;

      console.log("---------------------------------------");
      console.log(
        "Rounds",
        amrapResponse.data[parseInt(exercisesParam)].Round_Name[0]
      );

      /* WORK IN PROGRESS CODE Thursday 29th June 2023 
    New DEVELOPMENT Parameter setup for indexing using ("Query String")*/

      console.log("---------------------------------------");
      console.log("Amount: ", repAmount);
      console.log("---------------------------------------");
      console.log("Rep Type:", repType);
      console.log("---------------------------------------");

      console.log("Current Difficulty:", diffCurrent);
      console.log("---------------------------------------");
      console.log("Is The Selected Exercise An Amrap:", amrapBool);

      nextButton.addEventListener("click", function () {
        updateParams();

        //DEVELOPMENT ONLY
        console.log("---------------------------------------");
        console.log("Next Button Clicked Updated Data Below");
        console.log("---------------------------------------");
        console.log(
          "Video Array Length:",
          amrapResponse.data[parseInt(exercisesParam)].Video.length
        );
        console.log("---------------------------------------");
        console.log(
          "Round Number",
          parseInt(roundParam),
          "Exercises Number",
          parseInt(exercisesParam),
          "Exercise Number",
          parseInt(exerciseParam)
        );
      });

      prevButton.addEventListener("click", function () {
        backTrackParams();

        //DEVELOPMENT ONLY
        console.log("---------------------------------------");
        console.log("Prev Button Clicked Updated Data Below");
        console.log("---------------------------------------");
        console.log(
          "Amrap Video Array Length:",
          amrapResponse.data[parseInt(exercisesParam)].Video.length
        );
        console.log("---------------------------------------");
        console.log(
          "Round Number",
          parseInt(roundParam),
          "Exercises Number",
          parseInt(exercisesParam),
          "Exercise Number",
          parseInt(exerciseParam)
        );
      });

      function updateParams() {
        /*if (amrapBool == "True") {
          getExercisesNum = checkurl.get("exercises");
          getExercisesNum = exercisesLength;
          setExercisesNum = checkurl.set("exercises", getExercisesNum.toString());
        }*/

        getExercisesNum = checkurl.get("exercises");
        getExercisesNum = parseInt(getExercisesNum) + 1;
        setExercisesNum = checkurl.set("exercises", getExercisesNum.toString());

        window.location.href = url.toString();
        //window.history.replaceState(null, null, url.toString());
        //checkParam()

        /* //DEVELOPMENT ONLY
        console.log("---------------------------------------");
        console.log("Next Button Clicked Updated Data Below");
        console.log("---------------------------------------");
        console.log("Amrap Video Array Length:", amrapResponse.data[parseInt(exercisesParam)].Video.length);
        console.log("---------------------------------------");
        console.log("Round Number", parseInt(roundParam), "Exercises Number", parseInt(exercisesParam), "Exercise Number", parseInt(exerciseParam));*/
      }

      function backTrackParams() {
        //if (parseInt(exercisesParam) > exercisesLength) {
        /*getExercisesNum = checkurl.get("exercises");
        getExercisesNum = parseInt(getExercisesNum) - 1;
        setExercisesNum = checkurl.set("exercises", getExercisesNum.toString());*/

        getExercisesNum = checkurl.get("exercises");
        getExercisesNum = parseInt(getExercisesNum) - 1;
        setExercisesNum = checkurl.set("exercises", getExercisesNum.toString());
        //}

        window.location.href = url.toString();
        //window.history.replaceState(null, null, url.toString());
        //checkParam()

        /* //DEVELOPMENT ONLY
        console.log("---------------------------------------");
        console.log("Next Button Clicked Updated Data Below");
        console.log("---------------------------------------");
        console.log("Amrap Video Array Length:", amrapResponse.data[parseInt(exercisesParam)].Video.length);
        console.log("---------------------------------------");
        console.log("Round Number", parseInt(roundParam), "Exercises Number", parseInt(exercisesParam), "Exercise Number", parseInt(exerciseParam));*/
      }

      if (
        (parseInt(exercisesParam) > 0 && amrapBool == "False") ||
        (parseInt(exercisesParam) > 0 &&
          amrapBool == "True" &&
          videoIndex === 0)
      ) {
        setTimeout(autoPlayVideo, 2000);
      } else if (
        (parseInt(exercisesParam) > 0 &&
          amrapBool == "True" &&
          videoIndex === 0) ||
        exerciseParam === 0
      ) {
        setTimeout(autoPlayVideo, 2000);
      }

      //let counter = repAmount;
      let clickNum = 0;

      // Play Button click controls
      playButton.addEventListener("click", function () {
        if (clickNum < 1) {
          playVoice();
          //Conditions
          roundType();
        }
        playVideo();
        clickNum = clickNum + 1;
      });
    } else if (
      exerciseData == undefined &&
      parseInt(exercisesParam) > 0 &&
      parseInt(roundParam) !== roundLength
    ) {
      getRoundNum = checkurl.get("round");
      getRoundNum = parseInt(getRoundNum) + 1;
      setRoundNum = checkurl.set("round", getRoundNum.toString());
      getExercisesNum = checkurl.get("exercises");
      getExercisesNum = 0;
      setExercisesNum = checkurl.set("exercises", getExercisesNum.toString());

      window.location.href = url.toString();
    } else if (
      exerciseData == undefined &&
      parseInt(roundParam) == 0 &&
      parseInt(exercisesParam) < 0
    ) {
      roundPopup.style.display = "flex";
      roundText.style.display = "flex";
      RoundNumberText.innerHTML = "Redirecting..";
      enableDisabledStates();
      window.location.href = "/workout-overview?workout=" + workoutParam;
    } else if (
      exerciseData == undefined &&
      parseInt(exercisesParam) < 0 &&
      parseInt(roundParam) !== roundLength
    ) {
      getRoundNum = checkurl.get("round");
      getRoundNum = parseInt(getRoundNum) - 1;
      setRoundNum = checkurl.set("round", getRoundNum.toString());
      getExercisesNum = checkurl.get("exercises");
      getExercisesNum = 0;
      setExercisesNum = checkurl.set("exercises", getExercisesNum.toString());

      window.location.href = url.toString();
    } else if (
      window.location.href == "https://the-legends-web-app.webflow.io/workout"
    ) {
      roundPopup.style.display = "flex";
      roundText.style.display = "flex";
      RoundNumberText.innerHTML = "Redirecting..";
      enableDisabledStates();
      window.location.href = "/program-hub";
    } else if (
      exerciseData == undefined &&
      parseInt(exercisesParam) > 0 &&
      parseInt(roundParam) === roundLength
    ) {
      roundPopup.style.display = "flex";
      roundText.style.display = "flex";
      RoundNumberText.innerHTML = "Workout Completed";
      Wized.data.setVariable("complete", "completed");
      enableDisabledStates();
    }

    // Round Type Condtionals To Enable Time/Reps
    function roundType() {
      if (repType === "Time") {
        timer();
      } else if (repType === "Reps") {
        repCount();
      }
      console.log("---------------------------------------");
      console.log(repType, "Applied To The Exercise");
    }

    // Timer setup function
    function timer() {
      let counter = repAmount;
      repText.innerHTML = repType;
      let timer = setInterval(function () {
        timerText.innerHTML = counter + ".00";
        if (!timerText.classList.contains("pausetime")) {
          counter--;
          if (counter < 0) {
            playSiren();
            setTimeout(() => {
              nextButton.click();
            }, 1000);
            clearInterval(timer);
            clearInterval(checkAmrap);
            console.log("---------------------------------------");
            console.log("Completed");
          }
        }
      }, 1000);
    }

    // Rep Count Apply Function
    function repCount() {
      let counter = repAmount;
      repText.innerHTML = repType;
      timerText.innerHTML = counter;
    }

    // Video Condtionals To Enable If Paused/Playing
    function playVideo() {
      let video = document.getElementById("video");
      if (video.paused) {
        video.play();
        playButton.classList.toggle("pause");
        timerText.classList.remove("pausetime");
        console.log("---------------------------------------");
        console.log("Video Duration", video.duration + "s");
      } else {
        video.pause();
        playButton.classList.toggle("pause");
        timerText.classList.add("pausetime");
      }
    }

    function playVideoDiff() {
      let video = document.getElementById("video");
      if (!video.paused) {
        video.pause();
        playButton.classList.toggle("pause");
        timerText.classList.add("pausetime");
        console.log("---------------------------------------");
        console.log("Video Duration", video.duration + "s");
      }
    }

    // Siren Condtionals To Enable If Paused/Playing
    function playSiren() {
      let sirenSrc = document.getElementById("sirenSrc");
      if (sirenSrc.paused) {
        sirenSrc.play();
      } else {
        sirenSrc.pause();
      }
    }

    // Voice Condtionals To Enable If Paused/Playing
    function playVoice() {
      let voiceSrc = document.getElementById("voiceSrc");
      if (voiceSrc.paused) {
        voiceSrc.play();
      } else {
        voiceSrc.pause();
      }
    }
    /*function audioCheck() {
      let audioCurrentSrc;
      let audio = document.getElementById("voiceSrc");

      if (Math.floor(audio.currentTime) === Math.floor(audio.duration)) {
        if (
          audioIndex < amrapResponse.data[parseInt(exercisesParam)].Audio_Source.length
        ) {
          audioIndex = audioIndex + 1;
          console.log("Current Exercise Index For Audio", parseInt(audioIndex));

          audioCurrentSrc =
          amrapResponse.data[parseInt(exercisesParam)].Audio_Source[
              parseInt(audioIndex)
            ].url;
          console.log("---------------------------------------");
          console.log(audioCurrentSrc);
          console.log("---------------------------------------");
          console.log("Ran Request Audio Src => Updated");

          audio.src = audioCurrentSrc;
          audio.play();
        }
      } else if (
        audioIndex >= amrapResponse.data[parseInt(exercisesParam)].Audio_Source.length
      ) {
        audioIndex = 0;
        audioCurrentSrc =
        amrapResponse.data[parseInt(exercisesParam)].Audio_Source[
            parseInt(audioIndex)
          ].url;
        console.log("---------------------------------------");
        console.log(audioCurrentSrc);
        console.log("---------------------------------------");
        console.log("Ran Request Audio Src <= Reset ");

        console.log("---------------------------------------");
        console.log("Current Audio Index:", parseInt(audioIndex));

        audio.src = audioCurrentSrc;
        audio.play();
      }
    }*/
  });

  Wized.request.await("Load Exercise", (response) => {
    console.log("---------------------------------------");
    console.log("Exercise Info Response", response);

    exerciseRes = response;
  });

  //Function Calls Onload
  //roundEnableLoad();
  //setTimeout(nextPage, 2000);
  sirenEnableLoad();
  voiceEnableLoad();

  // Siren Click Controls
  siren.addEventListener("click", function () {
    sirenEnableClick();
  });

  // Voice Click Controls
  voice.addEventListener("click", function () {
    voiceEnableClick();
  });

  function enableDisabledStates() {
    playButton.style.display = "none";
    playButtonDisabled.style.display = "flex";
    //
    nextButton.style.display = "none";
    nextButtonDisabled.style.display = "flex";
    //
    prevButton.style.display = "none";
    prevButtonDisabled.style.display = "flex";
  }

  function enableActiveStates() {
    playButton.style.display = "flex";
    playButtonDisabled.style.display = "none";
    //
    nextButton.style.display = "flex";
    nextButtonDisabled.style.display = "none";
    //
    prevButton.style.display = "flex";
    prevButtonDisabled.style.display = "none";
  }

  // Autoplay Video Function
  function autoPlayVideo() {
    playButton.click();
  }

  // Next Page Condtionals To Proceed To Next Page
  function nextPage() {
    if (exerciseParam === undefined || exerciseParam === "undefined") {
      if (refreshNum < 1) {
        nextButton.click();
      }
      playButton.style.display = "none";
      playButtonDisabled.style.display = "flex";
      //
      nextButton.style.display = "none";
      nextButtonDisabled.style.display = "flex";
      //
      prevButton.style.display = "none";
      prevButtonDisabled.style.display = "flex";
    }
    refreshNum = refreshNum + 1;
  }

  // Siren Condtionals Click On/Off
  function sirenEnableClick() {
    if (sirenText.innerHTML === "Off") {
      Wized.data.setCookie("sirenmute", "on");
      sirenText.innerHTML = "On";
      sirenToggleOn.classList.toggle("on");
    } else if (sirenText.innerHTML === "On") {
      Wized.data.setCookie("sirenmute", "muted");
      sirenText.innerHTML = "Off";
      sirenToggleOn.classList.toggle("on");
    }

    // Development Purposes (DEBUGGING)
    let sirenUpdatedCookie = Wized.data.get("c.sirenmute");
    console.log("---------------------------------------");
    console.log("mute cookie changed to: ", sirenUpdatedCookie);
    console.log("---------------------------------------");
  }

  // Voice Condtionals Click On/Off
  function voiceEnableClick() {
    if (voiceText.innerHTML === "Off") {
      Wized.data.setCookie("voicemute", "on");
      voiceText.innerHTML = "On";
      voiceToggleOn.classList.toggle("on");
    } else if (voiceText.innerHTML === "On") {
      Wized.data.setCookie("voicemute", "muted");
      voiceText.innerHTML = "Off";
      voiceToggleOn.classList.toggle("on");
    }

    // Development Purposes (DEBUGGING)
    const voiceUpdatedCookie = Wized.data.get("c.voicemute");
    console.log("---------------------------------------");
    console.log("mute cookie changed to: ", voiceUpdatedCookie);
    console.log("---------------------------------------");
  }

  // Siren Condtionals On Page Load On/Off
  function sirenEnableLoad() {
    // Siren Cookie Intialising On
    if (sirenCookieInt === "undefined" || sirenCookieInt === undefined) {
      Wized.data.setCookie("sirenmute", "on");
      sirenText.innerHTML = "On";
      sirenToggleOn.classList.toggle("on");
    }
    // Siren Cookie On
    else if (sirenCookieInt === "on") {
      sirenText.innerHTML = "On";
      sirenToggleOn.classList.toggle("on");
    }
    // Siren Cookie Off
    else if (sirenCookieInt === "off") {
      sirenText.innerHTML = "Off";
      sirenToggleOn.classList.toggle("on");
    }
  }

  // Voice Condtionals On Page Load On/Off
  function voiceEnableLoad() {
    // Voice Cookie Intialising On
    if (voiceCookieInt === "undefined" || voiceCookieInt === undefined) {
      Wized.data.setCookie("voicemute", "on");
      voiceText.innerHTML = "On";
      voiceToggleOn.classList.toggle("on");
    }
    // Voice Cookie On
    else if (voiceCookieInt === "on") {
      voiceText.innerHTML = "On";
      voiceToggleOn.classList.toggle("on");
    }
    // Voice Cookie Off
    else if (voiceCookieInt === "off") {
      voiceText.innerHTML = "Off";
      voiceToggleOn.classList.toggle("on");
    }
  }

  // History Replaced When Scroll Buttons Are Clicked
  $(document).ready(function () {
    const scrollBtn = $(".panel-button");

    scrollBtn.click(() => {
      setTimeout(() => {
        removeHash();
      }, 0);
    });
    function removeHash() {
      history.replaceState(
        "",
        document.title,
        window.location.origin +
          window.location.pathname +
          window.location.search
      );
    }
  });
};
