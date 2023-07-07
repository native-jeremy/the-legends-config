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

    const snapshot = response.data[0];
    let roundLength = snapshot.Round_Name;
    let richTextRes = snapshot.Equipment_List;
    const richText = document.getElementById("richText");
    let tileList = document.querySelector('.tile-list');
    let tileCreate = `
      <div class="tile style-3">
        <div class="tile-header">
          <div class="tile-header-text">
            <h2 class="generic-text-style-11"></h2>
            <div class="generic-text-style-1"></div>
          </div>
          <div class="toggle-button-trigger">
            <div class="generic-text-style-1"></div>
            <div class="tile-arrow-icon"</div>
        </div>
      </div>
    `

    if (response.status == 200) {
      let tileCreated = tileCreate;
      for (let i = 0; i < roundLength.length; i++) {
        tileList.append(tileCreated[i])
      }

      // Showdown Rich Text Converter
      document.title = snapshot.Name;
      var converter = new showdown.Converter(),
      text = richTextRes,
      html = converter.makeHtml(text);
      richText.innerHTML = html;
    }
    console.log("Workout Res", snapshot);
  });

  Wized.request.await("Load Exercises - OVERVIEW", (response) => {
    let exercises = response;
    console.log("Exercises Res", exercises);
  });

  // Siren & Voice Functionailty Setup
  const sirenCookieInt = await Wized.data.get("c.sirenmute");
  const voiceCookieInt = await Wized.data.get("c.voicemute");

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
  console.log(sirenCookieInt);

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
