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
let exerciseDiffRes;
let diffLength;
let diffCurrent;

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

// Diffcult Amrap = define - Intialisation
const minusBtnM = document.querySelectorAll('.minus-btn-multi');
const currentNumM = document.querySelectorAll('.current-num-multi');
const limitNumM = document.querySelectorAll('.limit-num-multi');
const plusBtnM = document.querySelectorAll('.plus-btn-multi');
let maxLimitM;
let minLimitM = 1;
let amountM = 1;
currentNumM.innerHTML = amountM;
let i;

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

  enableDisabledStates ()

  Wized.request.await("Load Round Info", (response) => {  
    console.log("---------------------------------------");  
    console.log("Round Info Response", response);

    roundRes = response;
  })

  /*Wized.request.await("Load Audio", (response) => {    
    console.log("Audio Response", response);

    audioRes = response;
  })*/

  // [- Step 2 -] Exercises Request Response From Wized
  Wized.request.await("Load Exercises", (response) => {
    const repDataInt = response;
    let repAmount;
    let repType;
    let newcookieIndex;
    let amrapBool;
    const amrapResponse = response; 
    let checkAmrap;

    if (repDataInt.status === 200) {
        loaderTrigger.click();
        videoContainer.style.opacity = "1"
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
      enableDisabledStates ()
    }
 
    else if (parseInt(roundParam) !== 0) {
      RoundNumberText.innerHTML = parseInt(roundParam);
      roundNumHeader.innerHTML = parseInt(roundParam);
    }

    else {
      RoundNumberText.innerHTML = "Warm Up";
      roundTitle.innerHTML = "";
      roundNumHeader.innerHTML = "";
  }

    console.log("---------------------------------------");
    console.log("Rounds Res Length", roundLength)

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

    //console.log("Audio", amrapResponse.data[parseInt(exercisesParam)].Audio_Source);

    let audioSrc = document.getElementById("voiceSrc");
    let audioIndex = parseInt(exerciseParam);
    let vidSrc = document.getElementById("video");
    let videoIndex = parseInt(exerciseParam);


    if (exerciseData !== undefined) {

      repAmount =
      repDataInt.data[parseInt(exercisesParam)].Amounts_Name/*[diffCurrent]*/;
      repType = repDataInt.data[parseInt(exercisesParam)].Rep_Type/*[0]*/;
      amrapBool = repDataInt.data[parseInt(exercisesParam)].Amrap;

      if (amrapBool == "True")
      { 
        let diffStr = currentNum.innerHTML;
        let diffInt = parseInt(diffStr);
        diffCurrent = diffInt - 1;

        let amrapTitle = document.querySelectorAll('.amrap-title');
        let plus = document.querySelectorAll('.plus-btn');
        let minus = document.querySelectorAll('.minus-btn');

        amrapTitle.forEach(applied => {
          console.log(applied.innerHTML);
        });

        plus.forEach(btn => {
          btn.addEventListener("click", () => { 
            alert("Amrap Activated");
          });
        });

        minus.forEach(btn => {
          btn.addEventListener("click", () => { 
            alert("Amrap Deactivated");
          });
        });


        diffLength = repDataInt.data[parseInt(exercisesParam)].Diff_Video.length;
        maxLimit = diffLength;
        limitNum.innerHTML = maxLimit;
        console.log("Diff Video Length Exercise:", repDataInt.data[parseInt(exercisesParam)].Diff_Video.length);
        console.log("Diff Length :", repDataInt.data[parseInt(exercisesParam)].length);
        //DiffControlsAmrap()
        console.log("Amrap Activated")
        /*for (i = 0; i < repDataInt.data[parseInt(exercisesParam)].Diff__Exercise_Lookup.length; i++) {
          plusBtnM[i].addEventListener("click", function () {
            if (amountM[i] < maxLimitM[i]) {
              diffCurrent++;
              amountM++;
              currentNumM[i].innerHTML = amountM[i];
              enableDisabledStates();
              playVideoDiff();
              vidSrc.src = repDataInt.data[parseInt(exercisesParam)].Diff_Video[diffCurrent].url;
              setTimeout(enableActiveStates, 1500);
              setTimeout(autoPlayVideo, 2000);
            }
            else {
              amountM[i] = maxLimitM[i];
            }
            console.log("---------------------------------------");
            console.log("Current Difficulty:", diffCurrent);
          });
          
        // Diff Decrease Click Controls - Single Exercise
        minusBtnM[i].addEventListener("click", function () {
          if (amountM[i] > minLimitM[i]) {
            diffCurrent--;
            amountM[i]--;
            currentNumM[i].innerHTML = amountM[i];
            enableDisabledStates();
            playVideoDiff();
            vidSrc.src = repDataInt.data[parseInt(exercisesParam)].Diff_Video[diffCurrent].url;
            setTimeout(enableActiveStates, 1500);
            setTimeout(autoPlayVideo, 2000);
          }
          else {
            amountM[i] = minLimitM[i];
          }
          console.log("---------------------------------------");
          console.log("Current Difficulty:", diffCurrent);
        });
      }*/

        //console.log("Diff Video Length Exercise:", repDataInt.data[parseInt(exercisesParam)].Diff_Video.length);
        //console.log("Diff Length :", repDataInt.data[parseInt(exercisesParam)].length);
      }

      else {
        let diffStr = currentNum.innerHTML;
        let diffInt = parseInt(diffStr);
        diffCurrent = diffInt - 1;


        diffLength = repDataInt.data[parseInt(exercisesParam)].Diff_Video.length;
        maxLimit = diffLength;
        limitNum.innerHTML = maxLimit;
        console.log("Diff Video Length Exercise:", repDataInt.data[parseInt(exercisesParam)].Diff_Video.length);
        console.log("Diff Length :", repDataInt.data[parseInt(exercisesParam)].length);

        DiffControlsSingle();
      }

      
      vidSrc.src = repDataInt.data[parseInt(exercisesParam)].Diff_Video[diffCurrent].url;
      audioSrc.src = repDataInt.data[parseInt(exercisesParam)].Audio_Source[0].url;
      //let roundLength = amrapResponse.data[parseInt(exerciseParam)].Video.length
      let exercisesLength =
        amrapResponse.data[parseInt(exercisesParam)].Exercise_Selection.length;
      let roundLength = repDataInt.data.length;

      // Diff Exercise Single Function
      

      // Diff Exercise Amrap Function
      

       // Diff Increase Click Controls - Single Exercise
       function DiffControlsSingle() {
        plusBtn.addEventListener("click", function () {
          if (amount < maxLimit) {
            diffCurrent++;
            amount++;
            currentNum.innerHTML = amount;
            enableDisabledStates();
            playVideoDiff();
            vidSrc.src = repDataInt.data[parseInt(exercisesParam)].Diff_Video[diffCurrent].url;
            setTimeout(enableActiveStates, 1500);
            setTimeout(autoPlayVideo, 2000);
          }
          else {
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
            vidSrc.src = repDataInt.data[parseInt(exercisesParam)].Diff_Video[diffCurrent].url;
            setTimeout(enableActiveStates, 1500);
            setTimeout(autoPlayVideo, 2000);
          }
          else {
            amount = minLimit;
          }
          console.log("---------------------------------------");
          console.log("Current Difficulty:", diffCurrent);
        });
      }
      
       /*----------------------------------------------------------------
        Work In Progress Amarap Diffculty Controls
        ----------------------------------------------------------------
        Amrap Control Variables
        ----------------------------------------------------------------
        Diffcult Amrap = define - Intialisation
        const minusBtnM = document.querySelectorAll('.minus-btn-multi');
        const currentNumM = document.querySelectorAll('.current-num-multi');
        const limitNumM = document.querySelectorAll('.limit-num-multi');
        const plusBtnM = document.querySelectorAll('.plus-btn-multi');
        let maxLimitM;
        let minLimitM = 1;
        let amountM = 1;
        currentNumM.innerHTML = amountM;
        let i;
        ----------------------------------------------------------------*/

       // Diff Increase Click Controls - Amrap Exercises
       function DiffControlsAmrap() {
        
        for (let i = 0; i < i.length; i++) {
          let diffLengthM;
          const plusBtnA = plusBtnM[i];
          const minusBtnA = minusBtnM[i];

          const amountA = amountM[i];
          const maxLimitA = maxLimitM[i];
          const minLimitA = mixLimitM[i];
          const currentNumA = currentNumM[i];
          const diffLengthA = diffLengthM[i];
          const diffCurrentA = diffCurrent[i];

          console.log("Elements ", plusBtnA, minusBtnA) 

          const limitNumA = limitNumM[i];

          let diffStr = currentNumA.innerHTML;
          let diffInt = parseInt(diffStr);
          diffCurrentA = diffInt - 1;
  
  
          diffLengthA = repDataInt.data[parseInt(exercisesParam)].Diff_Video.length;
          maxLimitA = diffLengthA;
          limitNumA.innerHTML = maxLimitA;
          console.log("Diff Video Length Exercise:", repDataInt.data[parseInt(exercisesParam)].Diff_Video.length);
          console.log("Diff Length :", repDataInt.data[parseInt(exercisesParam)].length);




          // Plus Button Click Controls - Amrap Exercises
          plusBtnA.addEventListener("click", function () {
            if (amountA[i] < maxLimitA[i]) {
              diffCurrentA++;
              amountA++;
              currentNumA.innerHTML = amountA;
              enableDisabledStates();
              playVideoDiff();
              vidSrc.src = repDataInt.data[parseInt(exercisesParam)].Diff_Video[diffCurrentA].url;
              setTimeout(enableActiveStates, 1500);
              setTimeout(autoPlayVideo, 2000);
            }
            else {
              amountA = maxLimitA[i];
            }
            console.log("---------------------------------------");
            console.log("Current Difficulty:", diffCurrent);
          });

          // Minus Button Click Controls - Amrap Exercises
          minusBtnA.addEventListener("click", function () {
            if (amountA > maxLimitA) {
              diffCurrentA--;
              amountA--;
              currentNumA.innerHTML = amountA;
              enableDisabledStates();
              playVideoDiff();
              vidSrc.src = repDataInt.data[parseInt(exercisesParam)].Diff_Video[diffCurrentA].url;
              setTimeout(enableActiveStates, 1500);
              setTimeout(autoPlayVideo, 2000);
            }
            else {
              amountA = minLimitA;
            }
            console.log("---------------------------------------");
            console.log("Current Difficulty:", diffCurrentA);
          });
          
        }
        /*plusBtnA.addEventListener("click", function () {
          if (amountMulti[i] < maxLimitMulti[i]) {
            diffCurrent++;
            amountMulti[i]++;
            currentNumMulti[i].innerHTML = amountMulti[i];
            enableDisabledStates();
            playVideoDiff();
            vidSrc.src = repDataInt.data[parseInt(exercisesParam)].Diff_Video[diffCurrent].url;
            setTimeout(enableActiveStates, 1500);
            setTimeout(autoPlayVideo, 2000);
          }
          else {
            amountMulti[i] = maxLimitMulti[i];
          }
          console.log("---------------------------------------");
          console.log("Current Difficulty:", diffCurrent);
        });

        // Diff Decrease Click Controls - Amrap Exercises
        minusBtnMulti[i].addEventListener("click", function () {
          if (amountMulti[i] > minLimit[i]) {
            diffCurrent--;
            amountMulti[i]--;
            currentNumMulti[i].innerHTML = amountMulti[i];
            enableDisabledStates();
            playVideoDiff();
            vidSrc.src = repDataInt.data[parseInt(exercisesParam)].Diff_Video[diffCurrent].url;
            setTimeout(enableActiveStates, 1500);
            setTimeout(autoPlayVideo, 2000);
          }
          else {
            amountMulti[i] = minLimitMulti[i];
          }
          console.log("---------------------------------------");
          console.log("Current Difficulty:", diffCurrent);
        });*/
      }

        /*----------------------------------------------------------------
        End Amarap Diffculty Controls
        ----------------------------------------------------------------*/
      

      let clearStates = setTimeout (() => {
        enableActiveStates ()
        clearTimeout(clearStates)
      }, 1500);

      console.log("---------------------------------------");
      console.log("Exercise Length", exercisesLength);
      console.log("---------------------------------------");
      console.log("Round Length", roundLength);
      //RoundNumberText.innerHTML = parseInt(exercisesParam) + 1;

      console.log("---------------------------------------");
      console.log("Rounds", amrapResponse.data[parseInt(exercisesParam)].Round_Name[0]);

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

      // Amrap Condtionals To Check If True/False
      if (amrapBool == "True") {
        checkAmrapVideo = setInterval(videoCheck, 0);
        //checkAmrapAudio = setInterval(audioCheck, 0);
        newcookieIndex =
          amrapResponse.data[parseInt(exercisesParam)].Video.length;
        console.log("Amrap length:", newcookieIndex);
      } else {
        clearInterval(checkAmrapVideo);
        //clearInterval(checkAmrapAudio);
      }

      if (
        (parseInt(exercisesParam) > 0 && amrapBool == "False" || parseInt(exercisesParam) > 0 &&
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
    }

  else if (exerciseData == undefined && parseInt(exercisesParam) > 0 && parseInt(roundParam) !== roundLength)
    {
      getRoundNum = checkurl.get("round");
      getRoundNum = parseInt(getRoundNum) + 1;
      setRoundNum = checkurl.set("round", getRoundNum.toString());
      getExercisesNum = checkurl.get("exercises");
      getExercisesNum = 0;
      setExercisesNum = checkurl.set("exercises", getExercisesNum.toString());

      window.location.href = url.toString();      
    }

    else if (exerciseData == undefined && parseInt(roundParam) == 0 && parseInt(exercisesParam) < 0) {
      roundPopup.style.display = "flex";
      roundText.style.display = "flex";
      RoundNumberText.innerHTML = "Redirecting..";
      enableDisabledStates ()
      window.location.href = "/workout-overview?workout=" + workoutParam;
    }

    else if (exerciseData == undefined && parseInt(exercisesParam) < 0 && parseInt(roundParam) !== roundLength)
    {
      getRoundNum = checkurl.get("round");
      getRoundNum = parseInt(getRoundNum) - 1;
      setRoundNum = checkurl.set("round", getRoundNum.toString());
      getExercisesNum = checkurl.get("exercises");
      getExercisesNum = 0;
      setExercisesNum = checkurl.set("exercises", getExercisesNum.toString());

      window.location.href = url.toString();      
    }

    else if (window.location.href == "https://the-legends-web-app.webflow.io/workout") {
      roundPopup.style.display = "flex";
      roundText.style.display = "flex";
      RoundNumberText.innerHTML = "Redirecting..";
      enableDisabledStates ()
      window.location.href = "/program-hub";
    }

    else if (exerciseData == undefined && parseInt(exercisesParam) > 0 && parseInt(roundParam) === roundLength) {
      roundPopup.style.display = "flex";
      roundText.style.display = "flex";
      RoundNumberText.innerHTML = "Workout Completed";
      Wized.data.setVariable("complete", "completed");
      enableDisabledStates ()
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

    // Video Condtionals To Change Src When Doing An Amrap
    function videoCheck() {
      let videoCurrentSrc;
      let videos = document.getElementById("video");

      if (Math.floor(videos.currentTime) === Math.floor(videos.duration)) {
        if (
          videoIndex < amrapResponse.data[parseInt(exercisesParam)].Video.length
        ) {
          videoIndex = videoIndex + 1;
          console.log("Current Exercise Index For Video", parseInt(videoIndex));

          videoCurrentSrc =
            amrapResponse.data[parseInt(exercisesParam)].Video[
              parseInt(videoIndex)
            ].url;
          console.log("---------------------------------------");
          console.log(videoCurrentSrc);
          console.log("---------------------------------------");
          console.log("Ran Request Video Src => Updated");

          videos.src = videoCurrentSrc;
          videos.play();
        }
      } else if (
        videoIndex >= amrapResponse.data[parseInt(exercisesParam)].Video.length
      ) {
        videoIndex = 0;
        videoCurrentSrc =
          amrapResponse.data[parseInt(exercisesParam)].Video[
            parseInt(videoIndex)
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
  })

  Wized.request.await("Load Exercise Diff", (response) => { 
    console.log("---------------------------------------");   
    console.log("Exercise Diff Info Response", response);

    exerciseDiffRes = response;
  })

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

    function enableDisabledStates () {
      playButton.style.display = "none";
      playButtonDisabled.style.display = "flex";
      //
      nextButton.style.display = "none";
      nextButtonDisabled.style.display = "flex";
      //
      prevButton.style.display = "none";
      prevButtonDisabled.style.display = "flex";
    } 
    
    
    function enableActiveStates () {
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
    }
    else if (sirenText.innerHTML === "On") {
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
    }
    else if (voiceText.innerHTML === "On") {
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
