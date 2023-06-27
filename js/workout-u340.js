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
//const exerciseChangeTitle = document.getElementById("exerciseChangeTitle");
//const exerciseAmrapTitle = document.querySelectorAll('.amrap-title');

// Element Delarations
const repText = document.getElementById("repText");
const timerText = document.getElementById("safeTimerDisplay");
const currentTest = document.getElementById("current");
const durationTest = document.getElementById("dur");

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
  console.log(exerciseParam);

  //Function Calls Onload
  roundEnableLoad();
  setTimeout(nextPage, 2000);
  sirenEnableLoad();
  voiceEnableLoad();

  // Rep Type Data Load
  Wized.request.await("Load Exercises", (response) => {
    const repDataInt = response;
    let repAmount;
    console.log("Amount: ", repAmount);
    let repType;
    console.log("Rep Type: ", repType);
    let varExeIndex = 0;
    let amrapBool;
    const amrapResponse = response;
    let checkAmrap;
    let tempCookieIndex = 0;
    console.log(repDataInt.data[cookieIndex]);
    console.log("Amrap Response:",amrapResponse);

    let diffStr = currentNum.innerHTML;
    let diffInt = parseInt(diffStr);
    let diffCurrent = diffInt - 1;

      // Diff Increase Click Controls
  plusBtn.addEventListener("click", function () {
    if (amount < maxLimit) {
      diffCurrent++
      amount++;
      currentNum.innerHTML = amount;
    } else {
      currentNum.innerHTML = maxLimit;
    }
    console.log(diffCurrent)
  });

   // Diff Decrease Click Controls
   minusBtn.addEventListener("click", function () {
    if (amount > minLimit) {
      diffCurrent--
      amount--;
      currentNum.innerHTML = amount;
    } else {
      diffCurrent = 0
      amount = minLimit;
    }
    console.log(diffCurrent)
  });

    prevButton.addEventListener("click", function () {
      history.back();
    });

    setInterval(() => { 
      repAmount = repDataInt.data[0].Amounts_Name[diffCurrent];
    }, 0)

    if (
      cookieIndex === "" ||
      cookieIndex === undefined ||
      cookieIndex === "undefined"
    ) {
      repAmount = repDataInt.data[0].Amounts_Name[diffCurrent];
      repType = repDataInt.data[0].Rep_Type[0];
      amrapBool = repDataInt.data[0].Amrap;
    } else {
      repAmount = repDataInt.data[cookieIndex].Amounts_Name[diffCurrent];
      repType = repDataInt.data[cookieIndex].Rep_Type[0];
      amrapBool = repDataInt.data[cookieIndex].Amrap;
    }
    console.log(diffCurrent);
    console.log(amrapBool);
    if(cookieIndex === undefined || cookieIndex === "undefined")
    {
      console.log("Video Array Length:", amrapResponse.data[tempCookieIndex].Video.length);
    }
    else {
      console.log("Video Array Length:", amrapResponse.data[cookieIndex].Video.length);
    }

    if (amrapBool == "True") {
      if(cookieIndex === undefined || cookieIndex === "undefined"){
        checkAmrap = setInterval(videoCheck, 0);
        let newcookieIndex = amrapResponse.data[tempCookieIndex].Video.length;
        Wized.data.setCookie("exerciseindex", newcookieIndex); // c.cookieindex"
        const amrapIndex = Wized.data.get("c.exerciseindex");
        console.log(amrapIndex);
        console.log("Amrap length:", newcookieIndex);
        console.log("Amrap:", amrapResponse.data[tempCookieIndex]);
      }
      else {
        checkAmrap = setInterval(videoCheck, 0);
        let newcookieIndex = amrapResponse.data[cookieIndex].Video.length;
        Wized.data.setCookie("exerciseindex", newcookieIndex); // c.cookieindex"
        const amrapIndex = Wized.data.get("c.exerciseindex");
        console.log(amrapIndex);
        console.log("Amrap length:", newcookieIndex);
        console.log("Amrap:", amrapResponse.data[cookieIndex]);
      }
    } else {
      clearInterval(checkAmrap);
    }

  

    // Enable header to show correctly (if round popup is hidden)
    if (roundPopup.style.display === "none") {
      exerciseHeader.style.display = "flex";
      exerciseHeader.style.opacity = 1;
      exerciseTitle.style.display = "flex";
      exerciseTitle.style.opacity = 1;
    }

    //let counter = repAmount;
    console.log(cookieIndex);

    let clickNum = 0;

    /*
    Round Function
    */

    /*
      End Round Function
    */

    // Play click controls
    playButton.addEventListener("click", function () {
      if (clickNum < 1) {
        playVoice();
        //Conditions
        roundType();
      }
      playVideo();
      clickNum = clickNum + 1;
    });

    function roundType() {
      if (repType === "Time") {
        console.log(repType);
        timer();
      } else if (repType === "Reps") {
        repCount();
      }
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
            console.log("Completed");
          } else {
            console.log("Timer Paused");
          }
        }
      }, 1000);
    }

    function repCount() {
      let counter = repAmount;
      repText.innerHTML = repType;
      timerText.innerHTML = counter;
    }

    function playVideo() {
      let video = document.getElementById("video");
      if (video.paused) {
        video.play();
        playButton.classList.toggle("pause");
        timerText.classList.remove("pausetime");
        console.log(video.duration);
      } else {
        video.pause();
        playButton.classList.toggle("pause");
        timerText.classList.add("pausetime");
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

    function videoCheck() {
      if(cookieIndex === undefined || cookieIndex === "undefined")
      {
        tempCookieIndex = 0;
      }
      else {
        tempCookieIndex = cookieIndex
      }
      let videoCurrentSrc;
      let videos = document.getElementById("video");
      if (Math.floor(videos.currentTime) === Math.floor(videos.duration)) {
        if (varExeIndex < amrapResponse.data[tempCookieIndex].Video.length) {
          varExeIndex = varExeIndex + 1;
          videoCurrentSrc =
            amrapResponse.data[tempCookieIndex].Video[varExeIndex].url;
          console.log(videoCurrentSrc);
          console.log("Ran Request");

          videoChangeSrc();
          console.log(varExeIndex);
        }
      } else if (varExeIndex >= amrapResponse.data[tempCookieIndex].Video.length) {
        varExeIndex = 0;
        videoCurrentSrc =
          amrapResponse.data[cookieIndex].Video[varExeIndex].url;
        console.log(videoCurrentSrc);
        console.log("Ran Request");

        videoChangeSrc();
        console.log(varExeIndex);
      }

      function videoChangeSrc() {
        videos.src = videoCurrentSrc;
        videos.play();
      }
    }
  });

  // Siren Click Controls
  siren.addEventListener("click", function () {
    sirenEnableClick();
  });

  // Voice Click Controls
  voice.addEventListener("click", function () {
    voiceEnableClick();
  });

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
    }

    if (roundParam === undefined || roundParam === "undefined") {
      playButton.style.display = "none";
      playButtonDisabled.style.display = "flex";
      //
      nextButton.style.display = "none";
      nextButtonDisabled.style.display = "flex";
      //
      prevButton.style.display = "none";
      prevButtonDisabled.style.display = "flex";
    } else {
      playButton.style.display = "flex";
      playButtonDisabled.style.display = "none";
      //
      nextButton.style.display = "flex";
      nextButtonDisabled.style.display = "none";
      //
      prevButton.style.display = "flex";
      prevButtonDisabled.style.display = "none";
    }
  }

  function autoPlayVideo() {
    playButton.click();
  }

  function nextPage() {
    if (
      exerciseParam === undefined || exerciseParam === "undefined") {
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
    const sirenMuteCookie = Wized.data.get("c.sirenmute");
    console.log("mute cookie changed to: ", sirenMuteCookie);
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
    const voiceMuteCookie = Wized.data.get("c.voicemute");
    console.log("mute cookie changed to: ", voiceMuteCookie);
  }

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

  // ID click history replaced
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
