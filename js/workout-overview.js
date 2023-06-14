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
  const sirenCookieInt = await Wized.data.get("c.sirenmute");
  const voiceCookieInt = await Wized.data.get("c.voicemute");
  
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

  };