//window Onload || Request Executed || Await / Code Running
window.onload = async () => {
    //Elements Declared || Grabbed Elements
      //Call Action Elements
      const HeadingCallToAction = document.getElementById("Heading_Call_To_Action");
      const SubHeadingCallToAction = document.getElementById("Sub_Heading_Call_To_Action");
      const ButtonLinkCallToAction = document.getElementById("Button_Link_Call_To_Action");
      const ButtonTextCallToAction = document.getElementById("Button_Link_Call_To_Action");
    
    //Home Page Request From Wized || Main Data
      Wized.request.await("Load Programs CTA", (response) => {
        const snapshot = response.data;
        console.log(snapshot); // Log request response
    
    //Programs Page Elements Request Data Applied To Elements
        //Call Action Request Data Applied To Elements
        HeadingCallToAction.textContent = snapshot.Heading_Call_To_Action[0];
        SubHeadingCallToAction.textContent = snapshot.Sub_Heading_Call_To_Action[0];
        ButtonLinkCallToAction.href = snapshot.Button_Link_Call_To_Action[0];
        ButtonTextCallToAction.textContent = snapshot.Button_Text_Call_To_Action[0];

    //Logging Successful Request Message
        console.log("WORKED!");
    
    //Code Ended || Wized Request Function Ended
      });
    };
