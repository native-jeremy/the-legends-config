//window Onload || Request Executed || Await / Code Running
window.onload = async () => {
    //Elements Declared || Grabbed Elements
      const HeroImage = document.getElementById("Hero_Image");
      const IntroHeading = document.getElementById("Intro_Heading");
      const IntroDescription = document.getElementById("Intro_Description");
      const S1Description = document.getElementById("S_1_Description");
      const S1Image = document.getElementById("S_1_Image");
      const S2Description = document.getElementById("S_2_Description");
      const S2DisplayHeading = document.getElementById("S_2_Display_Heading");
      const S3Heading = document.getElementById("S_3_Heading");
      const S3SubHeading = document.getElementById("S_3_Sub_Heading");
      const TrainerSectionHeading = document.getElementById(
        "Trainer_Section_Heading"
      );
      const TrainerSectionSubHeading = document.getElementById(
        "Trainer_Section_Sub_Heading"
      );
      const TrainerImage = document.getElementById("Trainer_Image");
      const TrainerName = document.getElementById("Trainer_Name");
      const TrainerRole = document.getElementById("Trainer_Role");
      const TrainerDescription = document.getElementById("Trainer_Description");
      const TrainerImage2 = document.getElementById("Trainer_Image_2");
      const TrainerName2 = document.getElementById("Trainer_Name_2");
      const TrainerRole2 = document.getElementById("Trainer_Role_2");
      const TrainerDescription2 = document.getElementById("Trainer_Description_2");
      const S4Heading = document.getElementById("S_4_Heading");
      const S4SubHeading = document.getElementById("S_4_Sub_Heading");
      
      //Call Action Elements
      const HeadingCallToAction = document.getElementById("Heading_Call_To_Action");
      const SubHeadingCallToAction = document.getElementById("Sub_Heading_Call_To_Action");
      const ButtonLinkCallToAction = document.getElementById("Button_Link_Call_To_Action");
      const ButtonTextCallToAction = document.getElementById("Button_Link_Call_To_Action");

      const HeadingCallToAction2 = document.getElementById("Heading_Call_To_Action_2");
      const SubHeadingCallToAction2 = document.getElementById("Sub_Heading_Call_To_Action_2");
      const ButtonLinkCallToAction2 = document.getElementById("Button_Link_Call_To_Action_2");
      const ButtonTextCallToAction2 = document.getElementById("Button_Link_Call_To_Action_2");
    
    //Home Page Request From Wized || Main Data
      Wized.request.await("Load About Page", (response) => {
        const snapshot = response.data;
        console.log(snapshot); // Log request response
    
        //About Page Elements Request Data Applied To Elements
        HeroImage.srcset = snapshot.Hero_Image[0].url;
        IntroHeading.textContent = snapshot.Intro_Heading;
        IntroDescription.textContent = snapshot.Intro_Description;
        S1Description.textContent = snapshot.S_1_Description;
        S1Image.srcset = snapshot.S_1_Image[0].url;
        S2Description.textContent = snapshot.S_2_Description;
        S2DisplayHeading.textContent = snapshot.S_2_Display_Heading;
        TrainerSectionHeading.textContent = snapshot.Trainer_Section_Heading;
        TrainerSectionSubHeading.textContent = snapshot.Trainer_Section_Sub_Heading;
        TrainerImage.srcset = snapshot.Trainer_Image[0].url;
        TrainerName.textContent = snapshot.Trainer_Name;
        TrainerRole.textContent = snapshot.Trainer_Role;
        TrainerDescription.innerHTML = snapshot.Trainer_Description;
        TrainerImage2.srcset = snapshot.Trainer_Image_2[0].url;
        TrainerName2.textContent = snapshot.Trainer_Name_2;
        TrainerRole2.textContent = snapshot.Trainer_Role_2;
        TrainerDescription2.innerHTML = snapshot.Trainer_Description_2;
        S3Heading.textContent = snapshot.S_3_Heading;
        S3SubHeading.textContent = snapshot.S_3_Sub_Heading;
        S4Heading.textContent = snapshot.S_4_Heading;
        S4SubHeading.textContent = snapshot.S_4_Sub_Heading;

        //Call Action Request Data Applied To Elements
        HeadingCallToAction.textContent = snapshot.Heading_Call_To_Action[0];
        SubHeadingCallToAction.textContent = snapshot.Sub_Heading_Call_To_Action[0];
        ButtonLinkCallToAction.href = snapshot.Button_Link_Call_To_Action[0];
        ButtonTextCallToAction.textContent = snapshot.Button_Text_Call_To_Action[0];
        
        HeadingCallToAction2.textContent = snapshot.Heading_Call_To_Action_2[0];
        SubHeadingCallToAction2.textContent = snapshot.Sub_Heading_Call_To_Action_2[0];
        ButtonLinkCallToAction2.href = snapshot.Button_Link_Call_To_Action_2[0];
        ButtonTextCallToAction2.textContent = snapshot.Button_Text_Call_To_Action_2[0];

    //Logging Successful Request Message
        console.log("WORKED!");
    
    //Code Ended || Wized Request Function Ended
      });
    };
