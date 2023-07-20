window.onload = async () => {
  Wized.request.await("Load Users", (response) => {
    const userData = response;
    console.log("User Data ", userData);

    //Async function for grabbing the Questionnaire response
    async function loadData() {
      Wized.request.await("Load Questionnaire", (response) => {
        const questionnaire = response;
        console.log("Questionnaire Data ", questionnaire);

        const question2 = questionnaire.data[0].Question2;

        const dynamicFields = document.getElementById('dynamicFields_Q1');
        for (let i = 0; i < question2.length; i++) {

            const value = question2[i];
            console.log("Value ", value);

            const inputField = document.createElement('label')
            inputField.classList.add('input_field');
            let radio = document.createElement("input");
            radio.classList.add('input');
            radio.setAttribute("type", "radio");
            radio.setAttribute("id", "radio" + i);
            radio.setAttribute("name", "Age Group");
            radio.setAttribute("value", value);
            radio.setAttribute("w-el", "Q_question_2_dynamic");
            //checkbox.setAttribute("checked", "checked");

            let label = document.createElement("span");
            label.classList.add('label');
            label.setAttribute("for",  + i);
            label.textContent =  value;

            dynamicFields.appendChild(inputField);
            inputField.append(radio);
            inputField.append(label);
        }
      });
    }
    loadData();
  });
};

$(document).ready(function () {
  // get the anchor link buttons
  const menuBtn = $(".button-style-4");
  const menuBtn2 = $(".button-style-2");
  const iconBtn = $(".form-indicator-icon");
  // when each button is clicked
  menuBtn.click(() => {
    // set a short timeout before taking action
    // so as to allow hash to be set
    setTimeout(() => {
      // call removeHash function after set timeout
      removeHash();
    }, 0);
  });

  menuBtn2.click(() => {
    // set a short timeout before taking action
    // so as to allow hash to be set
    setTimeout(() => {
      // call removeHash function after set timeout
      removeHash();
    }, 0); // 5 millisecond timeout in this case
  });

  iconBtn.click(() => {
    // set a short timeout before taking action
    // so as to allow hash to be set
    setTimeout(() => {
      // call removeHash function after set timeout
      removeHash();
    }, 0);
  });

  // removeHash function
  // uses HTML5 history API to manipulate the location bar
  function removeHash() {
    history.replaceState(
      "",
      document.title,
      window.location.origin + window.location.pathname + window.location.search
    );
  }
});

/*const checkBoxes = document.querySelectorAll('[type="checkbox"]');
let indi = 0;

for (let i = 0; i < checkBoxes.length; i++) {
  const checkBox = checkBoxes[i];

  checkBox.addEventListener("click", () => {
    if (checkBox.checked == true) {
      console.log("Checking Checkboxes");
      indi = indi + 1;
    }
    if (indi >= 3) {
      checkBoxes.forEach(check => {
        if (check.checked == false) {
          check.disabled = true;
          indi = indi - 1;
        }
      });
    }
    else if (indi < 3) {
      checkBoxes.forEach(uncheck => {
        uncheck.disabled = false; 
      });
      indi = indi - 1;
    }
  });
}*/
