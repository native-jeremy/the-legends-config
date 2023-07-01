/* Define - Intialisation - Elements Retrieved
----------------------------------------------------------------
*/

//Element Triggers
const exerciseTitle = document.getElementById("exerciseTitle");
const exerciseHeader = document.getElementById("exerciseHeader");
const roundPopup = document.getElementById("roundPopup");
const roundTitle = document.getElementById("roundTitle");
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
let maxLimit = 5;
let minLimit = 1;
let amount = 1;
currentNum.innerHTML = amount;
limitNum.innerHTML = maxLimit;

let refreshNum = 0;

/* Wized Intialisation
----------------------------------------------------------------
*/

// [- Step 1 -] Window Load Async Function To Intialise Wized - Asap = Aysnc
window.onload = async () => {
  //const roundIndex = await Wized.data.get("c.roundindex");
  const cookieIndex = await Wized.data.get("c.cookieindex");
  const dataIndex = await Wized.data.get("v.dataindex");
  const exerciseIndex = await Wized.data.get("c.exerciseindex");
  const exerciseParam = await Wized.data.get("n.parameter.exercise");
  const exercisesParam = await Wized.data.get("n.parameter.exercises");
  const roundParam = await Wized.data.get("n.parameter.round");
  const workoutParam = await Wized.data.get("n.parameter.workout");
  const sirenCookieInt = await Wized.data.get("c.sirenmute");
  const voiceCookieInt = await Wized.data.get("c.voicemute");

  roundPopup.style.display = "flex";

  // URL Searching Setup and Declaration
  let activeParam = document.getElementById("activeParam");
  let params = window.location.href;
  let url = new URL(params);
  let checkurl = url.searchParams;
  //setIntRoundNum = checkurl.set("round", "1");
  //setIntExercisesNum = checkurl.set("exercises", "0");
  //setIntExerciseNum = checkurl.set("exercise", "0");
  window.history.replaceState(null, null, url.toString());

  enableDisabledStates ()

  Wized.request.await("Load Round Base", (response) => {
    console.log("---------------------------------------");    
    console.log("All Rounds In Exercise",response); // Log request response  
})

  //const roundParamIndex = await Wized.data.get("n.parameter.ri");
  //const exercisesParamIndex = await Wized.data.get("n.parameter.esi");
  //const exerciseParamIndex = await Wized.data.get("n.parameter.ei");

  // [- Step 2 -] Exercises Request Response From Wized
  Wized.request.await("Load Exercises", (response) => {
    const repDataInt = response;
    let repAmount;
    let repType;
    let newcookieIndex;
    let amrapBool;
    const amrapResponse = response;
    let checkAmrap;

    let exerciseData = repDataInt.data[parseInt(exercisesParam)];

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

    let diffStr = currentNum.innerHTML;
    let diffInt = parseInt(diffStr);
    let diffCurrent = diffInt - 1;
    let vidSrc = document.getElementById("video");
    let videoIndex = parseInt(exerciseParam);

    if (exerciseData !== undefined) {
      vidSrc.src = repDataInt.data[parseInt(exercisesParam)].Video[0].url;
      //let roundLength = amrapResponse.data[parseInt(exerciseParam)].Video.length
      let exercisesLength =
        amrapResponse.data[parseInt(exercisesParam)].Exercise_Selection.length;
      let roundLength = repDataInt.data.length;

      /*async () => {  
        await Wized.request.await("Audio"); // Trigger request  
        const response = await Wized.data.get("r.3.d"); // Get request response  
        console.log("Audio Response", response); // Console log received request data
    };*/

      let clearStates = setTimeout (() => {
        enableActiveStates ()
        clearTimeout(clearStates)
      }, 1500);

      console.log("---------------------------------------");
      console.log(exercisesLength);
      console.log("---------------------------------------");
      console.log("Round Length", roundLength);
      RoundNumberText.innerHTML = parseInt(exercisesParam) + 1;


      let roundActiveName = amrapResponse.data[parseInt(exercisesParam)].Round_Name[0];
      /*let roundStartName = amrapResponse.data[0].Round_Name[0];

      if (roundActiveName !== roundStartName) {
        //if (parseInt(exercisesParam) > exercisesLength) {
        getRoundNum = checkurl.get("round");
        getRoundNum = parseInt(getRoundNum) + 1;
        setRoundNum = checkurl.set("round", getRoundNum.toString());
        //}

        //window.location.href = url.toString();
      }*/

      console.log("---------------------------------------");
      console.log("Rounds", amrapResponse.data[parseInt(exercisesParam)].Round_Name[0]);

      // Diff Increase Click Controls
      plusBtn.addEventListener("click", function () {
        if (amount < maxLimit) {
          diffCurrent++;
          amount++;
          currentNum.innerHTML = amount;
        } else {
          currentNum.innerHTML = maxLimit;
        }
        console.log(diffCurrent);
      });

      // Diff Decrease Click Controls
      minusBtn.addEventListener("click", function () {
        if (amount > minLimit) {
          diffCurrent--;
          amount--;
          currentNum.innerHTML = amount;
        } else {
          diffCurrent = 0;
          amount = minLimit;
        }
        console.log(diffCurrent);
      });

      /* WORK IN PROGRESS CODE Thursday 29th June 2023 
    New DEVELOPMENT Parameter setup for indexing using ("Query String")*/

      repAmount =
        repDataInt.data[parseInt(exercisesParam)].Amounts_Name[diffCurrent];
      repType = repDataInt.data[parseInt(exercisesParam)].Rep_Type[0];
      amrapBool = repDataInt.data[parseInt(exercisesParam)].Amrap;

      console.log("---------------------------------------");
      console.log("Amount: ", repAmount);
      console.log("---------------------------------------");
      console.log("Rep Type: ", repType);
      console.log("---------------------------------------");

      console.log("Current Difficulty:", diffCurrent);
      console.log("---------------------------------------");
      console.log("Is The Selected Exercise An Amrap:", amrapBool);

      nextButton.addEventListener("click", function () {
        updateParamForVideo();
        /*getExercisesNum = checkurl.get("exercises");
      getExercisesNum = parseInt(getExercisesNum) + 1;
      setExercisesNum = checkurl.set("exercises", getExercisesNum.toString());
      //window.history.replaceState(null, null, url.toString());
      window.location.href = url.toString();
      checkParam()*/

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
        backParamForVideo();
        /*getExercisesNum = checkurl.get("exercises");
      getExercisesNum = parseInt(getExercisesNum) - 1;
      setExercisesNum = checkurl.set("exercises", getExercisesNum.toString());
      window.history.replaceState(null, null, url.toString());
      checkParam()*/

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

      function updateParamForVideo() {
        //if (parseInt(exercisesParam) > exercisesLength) {
        getExercisesNum = checkurl.get("exercises");
        getExercisesNum = parseInt(getExercisesNum) + 1;
        setExercisesNum = checkurl.set("exercises", getExercisesNum.toString());
        getRoundNum = checkurl.get("round");
        getRoundNum = roundActiveName; 
        setRoundNum = checkurl.set("round", getRoundNum);
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

      function backParamForVideo() {
        //if (parseInt(exercisesParam) > exercisesLength) {
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

      function checkParam() {
        if (checkurl.get("exercise") === "3") {
          activeParam.innerHTML = checkurl.get("exercise");
        } else {
          activeParam.innerHTML = "Audio Settings";
        }
      }

      // Amrap Condtionals To Check If True/False
      if (amrapBool == "True") {
        checkAmrap = setInterval(videoCheck, 25);
        newcookieIndex =
          amrapResponse.data[parseInt(exercisesParam)].Video.length;
        console.log("Amrap length:", newcookieIndex);
      } else {
        clearInterval(checkAmrap);
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

      /* Enable header to show correctly (if round popup is hidden)
        if (roundPopup.style.display === "none") {
          exerciseHeader.style.display = "flex";
          exerciseHeader.style.opacity = 1;
          exerciseTitle.style.display = "flex";
          exerciseTitle.style.opacity = 1;
        }*/

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
    } else {
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
          } /*else {
            console.log("---------------------------------------");
            console.log("Timer Paused");
          }*/
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

          /*getExercisesNum = checkurl.get("exercise");
          getExerciseNum = parseInt(getExerciseNum) + 1;
          setExerciseNum = checkurl.set("exercise", getExerciseNum.toString());*/
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
        /*getExercisesNum = checkurl.get("exercise");
        getExerciseNum = 0;
        setExerciseNum = checkurl.set("exercise", getExerciseNum.toString());*/

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

  /* Round Condtionals To Enable Popup
  function roundEnableLoad() {
    // Round check (if round popup needs to show)
    if (cookieIndex === undefined || cookieIndex === "undefined") {
      exerciseHeader.style.display = "none";
      exerciseTitle.style.display = "none";
      roundPopup.style.display = "flex";
      roundText.style.display = "flex";
    } else {
      exerciseHeader.style.display = "flex";
      exerciseTitle.style.display = "flex";
      roundPopup.style.display = "none";
      roundText.style.display = "none";
      setTimeout(autoPlayVideo, 2000);
    }

    if (
      cookieIndex === 0 ||
      exerciseParam === undefined ||
      exerciseParam === "undefined"
    ) {
      exerciseHeader.style.display = "none";
      roundPopup.style.display = "flex";
      roundText.style.display = "flex";
      exerciseTitle.style.display = "none";
    } else {
      exerciseHeader.style.display = "flex";
      roundPopup.style.display = "none";
      roundText.style.display = "none";
      exerciseTitle.style.display = "none";
    }

    if (exerciseParam === undefined || exerciseParam === "undefined") {
      playButton.style.display = "none";
      playButtonDisabled.style.display = "flex";
      //
      nextButton.style.display = "none";
      nextButtonDisabled.style.display = "flex";
      //
      prevButton.style.display = "none";
      prevButtonDisabled.style.display = "flex";
      //
    } else {
      playButton.style.display = "flex";
      playButtonDisabled.style.display = "none";
      //
      nextButton.style.display = "flex";
      nextButtonDisabled.style.display = "none";
      //
      prevButton.style.display = "flex";
      prevButtonDisabled.style.display = "none";
    }*/

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
    } else if (sirenText.innerHTML === "On") {
      Wized.data.setCookie("sirenmute", "muted");
      sirenText.innerHTML = "Off";
      sirenToggleOn.classList.toggle("on");
    }

    // Development Purposes (DEBUGGING)
    const sirenMuteCookie = Wized.data.get("c.sirenmute");
    console.log("---------------------------------------");
    console.log("mute cookie changed to: ", sirenMuteCookie);
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
    const voiceMuteCookie = Wized.data.get("c.voicemute");
    console.log("---------------------------------------");
    console.log("mute cookie changed to: ", voiceMuteCookie);
    console.log("---------------------------------------");
  }

  // Siren Condtionals On Page Load On/Off
  function sirenEnableLoad() {
    // Siren Cookie Condition
    if (sirenCookieInt === "undefined" || sirenCookieInt === undefined) {
      Wized.data.setCookie("sirenmute", "on");
      sirenText.innerHTML = "On";
      sirenToggleOn.classList.toggle("on");
    } else {
      if (sirenCookieInt === "On") {
        Wized.data.setCookie("sirenmute", "muted");
        sirenText.innerHTML = "Off";
        sirenToggleOn.classList.toggle("on");
      } else {
        Wized.data.setCookie("sirenmute", "on");
        sirenText.innerHTML = "On";
        sirenToggleOn.classList.toggle("on");
      }
    }
  }

  // Voice Condtionals On Page Load On/Off
  function voiceEnableLoad() {
    // Voice Cookie Condition
    if (voiceCookieInt === "undefined" || voiceCookieInt === undefined) {
      Wized.data.setCookie("voicemute", "on");
      voiceText.innerHTML = "On";
      voiceToggleOn.classList.toggle("on");
    } else {
      if (voiceCookieInt === "On") {
        Wized.data.setCookie("voicemute", "muted");
        voiceText.innerHTML = "Off";
        voiceToggleOn.classList.toggle("on");
      } else {
        Wized.data.setCookie("voicemute", "on");
        voiceText.innerHTML = "On";
        voiceToggleOn.classList.toggle("on");
      }
    }
  }

  /*function sirenEnableLoad() {
    // Siren Cookie Condition
    if (sirenCookieInt === "undefined" || sirenCookieInt === undefined) {
      Wized.data.setCookie("sirenmute", "on");
      sirenText.innerHTML = "On";
      sirenToggleOn.classList.toggle("on");
    } else {
      if (sirenCookieInt === "On") {
        Wized.data.setCookie("sirenmute", "muted");
        sirenText.innerHTML = "Off";
        sirenToggleOn.classList.toggle("on");
      } else {
        Wized.data.setCookie("sirenmute", "on");
        sirenText.innerHTML = "On";
        sirenToggleOn.classList.toggle("on");
      }
    }
  }

  function voiceEnableLoad() {
    // Voice Cookie Condition
    if (voiceCookieInt === "undefined" || voiceCookieInt === undefined) {
      Wized.data.setCookie("voicemute", "on");
      voiceText.innerHTML = "On";
      voiceToggleOn.classList.toggle("on");
    } else {
      if (voiceCookieInt === "On") {
        Wized.data.setCookie("voicemute", "muted");
        voiceText.innerHTML = "Off";
        voiceToggleOn.classList.toggle("on");
      } else {
        Wized.data.setCookie("voicemute", "on");
        voiceText.innerHTML = "On";
        voiceToggleOn.classList.toggle("on");
      }
    }
  }*/

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
