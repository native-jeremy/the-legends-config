/* Define - Intialisation - Elements Retrieved
----------------------------------------------------------------
*/

//Element Triggers
const exerciseTitle = document.getElementById("exerciseTitle");
const exerciseHeader = document.getElementById("exerciseHeader");
const roundPopup = document.getElementById("roundPopup");
const roundTitle = document.getElementById("roundTitle");
const roundText = document.getElementById("roundText");

// Element Delarations
const repText = document.getElementById("repText");
const timerText = document.getElementById("safeTimerDisplay");

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
  //await Wized.data.setVariable("complete", minusBtn);
  //const value = await Wized.data.get("v.complete");
  const cookieIndex = await Wized.data.get("c.cookieindex");
  const exerciseParam = await Wized.data.get("n.parameter.exercise");
  const roundParam = await Wized.data.get("n.parameter.round");
  const sirenCookieInt = await Wized.data.get("c.sirenmute");
  const voiceCookieInt = await Wized.data.get("c.voicemute");
  console.log(exerciseParam);

  // Rep Type Data Load
  Wized.request.await("Load Exercises", (response) => {
    const repDataInt = response;
    const repAmount = repDataInt.data[0].Amounts_Name[0];
    console.log("Amount: ", repAmount);
    const repType = repDataInt.data[0].Rep_Type[0];
    console.log("Rep Type: ", repType);
    const dataResponse = Wized.data.get("v.response");
    console.log(dataResponse)


    // Enable header to show correctly (if round popup is hidden)
    if (roundPopup.style.display === "none")
    {
    exerciseHeader.style.display = "flex";
    exerciseHeader.style.opacity = 1;
    exerciseTitle.style.display = "flex";
    exerciseTitle.style.opacity = 1;
    }
    
    //let counter = repAmount;
    console.log(cookieIndex);
    
    let clickNum = 0;

    prevButton.addEventListener("click", function(){
    	history.back()
    });


    /*
    Round Function
    */

    function roundType()
    {
      if (repType === "Time") {
        console.log(repType);
        timer();
      }
      else
      {
        repCount();
      }
    }


    /*
      End Round Function
    */  

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
    
    function autoPlayVideo ()
    {
      playButton.click();
    }

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


    // Timer setup function
    function timer() {
      let counter = repAmount;
      repText.innerHTML = repType;
      let timer = setInterval(function () {
        timerText.innerHTML = counter + ".00";
        if (!timerText.classList.contains("pausetime"))
        {
          counter--;
          if (counter < 0) {
            playSiren();
            nextButton.click();
            clearInterval(timer);
            console.log("Completed");
          }
          else {
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
        video.play()
        playButton.classList.toggle("pause")
        timerText.classList.remove("pausetime");
      }
      else {
        video.pause()
        playButton.classList.toggle("pause")
        timerText.classList.add("pausetime");
      }
    }

    function playSiren() {
      let sirenSrc = document.getElementById("sirenSrc");
      if (sirenSrc.paused) {
          sirenSrc.play()
      }
      else {
        sirenSrc.pause()
      }
    }
    function playVoice() {
      let voiceSrc = document.getElementById("voiceSrc");
      if (voiceSrc.paused) {
          voiceSrc.play()
      }
      else {
        voiceSrc.pause()
      }
    }
  });

  if (cookieIndex === 0 || exerciseParam === undefined || exerciseParam === "undefined") {
    exerciseHeader.style.display = "none";
    roundPopup.style.display = "flex";
    roundText.style.display = "flex";
    exerciseTitle.style.display = "none";
  }
  else {
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
  }
  else {
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
  }
  else {
    playButton.style.display = "flex";
    playButtonDisabled.style.display = "none";
    //
    nextButton.style.display = "flex";
    nextButtonDisabled.style.display = "none";
    //
    prevButton.style.display = "flex";
    prevButtonDisabled.style.display = "none";
  }

  //setTimeout(nextPage, 2000);
    
  function nextPage ()
  {
    if (exerciseParam === undefined || exerciseParam === "undefined" && cookieIndex !== "completed=true") {
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

  if (sirenCookieInt === "undefined" || sirenCookieInt === undefined) {
    Wized.data.setCookie("sirenmute", "on");
    sirenText.innerHTML = "On";
    sirenToggleOn.classList.toggle("on");
  } 
  else 
  {
      if (sirenCookieInt === "On")
      {
        Wized.data.setCookie("sirenmute", "muted");
        sirenText.innerHTML = "Off";
        sirenToggleOn.classList.toggle("on");
      }
      else
      {
        Wized.data.setCookie("sirenmute", "on");
        sirenText.innerHTML = "On";
        sirenToggleOn.classList.toggle("on");
      }
  }
  console.log(sirenCookieInt)

  if (voiceCookieInt === "undefined" || voiceCookieInt === undefined) {
    Wized.data.setCookie("voicemute", "on");
    voiceText.innerHTML = "On";
    voiceToggleOn.classList.toggle("on");
  } 
  else 
  {
      if (voiceCookieInt === "On")
      {
        Wized.data.setCookie("voicemute", "muted");
        voiceText.innerHTML = "Off";
        voiceToggleOn.classList.toggle("on");
      }
      else 
      {
        Wized.data.setCookie("voicemute", "on");
        voiceText.innerHTML = "On";
        voiceToggleOn.classList.toggle("on");
      }
  }

  // Siren click controls
  siren.addEventListener("click", function () {
    if (sirenText.innerHTML === "Off") {
      Wized.data.setCookie("sirenmute", "on");
      sirenText.innerHTML = "On";
      sirenToggleOn.classList.toggle("on");
    } else if (sirenText.innerHTML === "On") {
      Wized.data.setCookie("sirenmute", "muted");
      sirenText.innerHTML = "Off";
      sirenToggleOn.classList.toggle("on");
    }
    const sirenMuteCookie = Wized.data.get("c.sirenmute");
    console.log("mute cookie changed to: ", sirenMuteCookie);
  });

  // Voice click controls
  voice.addEventListener("click", function () {
    if (voiceText.innerHTML === "Off") {
      Wized.data.setCookie("voicemute", "on");
      voiceText.innerHTML = "On";
      voiceToggleOn.classList.toggle("on");
    } else if (voiceText.innerHTML === "On") {
      Wized.data.setCookie("voicemute", "muted");
      voiceText.innerHTML = "Off";
      voiceToggleOn.classList.toggle("on");
    }
    const voiceMuteCookie = Wized.data.get("c.voicemute");
    console.log("mute cookie changed to: ", voiceMuteCookie);
  });

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

  // Decrease diff button
  minusBtn.addEventListener("click", function () {
    if (amount > minLimit) {
      amount--;
      currentNum.innerHTML = amount;
    } else {
      amount = minLimit;
    }
  });

  // Increase diff button
  plusBtn.addEventListener("click", function () {
    if (amount < maxLimit) {
      amount++;
      currentNum.innerHTML = amount;
    } else {
      currentNum.innerHTML = maxLimit;
    }
  });
};
