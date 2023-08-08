/*window.onload = async () => {
    Wized.request.await("Load Users", (response) => {
      const userData = response;
      console.log("User Data ", userData);
  
      //Async function for grabbing the Questionnaire response
      async function loadData() {
        Wized.request.await("Load Questionnaire", (response) => {
          const questionnaire = response;
          console.log("Questionnaire Data ", questionnaire);

          //Question Variables
          let varQ2;
          let varQ3;
          let varQ4 = [];
          let varQ5 = [];
          let varQ6 = [];
          let varQ7;

          //Question 2 Setup
          const question2 = questionnaire.data[0].Question2;
          const dynamicFieldsQ2 = document.getElementById('dynamicFields_Q2');
  
          for (let i = 0; i < question2.length; i++) {
  
              const value = question2[i];
              console.log("Value ", value);
  
              let inputField = document.createElement('label')
              inputField.classList.add('input_field');
              let radio = document.createElement("input");
              radio.classList.add('input');
              radio.setAttribute("type", "radio");
              radio.setAttribute("id", "question2" + i);
              radio.setAttribute("name", "Age Group");
              radio.setAttribute("value", value);
              radio.setAttribute("w-el", "Q_question_2_dynamic");
              //checkbox.setAttribute("checked", "checked");
  
              let label = document.createElement("span");
              label.classList.add('label');
              label.setAttribute("for",  + i);
              label.textContent =  value;
  
              dynamicFieldsQ2.appendChild(inputField);
              inputField.append(radio);
              inputField.append(label);

              radio.addEventListener('change', (e) => {
                if (e.target.checked === true) {
                    varQ2 = e.target.value;
                }
              });
          }
  
          //Question 3 Setup
          const question3 = questionnaire.data[0].Question3;
          const dynamicFieldsQ3 = document.getElementById('dynamicFields_Q3');
          for (let i = 0; i < question3.length; i++) {
  
            const value = question3[i];
            console.log("Value ", value);
  
            let inputField = document.createElement('label')
            inputField.classList.add('input_field');
            let radio = document.createElement("input");
            radio.classList.add('input');
            radio.setAttribute("type", "radio");
            radio.setAttribute("id", "question3" + i);
            radio.setAttribute("name", "level Of Fitness");
            radio.setAttribute("value", value);
            radio.setAttribute("w-el", "Q_question_3_dynamic");
            //checkbox.setAttribute("checked", "checked");
  
            let label = document.createElement("span");
            label.classList.add('label');
            label.setAttribute("for",  + i);
            label.textContent =  value;
  
            dynamicFieldsQ3.appendChild(inputField);
            inputField.append(radio);
            inputField.append(label);
            
            radio.addEventListener('change', (e) => {
                if (e.target.checked === true) {
                    varQ3 = e.target.value;
                }
              });
          }
  
          //Question 4 Setup
          const question4 = questionnaire.data[0].Question4;
          const dynamicFieldsQ4 = document.getElementById('dynamicFields_Q4');
          for (let i = 0; i < question4.length; i++) {
  
            const value = question4[i];
            console.log("Value ", value);
  
            let inputField = document.createElement('label')
            inputField.classList.add('input_field');
            let checkbox = document.createElement("input");
            checkbox.classList.add('input');
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("id", "question4" + i);
            checkbox.setAttribute("name", value);
            checkbox.setAttribute("value", value);
            checkbox.setAttribute("w-el", "Q_question_4_dynamic");
            //checkbox.setAttribute("checked", "checked");
  
            let label = document.createElement("span");
            label.classList.add('label');
            label.setAttribute("for",  + i);
            label.textContent =  value;
  
            dynamicFieldsQ4.appendChild(inputField);
            inputField.append(checkbox);
            inputField.append(label);

            checkbox.addEventListener('change', (e) => {
                if (e.target.checked === true) {
                    if (varQ4.indexOf(e.target.value) === -1)
                    if (!varQ4.indexOf(e.target.value))
                    {
                    varQ4.push(e.target.value)
                    }
                }
                console.log("Change Value ", value);
              });
          }
  
           //Question 5 Setup
           const question5 = questionnaire.data[0].Question5;
           const dynamicFieldsQ5 = document.getElementById('dynamicFields_Q5');
           for (let i = 0; i < question5.length; i++) {
   
             const value = question5[i];
             console.log("Value ", value);
   
             let inputField = document.createElement('label')
             inputField.classList.add('input_field');
             let checkbox = document.createElement("input");
             checkbox.classList.add('input');
             checkbox.setAttribute("type", "checkbox");
             checkbox.setAttribute("id", "question5" + i);
             checkbox.setAttribute("name", value);
             checkbox.setAttribute("value", value);
             checkbox.setAttribute("w-el", "Q_question_5_dynamic");
             //checkbox.setAttribute("checked", "checked");
   
             let label = document.createElement("span");
             label.classList.add('label');
             label.setAttribute("for",  + i);
             label.textContent =  value;
   
             dynamicFieldsQ5.appendChild(inputField);
             inputField.append(checkbox);
             inputField.append(label);

             checkbox.addEventListener('change', (e) => {
                if (e.target.checked === true) {
                    if (varQ5.indexOf(e.target.value) === -1)
                    if (!varQ5.indexOf(e.target.value))
                    {
                    varQ5.push(e.target.value)
                    }
                }
                console.log("Change Value ", value);
              });
           }
           
           //Question 6 Setup
           const question6 = questionnaire.data[0].Question6;
           const dynamicFieldsQ6 = document.getElementById('dynamicFields_Q6');
           for (let i = 0; i < question6.length; i++) {
   
             const value = question6[i];
             console.log("Value ", value);
   
             let inputField = document.createElement('label')
             inputField.classList.add('input_field');
             let checkbox = document.createElement("input");
             checkbox.classList.add('input');
             checkbox.setAttribute("type", "checkbox");
             checkbox.setAttribute("id", "question6" + i);
             checkbox.setAttribute("name", value);
             checkbox.setAttribute("value", value);
             checkbox.setAttribute("w-el", "Q_question_6_dynamic");
             //checkbox.setAttribute("checked", "checked");
   
             let label = document.createElement("span");
             label.classList.add('label');
             label.setAttribute("for",  + i);
             label.textContent =  value;
   
             dynamicFieldsQ6.appendChild(inputField);
             inputField.append(checkbox);
             inputField.append(label);
             
             checkbox.addEventListener('change', (e) => {
                if (e.target.checked === true) {
                    varQ6 = e.target.value;
                }
                console.log("Change Value ", value);
              });
           }
           
          //Question 3 Setup
          const question7 = questionnaire.data[0].Question7;
          const dynamicFieldsQ7 = document.getElementById('dynamicFields_Q7');
          for (let i = 0; i < question7.length; i++) {
  
            const value = question7[i];
            console.log("Value ", value);
  
            let inputField = document.createElement('label')
            inputField.classList.add('input_field');
            let radio = document.createElement("input");
            radio.classList.add('input');
            radio.setAttribute("type", "radio");
            radio.setAttribute("id", "question7" + i);
            radio.setAttribute("name", "Sessions Per Week");
            radio.setAttribute("value", value);
            radio.setAttribute("w-el", "Q_question_7_dynamic");
            //checkbox.setAttribute("checked", "checked");
  
            let label = document.createElement("span");
            label.classList.add('label');
            label.setAttribute("for",  + i);
            label.textContent =  value;
  
            dynamicFieldsQ7.appendChild(inputField);
            inputField.append(radio);
            inputField.append(label);

            radio.addEventListener('change', (e) => {
                if (e.target.checked === true) {
                    varQ7 = e.target.value;
                }
                console.log("Change Value ", value);
              });
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
  });*/

// New Setup For Checkboxes

// Value array created to hold data
let valueArray = [];

// Checkbox element declaration
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Checkbox event listener for change event

for (let i = 0; i < checkboxes.length; i++) {
    const checkbox = checkboxes[i];
    checkbox.addEventListener('change', () => {
        if (checkbox.checked === true) {
            console.log('Checkbox Enabled =', checkbox.name);
            valueArray.push(checkbox.name);
            console.log('Value Array =', valueArray);
        }
        else {
            console.clear("");
            const findIndex = valueArray.indexOf(checkbox.name);
            if (findIndex > -1)
            {
                valueArray.splice(findIndex, 1);
                console.log('Value Array =', valueArray);
            }
        }
    });
}

/*setInterval(() => {
if (valueArray.length == 2)
{
        valueArray.forEach(item => {
        let h2 = document.createElement('h2');
        h2.textContent = item
        document.body.append(h2);
    });
}
}, 1000);*/


