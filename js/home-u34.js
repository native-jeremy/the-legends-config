//window Onload || Request Executed || Await / Code Running
window.onload = async () => {
  //Elements Declared || Grabbed Elements
  const mockButton = document.querySelectorAll(
    ".display_phone_navigation_button"
  );
  const mockImage = document.getElementById("mockImage");
  const mockHeading = document.getElementById("mockHeading");
  const mockSubHeading = document.getElementById("mockSubHeading");
  const mockDescription = document.getElementById("mockDescription");

  const IntroHeading = document.getElementById("Intro_Heading");
  const IntroDescription = document.getElementById("Intro_Description");
  const IntroSmallText = document.getElementById("Intro_Small_Text");
  const S1Heading = document.getElementById("S_1_Heading");
  const S1SubHeading = document.getElementById("S_1_Sub_Heading");
  const ActionHeading = document.getElementById("Action_Heading");
  const ActionSubHeading = document.getElementById("Action_Sub_Heading");
  const TrainerSectionHeading = document.getElementById(
    "Trainer_Section_Heading"
  );
  const TrainerSectionSubHeading = document.getElementById(
    "Trainer_Section_Sub_Heading"
  );
  const TrainerImage = document.getElementById("Trainer_Image");
  const TrainerName = document.getElementById("Trainer_Name");
  const TrainerDescription = document.getElementById("Trainer_Description");
  const TrainerImage2 = document.getElementById("Trainer_Image_2");
  const TrainerName2 = document.getElementById("Trainer_Name_2");
  const TrainerDescription2 = document.getElementById("Trainer_Description_2");
  const S2Heading = document.getElementById("S_2_Heading");
  const S2SubHeading = document.getElementById("S_2_Sub_Heading");
  const S3Heading = document.getElementById("S_3_Heading");
  const S3SubHeading = document.getElementById("S_3_Sub_Heading");
  const S4Heading = document.getElementById("S_4_Heading");
  const S4SubHeading = document.getElementById("S_4_Sub_Heading");
  const S5Heading = document.getElementById("S_5_Heading");
  const S5SubHeading = document.getElementById("S_5_Sub_Heading");

  //Call Action Elements
  const HeadingCallToAction = document.getElementById("Heading_Call_To_Action");
  const SubHeadingCallToAction = document.getElementById("Sub_Heading_Call_To_Action");
  const ButtonLinkCallToAction = document.getElementById("Button_Link_Call_To_Action");
  const ButtonTextCallToAction = document.getElementById("Button_Link_Call_To_Action");

  const HeadingCallToAction2 = document.getElementById("Heading_Call_To_Action_2");
  const SubHeadingCallToAction2 = document.getElementById("Sub_Heading_Call_To_Action_2");
  const ButtonLinkCallToAction2 = document.getElementById("Button_Link_Call_To_Action_2");
  const ButtonTextCallToAction2 = document.getElementById("Button_Link_Call_To_Action_2");

  //Program Card Content
  const programContent = document.getElementById("Program_Content");

  //Blog Card Content
  const blogContent = document.getElementById("Blog_Content");

  //Mock Data Array || Iphone Mockup
  const mockData = [
    {
      image:
        "https://uploads-ssl.webflow.com/6474932b31758d71131214b7/64d59c9d11fac0c5e912f81d_iphone_mock_base_image.jpg",
      heading: "Exercise",
      sub_heading: "Animated",
      description: `No matter your fitness level, The Legends Programs will be tailored to where you plan to workout, what equipment you have available, the type of workouts you enjoy doing, how often & how long you would like to train each week, and specific to your health & fitness goals.`,
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/the-legends-web-app.appspot.com/o/Images%2Fthe_legends-outdoor-placeholder-16.jpg?alt=media&token=144f93b0-1704-4af1-8511-09af76d70bcc",
      heading: "Nourishment",
      sub_heading: "Animated",
      description: `No matter your fitness level, The Legends Programs will be tailored to where you plan to workout, what equipment you have available, the type of workouts you enjoy doing, how often & how long you would like to train each week, and specific to your health & fitness goals.`,
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/the-legends-web-app.appspot.com/o/Images%2Fthe_legends-outdoor-placeholder-9.jpg?alt=media&token=66c6494f-a7c4-47d2-b4dc-546046fe0395",
      heading: "Recovery",
      sub_heading: "Animated",
      description: `No matter your fitness level, The Legends Programs will be tailored to where you plan to workout, what equipment you have available, the type of workouts you enjoy doing, how often & how long you would like to train each week, and specific to your health & fitness goals.`,
    },
    {
      image:
        "https://firebasestorage.googleapis.com/v0/b/the-legends-web-app.appspot.com/o/Images%2Fthe_legends-studio-placeholder-1.jpg?alt=media&token=8475cf4e-d0af-4ae9-b6c1-2d209065e3f9",
      heading: "Mindset",
      sub_heading: "Animated",
      description: `No matter your fitness level, The Legends Programs will be tailored to where you plan to workout, what equipment you have available, the type of workouts you enjoy doing, how often & how long you would like to train each week, and specific to your health & fitness goals.`,
    },
  ];

  //Home Page Request From Wized || Main Data
  Wized.request.await("Load Home Page", (response) => {
    const snapshot = response.data;
    const { ID_Blogs: ID, Name_Blogs: Name, Media_Content_Blogs: Media, Rich_Text_Blogs: Description} = snapshot;
    console.log(snapshot); // Log request response

    //Home Page Elements Request Data Applied To Elements
    IntroHeading.textContent = snapshot.Intro_Heading;
    IntroDescription.textContent = snapshot.Intro_Description;
    IntroSmallText.textContent = snapshot.Intro_Small_Text;
    S1Heading.textContent = snapshot.S_1_Heading;
    S1SubHeading.textContent = snapshot.S_1_Sub_Heading;
    ActionHeading.textContent = snapshot.Action_Heading;
    ActionSubHeading.textContent = snapshot.Action_Sub_Heading;
    TrainerSectionHeading.textContent = snapshot.Trainer_Section_Heading;
    TrainerSectionSubHeading.textContent = snapshot.Trainer_Section_Sub_Heading;
    TrainerImage.srcset = snapshot.Trainer_Image[0].url;
    TrainerName.textContent = snapshot.Trainer_Name;
    TrainerDescription.textContent = snapshot.Trainer_Description;
    TrainerImage2.srcset = snapshot.Trainer_Image_2[0].url;
    TrainerName2.textContent = snapshot.Trainer_Name_2;
    TrainerDescription2.textContent = snapshot.Trainer_Description_2;
    S2Heading.textContent = snapshot.S_2_Heading;
    S2SubHeading.textContent = snapshot.S_2_Sub_Heading;
    S3Heading.textContent = snapshot.S_3_Heading;
    S3SubHeading.textContent = snapshot.S_3_Sub_Heading;
    S4Heading.textContent = snapshot.S_4_Heading;
    S4SubHeading.textContent = snapshot.S_4_Sub_Heading;
    S5Heading.textContent = snapshot.S_5_Heading;
    S5SubHeading.textContent = snapshot.S_5_Sub_Heading;

    /*//Call Action Request Data Applied To Elements
    HeadingCallToAction.textContent = snapshot.Heading_Call_To_Action[0];
    SubHeadingCallToAction.textContent = snapshot.Sub_Heading_Call_To_Action[0];
    ButtonLinkCallToAction.href = snapshot.Button_Link_Call_To_Action[0];
    ButtonTextCallToAction.textContent = snapshot.Button_Text_Call_To_Action[0];
        
    HeadingCallToAction2.textContent = snapshot.Heading_Call_To_Action_2[0];
    SubHeadingCallToAction2.textContent = snapshot.Sub_Heading_Call_To_Action_2[0];
    ButtonLinkCallToAction2.href = snapshot.Button_Link_Call_To_Action_2[0];
    ButtonTextCallToAction2.textContent = snapshot.Button_Text_Call_To_Action_2[0];*/

    //Logging Successful Request Message
    console.log("WORKED!");
    console.log("Programs Length", snapshot.Programs.length);
    console.log("Blogs Length", snapshot.Blogs.length);

    //Programs Render List
    for (let i = 0; i < snapshot.Programs.length; i++) {
      const card = `
      <div class="card scroll_card">
        <div class="card_image">
          <img src="${snapshot.Image_Programs[i].url}" loading="lazy" alt="" class="img_full card_img_tag">
        </div>
        <div class="card_body">
          <h4 class="main-heading-style-1">${snapshot.Heading_Programs[i]}</h4>
          <div class="card_box">
            <p class="body-copy-text-style-1 mt_xsml">${snapshot.Description_Programs[i]}</p>
          </div>
          <a href="/program-overview?program=${snapshot.ID_Programs[i]}" class="button-style-1 card_button mt_auto w-button">Learn More</a>
        </div>
      </div>`;
      programContent.innerHTML = programContent.innerHTML + card;
    }

    array.forEach(element => {
      
    });

    //Blogs Render List
    for (let i = 0; i < snapshot.Blogs.length; i++) {
      const card = `
      <div class="card scroll_card">
        <div class="card_image">
          <img src="${Media[i].url}" loading="lazy" alt="" class="img_full card_img_tag">
        </div>
        <div class="card_body">
          <h4 class="main-heading-style-1">${Name[i]}</h4>
          <div class="card_box">
            <p class="body-copy-text-style-1 mt_xsml">${Description[i]}</p>
          </div>
          <a href="/blog-post?blog=${ID[i]}" class="button-style-1 card_button mt_auto w-button">Learn More</a>
        </div>
      </div>`;
      blogContent.innerHTML = blogContent.innerHTML + card;
    }

    //Custom Slider Dots || Arrows || Elements / Event Listener Applied
    //Webflow Arrows | Buttons
    const currentLeft = document.getElementById("currentLeft");
    const currentRight = document.getElementById("currentRight");

    //Custom Arrows | Buttons
    const newLeft = document.getElementById("newLeft");
    const newRight = document.getElementById("newRight");

    newLeft.addEventListener("click", () => {
      currentLeft.click();
      applyCustomDots();
    });

    newRight.addEventListener("click", () => {
      currentRight.click();
      applyCustomDots();
    });

    function applyCustomDots() {
      //Slider Dots
      const webflowDot = document.querySelectorAll(".w-slider-dot");
      const customDot = document.querySelectorAll(".dot");

      for (let i = 0; i < webflowDot.length; i++) {
        if (webflowDot[i].classList.contains("w-active")) {
          customDot.forEach((dot) => {
            if (dot.classList.contains("dot_active")) {
              dot.classList.remove("dot_active");
            }
          });
          customDot[i].classList.add("dot_active");
        }
      }
    }

    //Mock Data Applied || Iphone Mockup Data / Animation Applied
    for (let i = 0; i < mockButton.length; i++) {
      mockButton[i].addEventListener("click", () => {
        animateMockup(i);
      });
    }

    function animateMockup(index) {
      if (mockImage.srcset !== mockData[index].image) {
        mockImage.style.opacity = "0";
        mockHeading.style.opacity = "0";
        mockSubHeading.style.opacity = "0";
        mockDescription.style.opacity = "0";
        setTimeout(() => {
          mockImage.srcset = mockData[index].image;
          mockHeading.textContent = mockData[index].heading;
          mockSubHeading.textContent = mockData[index].sub_heading;
          mockDescription.textContent =
            mockData[index].description + "- " + mockData[index].heading;
        }, 1000);
        setTimeout(() => {
          mockImage.style.opacity = "1";
          mockHeading.style.opacity = "1";
          mockSubHeading.style.opacity = "1";
          mockDescription.style.opacity = "1";
        }, 1750);
      } else if (mockImage.srcset == mockData[index].image) {
        return false;
      }
    }

    //Code Ended || Wized Request Function Ended
  });
};
