/* Define - Intialisation - Elements Retreived
----------------------------------------------------------------
*/

//Element Triggers

// Siren = Define - Intialisation
//const activeSiren = document.getElementById("activeSiren");
const siren = document.getElementById("siren");
const sirenText = document.getElementById("sirenText");
const sirenAudio = document.getElementById("sirenAudio");
const sirenToggleOn = document.getElementById("sirenToggleOn");

// Voice = Define - Intialisation
//const activeVoice = document.getElementById("activeVoice");
const voice = document.getElementById("voice");
const voiceText = document.getElementById("voiceText");
const voiceAudio = document.getElementById("voiceAudio");
const voiceToggleOn = document.getElementById("voiceToggleOn");

/* Wized Intialisation
----------------------------------------------------------------
*/

window.onload = async () => {
  Wized.request.await("Load Workout - OVERVIEW", (response) => {
    const snapshot = response.data;
    let richTextRes = snapshot.Equipment_List;
    const richText = document.getElementById("richText");

    if (response.status == 200) {
      // Showdown Rich Text Converter
      document.title = snapshot.Name;
      var converter = new showdown.Converter(),
        text = richTextRes,
        html = converter.makeHtml(text);
      richText.innerHTML = html;
    }
    console.log("Workout Res", snapshot);
  });

  window.onload = async () => {  
    Wized.request.await("Load Round Info", (response) => {
        console.log("Rounds", response);
        const rounds = response.data;
        rounds.forEach((currentRound, index) => {
            currentRound.Rep_Type_Linked_Exercises.forEach((amount, index) => {
                if(amount == "Time")
                {
                    setTimeout(() => {
                        const timeConvert = document.querySelectorAll('.convert_time');
                        timeConvert.forEach(time => {
                         if(parseInt(time.textContent) < 60)
                         {   time.textContent = time.textContent + " seconds";
                             console.log("Standard Time Not Over 60 seconds", time.textContent);
                         }
                         else {
                             let timer = parseInt(time.textContent)
                             let = convertedTime = Math.floor(timer/ 60)
                             let extraSeconds = timer % 60;
                             if(!extraSeconds > 0)
                             {
                                 time.textContent = convertedTime + " minutes";
                             }
                             else {
                                 time.textContent = convertedTime + " minutes " + extraSeconds + " seconds";
                             }
                             console.log("Correct Converted Time", convertedTime + " minutes " + extraSeconds + " seconds");
                         }
                        });
                     }, 1000);
                }
                else {
                    time.textContent = time.textContent + " Reps";
                    console.log("Reps", time.textContent);
                }
            });
        });
        console.log(response); // Log request response  
    })
};

  // Siren & Voice Functionailty Setup
  const sirenCookieInt = await Wized.data.get("c.sirenmute");
  const voiceCookieInt = await Wized.data.get("c.voicemute");

  sirenEnableLoad();
  voiceEnableLoad();

  siren.addEventListener("click", sirenEnableClick);
  voice.addEventListener("click", voiceEnableClick);

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
};

/*if (
  window.location.href ==
  "https://the-legends-web-app.webflow.io/workout-overview"
) {
  window.location.href = "/program-hub";
}*/
