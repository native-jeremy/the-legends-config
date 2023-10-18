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

// Element Declarations
const repText = document.getElementById("repText");
const timerText = document.getElementById("safeTimerDisplay");
const currentTest = document.getElementById("current");
const durationTest = document.getElementById("dur");
const RoundNumberText = document.getElementById("mainNumText");
const progressEl = document.querySelector(".wheel");
let loader = document.getElementById("loader");
const returnMessage = document.getElementById("return");

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
let minutes;
let seconds;

const workoutExitButton = document.getElementById("workoutExit");

const siren = document.getElementById("siren");
const sirenText = document.getElementById("sirenText");
const sirenAudio = document.getElementById("sirenAudio");
const sirenToggleOn = document.getElementById("sirenToggleOn");

const voice = document.getElementById("voice");
const voiceText = document.getElementById("voiceText");
const voiceAudio = document.getElementById("voiceAudio");
const voiceToggleOn = document.getElementById("voiceToggleOn");

const playButton = document.getElementById("playButton");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const backButton = document.getElementById("backButton");

const playButtonDisabled = document.getElementById("playButtonDisabled");
const nextButtonDisabled = document.getElementById("nextButtonDisabled");
const prevButtonDisabled = document.getElementById("prevButtonDisabled");

const minusBtn = document.getElementById("minusBtn");
const currentNum = document.getElementById("currentNum");
const limitNum = document.getElementById("limitNum");
const plusBtn = document.getElementById("plusBtn");
let maxLimit;
let minLimit = 0;
let amount = 0;
currentNum.innerHTML = amount;

let refreshNum = 0;

window.onload = async () => {
  const exercisesParam = await Wized.data.get("n.parameter.exercises");
  const recoveryParam = await Wized.data.get("n.parameter.recovery");
  const sirenCookieInt = await Wized.data.get("c.sirenmute");
  const voiceCookieInt = await Wized.data.get("c.voicemute");

  let params = window.location.href;
  let url = new URL(params);
  let checkurl = url.searchParams;

  let recoveryData;

  window.history.replaceState(null, null, url.toString());

  enableDisabledStates();

  /*if (parseInt(roundParam) < 0 && parseInt(exercisesParam) === 0) {
    roundPopup.style.display = "flex";
    roundText.style.display = "flex";
    RoundNumberText.innerHTML = "Redirecting..";
    enableDisabledStates();
    window.location.href = "/recovery-overview?recovery=" + recoveryParam;
  } else if (
    window.location.href == "https://the-legends-web-app.webflow.io/recovery"
  ) {
    roundPopup.style.display = "flex";
    roundText.style.display = "flex";
    RoundNumberText.innerHTML = "Redirecting..";
    enableDisabledStates();
    window.location.href = "/program-hub";
  }*/

  /*if (parseInt(roundLengthCookie) === parseInt(roundParam))
  {
    RoundNumberText.innerHTML = "Workout Completed";
    roundTitle.innerHTML = "Congratulations!";
    roundNumHeader.innerHTML = "";
    Wized.data.setVariable("complete", "completed");
    returnMessage.click();
    roundPopup.style.display = "flex";
    roundText.style.display = "flex";
  }*/

  Wized.request.await("Load Audio - Recovery", (response) => {
    console.log("Audio Response", response);

    audioRes = response;
  });

  Wized.request.await("Load Round Info - Recovery",(response, exerciseDiffRes) => {
      const dataSrc = response.data[parseInt(exercisesParam)];
      const mainResponse = response;
      const repDataInt = response;
      let repAmount;
      let repType;
      const singleTitle = document.getElementById("single-title");
      singleTitle.textContent = dataSrc.Exercise_Category[0];

      if (repDataInt.status === 200) {
        loaderTrigger.click();
        videoContainer.style.opacity = "1";
      }
      //----------------------------------------------------------------
      /*if (parseInt(exercisesParam) < 0) {
      getRoundNum = checkurl.get("round");
      getRoundNum = parseInt(getRoundNum) - 1;
      setRoundNum = checkurl.set("round", getRoundNum.toString());
      getExercisesNum = checkurl.get("exercises");
      getExercisesNum = 0;
      setExercisesNum = checkurl.set("exercises", getExercisesNum.toString());

      window.location.href = url.toString();
    }

    if (parseInt(exercisesParam) > mainResponse.data[parseInt(roundParam)].Diff_ID_Linked_Exercises.length - 1) {
      getRoundNum = checkurl.get("round");
      getRoundNum = parseInt(getRoundNum) + 1;
      setRoundNum = checkurl.set("round", getRoundNum.toString());
      getExercisesNum = checkurl.get("exercises");
      getExercisesNum = 0;
      setExercisesNum = checkurl.set("exercises", getExercisesNum.toString());

      window.location.href = url.toString();
    }
    
     else if (parseInt(roundParam) !== 0) {
      RoundNumberText.innerHTML = parseInt(roundParam);
      roundNumHeader.innerHTML = parseInt(roundParam);
    } else if (parseInt(roundParam) === 0 && roundSelected !== "Round 0"){
      RoundNumberText.innerHTML = parseInt(roundParam + 1);
      roundNumHeader.innerHTML = parseInt(roundParam + 1);
    }

    roundLength = roundRes.data.length;
    roundRealNumber = parseInt(roundParam) + 1;

    if (parseInt(exercisesParam) !== 0 ) {
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
    } else if (parseInt(roundParam) === 0 && roundSelected !== "Round 0"){
      RoundNumberText.innerHTML = parseInt(roundParam + 1);
      roundNumHeader.innerHTML = parseInt(roundParam + 1);
    }
    else if (parseInt(roundParam) === 0 && roundSelected === "Round 0"){
      RoundNumberText.innerHTML = "Warm Up";
      roundTitle.innerHTML = "";
      roundNumHeader.innerHTML = "";
    }*/

      //----------------------------------------------------------------
      // NEW CODE WEDNESDAY 18 OCT 2023

      console.log("---------------------------------------");
      console.log("All Rounds:", dataSrc);
      console.log("---------------------------------------");
      console.log("---------------------------------------");

      let audioSrc = document.getElementById("voiceSrc");
      let vidSrc = document.getElementById("video");

      //if (exerciseData !== undefined) {
      repAmount = dataSrc.Exercise_Amount[0];
      repType = dataSrc.Rep_Type[0];

      timerConversion(repAmount);

      function timerConversion(time) {
        minutes = Math.floor(time / 60);
        seconds = time % 60;
      }

      let defaultDiff = 1;
      diffCurrent = defaultDiff - 1;
      currentNum.innerHTML = defaultDiff;

      diffLength = dataSrc.Diff_Video.length;
      maxLimit = diffLength;
      limitNum.innerHTML = maxLimit;

      vidSrc.src = dataSrc.Diff_Video[0].url;
        plusBtn.addEventListener("click", function () {
          if (diffCurrent + 1 < maxLimit) {
            diffCurrent++;
            amount++;
            localStorage.setItem("diffStart", diffCurrent);
            currentNum.innerHTML = diffCurrent + 1;
            enableDisabledStates();
            playVideoDiff();
            vidSrc.src = dataSrc.Diff_Video[diffCurrent].url;
            setTimeout(enableActiveStates, 1500);
            setTimeout(autoPlayVideo, 2000);
          } else {
            return false;
          }
        });

        // Diff Decrease Click Controls - Single Exercise
        minusBtn.addEventListener("click", function () {
          if (diffCurrent > minLimit) {
            diffCurrent--;
            amount--;
            localStorage.setItem("diffStart", diffCurrent);
            currentNum.innerHTML = diffCurrent + 1;
            enableDisabledStates();
            playVideoDiff();
            vidSrc.src = dataSrc.Diff_Video[diffCurrent].url;
            setTimeout(enableActiveStates, 1500);
            setTimeout(autoPlayVideo, 2000);
          } else {
            return false;
          }
        });

      audioSrc.src = dataSrc.Audio_Source[0].url;

      let clearStates = setTimeout(() => {
        enableActiveStates();
        clearTimeout(clearStates);
      }, 1500);

      nextButton.addEventListener("click", updateParams);

      prevButton.addEventListener("click", backTrackParams);

      workoutExitButton.addEventListener("click", exitParams);

      function exitParams() {
        workoutExitButton.href = "/recovery-overview?recovery=" + workoutParam;
      }

      function updateParams() {
        getExercisesNum = checkurl.get("exercises");
        getExercisesNum = parseInt(getExercisesNum) + 1;
        setExercisesNum = checkurl.set("exercises", getExercisesNum.toString());
        window.location.href = url.toString();
      }

      function backTrackParams() {
        if (
          parseInt(exercisesParam) <
          mainResponse.data[parseInt(roundParam)].Diff_ID_Linked_Exercises
            .length -
            1
        ) {
          getExercisesNum = checkurl.get("exercises");
          getExercisesNum = parseInt(getExercisesNum) - 1;
          setExercisesNum = checkurl.set(
            "exercises",
            getExercisesNum.toString()
          );
        }
        window.location.href = url.toString();
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

      playButton.addEventListener("click", function () {
        if (clickNum < 1) {
          playVoice();
          //Conditions
          roundType();
        }
        vidSrc.play();
        playVideo(vidSrc);
        clickNum = clickNum + 1;
      });
      //}

      function roundType() {
        if (repType === "Time") {
          timer();
        } else if (repType === "Reps") {
          repCount();
        }
        console.log("---------------------------------------");
        console.log(repType, "Applied To The Exercise");
      }

      function timer() {
        let counter = repAmount;
        let percentage = (counter / 100) * 100;
        repText.innerHTML = repType;
        setProgress(percentage);
        let timer = setInterval(function () {
          timerConversion(counter);
          timerText.innerHTML = minutes + ":" + seconds;
          if (!timerText.classList.contains("pausetime")) {
            counter--;
            setProgress(counter);
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

      function setProgress(percent) {
        let progress = document.querySelector(".progressWheel");
        let radius = progress.r.baseVal.value;
        let circumference = radius * 2 * Math.PI;
        progress.style.strokeDasharray = circumference;
        progress.style.strokeDashoffset =
          circumference - (percent / 100) * circumference;
      }

      function repCount() {
        progressEl.style.display = "none";
        let counter = repAmount;
        repText.innerHTML = repType;
        timerText.innerHTML = counter;
      }

      function playVideo(video) {
        //let video = document.getElementById("video");
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

      function playSiren() {
        let sirenSrc = document.getElementById("sirenSrc");
        if (sirenSrc.paused) {
          sirenSrc.play();
        } else {
          sirenSrc.pause();
        }
      }

      function playVoice() {
        let voiceSrc = document.getElementById("voiceSrc");
        if (voiceSrc.paused) {
          voiceSrc.play();
        } else {
          voiceSrc.pause();
        }
      }
    }
  );

  //roundEnableLoad();
  //setTimeout(nextPage, 2000);
  sirenEnableLoad();
  voiceEnableLoad();

  siren.addEventListener("click", function () {
    sirenEnableClick();
  });

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
    progressEl.style.display = "none";
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
    progressEl.style.display = "flex";
  }

  function autoPlayVideo() {
    playButton.click();
  }

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
