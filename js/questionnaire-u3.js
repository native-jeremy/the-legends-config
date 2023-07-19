window.onload = async () => {  
    Wized.request.await("Load Users", (response) => {
      const userData = response;
      console.log("User Data ", userData);

      //Async function for grabbing the Questionnaire response
       async function loadData() {
          Wized.request.await("Load Questionnaire", (response) => {
            const questionnaireData = response;
            console.log("Questionnaire Data ", questionnaireData);
          });
        }
        loadData();
    })
};

$(document).ready(function() {
  // get the anchor link buttons
  const menuBtn = $('.button-style-4');
  const menuBtn2 = $('.button-style-2');
  const iconBtn = $('.form-indicator-icon');
  // when each button is clicked
  menuBtn.click(()=>{	
    // set a short timeout before taking action
    // so as to allow hash to be set
    setTimeout(()=>{
      // call removeHash function after set timeout
      removeHash();
    }, 0);
  });
  
    menuBtn2.click(()=>{	
    // set a short timeout before taking action
    // so as to allow hash to be set
    setTimeout(()=>{
      // call removeHash function after set timeout
      removeHash();
    }, 0); // 5 millisecond timeout in this case
  });
  
     iconBtn.click(()=>{	
    // set a short timeout before taking action
    // so as to allow hash to be set
    setTimeout(()=>{
      // call removeHash function after set timeout
      removeHash();
    }, 0);
  });

  // removeHash function
  // uses HTML5 history API to manipulate the location bar
  function removeHash(){
    history.replaceState('', document.title, window.location.origin + 		     window.location.pathname + window.location.search);
  }
});
