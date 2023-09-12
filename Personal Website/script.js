function cameraToAboutMe() {
  showExitButton();
  showButtons();
  hidePC();

  const modelViewer = document.getElementById('my-model');

  modelViewer.setAttribute('camera-orbit', '90.00deg 90.00deg 49.51m');
  modelViewer.setAttribute('field-of-view', '3.00deg');
  modelViewer.setAttribute('camera-target', '-25.10m 7.97m 0.1m');

  modelViewer.cameraControls = false;
}

function cameraToProjects() {
  showExitButton();
  hideButtons();
  enterPC();

  const modelViewer = document.getElementById('my-model');

  modelViewer.setAttribute('camera-orbit', '180.00deg 90.00deg 40.52m');
  modelViewer.setAttribute('field-of-view', '3deg');
  modelViewer.setAttribute('camera-target', '3.16m 5.96m 40.00m');

  modelViewer.cameraControls = false;
}

function cameraToContactMe() {
  showExitButton();
  hideButtons();

  const modelViewer = document.getElementById('my-model');

  modelViewer.setAttribute('camera-orbit', '180.00deg 22.50deg 40.52m');
  modelViewer.setAttribute('field-of-view', '3.00deg');
  modelViewer.setAttribute('camera-target', '6.00m -15.00m 20.50m');

  modelViewer.cameraControls = false;
}

function restoreCameraLocation() {
  hideExitButton();
  hideButtons();
  hidePC();

  const modelViewer = document.getElementById('my-model');

  modelViewer.setAttribute('camera-orbit', '146.3deg 76.02deg 73.3m');
  modelViewer.setAttribute('field-of-view', '20deg');
  modelViewer.setAttribute('camera-target', '0m 4m 0m');

  modelViewer.cameraControls = true;
}

//======================================================================//

function showAboutMe() {
  const aboutMeHoverDiv = document.getElementById('aboutme-hover');
  aboutMeHoverDiv.style.display = 'block';
}

function hideAboutMe() {
  const aboutMeHoverDiv = document.getElementById('aboutme-hover');
  aboutMeHoverDiv.style.display = 'none';
}

function showProjects() {
  const projectsHoverDiv = document.getElementById('projects-hover');
  projectsHoverDiv.style.display = 'block';
}

function hideProjects() {
  const projectsHoverDiv = document.getElementById('projects-hover');
  projectsHoverDiv.style.display = 'none';
}

function showContactMe() {
  const contactHoverDiv = document.getElementById('contact-hover');
  contactHoverDiv.style.display = 'block';
}

function hideContactMe() {
  const contactHoverDiv = document.getElementById('contact-hover');
  contactHoverDiv.style.display = 'none';
}

//======================================================================//

function showSocials() {
  const buttons = document.querySelectorAll(".instagram, .githubHS, .linkedin, .resume");
  const delay = 200;

  buttons.forEach((button, index) => {
    setTimeout(() => {
      if (button.style.display === "none") {
        button.style.display = "block";
      } 
      else {
        button.style.display = "none";
      }
    }, delay * index);
  });
}

document.addEventListener("click", function(event) {
  const socialsButton = document.querySelector(".socials");
  if (event.target !== socialsButton && !socialsButton.contains(event.target)) {
    const buttons = document.querySelectorAll(".instagram, .githubHS, .linkedin, .resume");
    const delay = 200;

    buttons.forEach((button, index) => {
      setTimeout(() => {
         button.style.display = "none";
      }, delay * index);
    });
  }
});

//======================================================================//

function showNavigation() {
  const buttons = document.querySelectorAll(".projects, .aboutMe");
  const delay = 200;

  buttons.forEach((button, index) => {
    setTimeout(() => {
      if (button.style.display === "none") {
        button.style.display = "block";
      } 
      else {
        button.style.display = "none";
      }
    }, delay * index);
  });
}

document.addEventListener("click", function(event) {
  const navigationButton = document.querySelector("#navigationButton");
  const projectsButton = document.querySelector("#projects");
  const aboutMeButton = document.querySelector("#aboutMe");
  
  if (event.target !== navigationButton && !navigationButton.contains(event.target)) {
    if (projectsButton.style.display !== "none" || aboutMeButton.style.display !== "none") {
      const buttons = [projectsButton, aboutMeButton];
      const delay = 200;

      buttons.forEach((button, index) => {
        setTimeout(() => {
           button.style.display = "none";
        }, delay * index);
      });
    }
  }
});

//======================================================================//

function showButtons() {
  const spotifyButton = document.getElementById('spotifyButton');
  spotifyButton.style.display = 'block';

  const gamesButton = document.getElementById('gamesButton');
  gamesButton.style.display = 'block';

  const swimButton = document.getElementById('swimButton');
  swimButton.style.display = 'block';
}

function hideButtons() {
  const spotifyButton = document.getElementById('spotifyButton');
  spotifyButton.style.display = 'none';

  const gamesButton = document.getElementById('gamesButton');
  gamesButton.style.display = 'none';

  const swimButton = document.getElementById('swimButton');
  swimButton.style.display = 'none';
}

function showExitButton() {
  const exitButton = document.getElementById('exitButton');
  exitButton.style.display = 'block';
}

function hideExitButton() {
  const exitButton = document.getElementById('exitButton');
  exitButton.style.display = 'none';
}

//======================================================================//

function enterPC() {
  showExitButton();
  setTimeout(() => {
    const projectContainer = document.getElementById("projectContainer");
    projectContainer.style.display = "block";
  }, 500);
}

function hidePC() {
  const projectContainer = document.getElementById("projectContainer");
  projectContainer.style.display = "none";
}

//======================================================================//

window.addEventListener("load", function () {
  const modelViewer = document.getElementById("my-model");

  setTimeout(function () {
      modelViewer.style.opacity = "1";
  }, 2500); 
});

window.addEventListener("load", function () {
  const modelViewer = document.getElementById("my-model");
  const buttons = document.querySelectorAll(".navigation, .projects, .aboutMe, .socials, .instagram, .githubHS, .linkedin, .resume");

  buttons.forEach(button => {
      button.style.opacity = "0";
  });

  setTimeout(function () {
      buttons.forEach(button => {
          button.style.transition = "opacity 1s";
          button.style.opacity = "1";
      });
  }, 3000); 
});

