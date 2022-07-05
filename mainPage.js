// ANIMATE BUS

document.addEventListener("scroll", animate);

let element =
  document.getElementById( "bus-container" ); // so that the road can still be adjust at the end
let schoolBus = document.getElementById("school-bus");
let windowHeight = window.innerHeight;
let scrollY = window.scrollY || window.pageYOffset;

function animate() {
  // DECLARE VARIABLE
  let elementHeight = element.clientHeight; // road img is not loaded if elementHeight is declared too early outside this function
  let journeyLength = elementHeight * 2;
  let elementPosition = element.getBoundingClientRect().top + window.scrollY;
  let scrollPosition = window.scrollY + windowHeight;
  let isInView = scrollPosition > elementPosition;
  let scrollAfterInView = scrollPosition - elementPosition;

  let firstStop = journeyLength * 0.35 + elementPosition;
  let secondStop = journeyLength * 0.4 + elementPosition;
  let thirdStop = journeyLength * 0.45 + elementPosition;
  let fourthStop = journeyLength * 0.6 + elementPosition;
  let fifthStop = journeyLength * 0.65 + elementPosition;
  let sixthStop = journeyLength * 0.7 + elementPosition;

  let isFirstStop = scrollPosition > firstStop;
  let isSecondStop = scrollPosition > secondStop;
  let isThirdStop = scrollPosition > thirdStop;
  let isFourthStop = scrollPosition > fourthStop;
  let isFifthStop = scrollPosition > fifthStop;
  let isSixthStop = scrollPosition > sixthStop;

  // START ANIMATING
  if (isInView && !isFirstStop) {
    let moveRight = (scrollAfterInView * 45) / (journeyLength * 0.35);
    schoolBus.style.left = `${moveRight}` + "%";

    schoolBus.style.top = "0%";
    schoolBus.style.transform = "rotate(0deg)";
  } else if (isFirstStop && !isSecondStop) {
    let scrollAfterFirstStop = scrollPosition - firstStop;
    let moveRight = (scrollAfterFirstStop * 7) / (0.05 * journeyLength) + 45;
    schoolBus.style.left = `${moveRight}` + "%";

    let moveDown = (scrollAfterFirstStop * 5) / (0.05 * journeyLength);
    schoolBus.style.top = `${moveDown}` + "%";

    let rotate = (scrollAfterFirstStop * 45) / (0.05 * journeyLength);
    schoolBus.style.transform = "rotate(" + rotate + "deg)";
  } else if (isSecondStop && !isThirdStop) {
    let scrollAfterSecondStop = scrollPosition - secondStop;
    let moveRight = (scrollAfterSecondStop * 3.5) / (0.05 * journeyLength) + 52;
    schoolBus.style.left = `${moveRight}` + "%";

    let moveDown = (scrollAfterSecondStop * 15) / (0.05 * journeyLength) + 5;
    schoolBus.style.top = `${moveDown}` + "%";

    let rotate = (scrollAfterSecondStop * 45) / (0.05 * journeyLength) + 45;
    schoolBus.style.transform = "rotate(" + rotate + "deg)";
  } else if (isThirdStop && !isFourthStop) {
    let scrollAfterThirdStop = scrollPosition - thirdStop;
    schoolBus.style.left = "55.5%";

    let moveDown = (scrollAfterThirdStop * 40) / (0.15 * journeyLength) + 20;
    schoolBus.style.top = `${moveDown}` + "%";

    schoolBus.style.transform = "rotate (90deg)";
  } else if (isFourthStop && !isFifthStop) {
    let scrollAfterFourthStop = scrollPosition - fourthStop;
    let moveRight =
      (scrollAfterFourthStop * 3.5) / (0.05 * journeyLength) + 55.5;
    schoolBus.style.left = `${moveRight}` + "%";

    let moveDown = (scrollAfterFourthStop * 15) / (0.05 * journeyLength) + 60;
    schoolBus.style.top = `${moveDown}` + "%";

    let rotate = (scrollAfterFourthStop * -45) / (0.05 * journeyLength) + 90;
    schoolBus.style.transform = "rotate(" + rotate + "deg)";
  } else if (isFifthStop && !isSixthStop) {
    let scrollAfterFifthStop = scrollPosition - fifthStop;
    let moveRight = (scrollAfterFifthStop * 7) / (0.05 * journeyLength) + 59;
    schoolBus.style.left = `${moveRight}` + "%";

    let moveDown = (scrollAfterFifthStop * 5) / (0.05 * journeyLength) + 75;
    schoolBus.style.top = `${moveDown}` + "%";

    let rotate = (scrollAfterFifthStop * -45) / (0.05 * journeyLength) + 45;
    schoolBus.style.transform = "rotate(" + rotate + "deg)";
  } else if (isSixthStop) {
    let scrollAfterSixthStop = scrollPosition - sixthStop;
    let moveRight = (scrollAfterSixthStop * 34) / (0.3 * journeyLength) + 66;
    if (moveRight > 100) {
      moveRight = 100;
    }
    schoolBus.style.left = `${moveRight}` + "%";
    schoolBus.style.top = "80%";
    schoolBus.style.transform = "rotate(0deg)";
  }
}


// CHANGE DAY / NIGHT MODE

let day = true;
let body = document.getElementsByTagName("body")[0];
let link = document.querySelectorAll("nav a");
let about = document.getElementById("about");
let education = document.getElementById("education");
let project = document.getElementById("project");
let projContent = document.querySelectorAll(".project-content");
let line4 = document.querySelectorAll(".line4");
let inBar = document.querySelectorAll(".inBar");

function changeMode() {

  if (day) {  // MAKE THEM DARK
    body.style.color = "#DAE3F3";
    link.forEach((index) => (index.style.color = "#DAE3F3"));
    about.style.color = "#FFF";
    about.style.textShadow = "0 0 5px black";
    education.style.color = "#445C7F";
    project.style.color = "#FFF";
    for (let i = 0; i < projContent.length; i++) {
      projContent[i].style.backgroundColor = "#4F4B67";
      projContent[i].style.color = "#ECE3E3";
    }
    for (let i = 0; i < line4.length; i++) {
      line4[i].style.color = "#FFF";
    }

    body.style.backgroundImage = "url(canvas/scenery-night.svg)";
    document.getElementById("mainCanva").data = "canvas/nightMainCanva.html";
    document.getElementById("mode-img").src = "canvas/sun.svg";
    document.getElementById("logo").src = "canvas/logo-bright.svg";
    console.log(inBar);

    day = false;
  } else if (!day) {    // MAKE THEM BRIGHT
    body.style.backgroundImage = "url(canvas/scenery-morning.svg)";
    document.getElementById("mainCanva").data = "canvas/dayMainCanva.html";
    document.getElementById("mode-img").src = "canvas/moon.svg";
    body.style.color = "#445C7F";
    link.forEach((index) => (index.style.color = "#445C7F"));
    project.style.color = "#7D759F";
    about.style.color = "#445c7f";
    about.style.textShadow = "0 0 5px transparent";
    for (let i = 0; i < projContent.length; i++) {
      projContent[i].style.backgroundColor = "#FFF";
      projContent[i].style.color = "#666189";
    }
    for (let i = 0; i < line4.length; i++) {
      line4[i].style.color = "#000";
    }
    document.getElementById("logo").src = "canvas/logo.svg";

    day = true;
  }
}



// CAHNGE CONTACT ICON
function hover(element) {
  switch (element) {
    case github:
      element.setAttribute("src", "canvas/contact icon/github2.png");
      break;
    case linkedin:
      element.setAttribute("src", "canvas/contact icon/linkedin2.png");
      break;
    case mail:
      element.setAttribute("src", "canvas/contact icon/mail2.png");
      break;
    case whatsapp:
      element.setAttribute("src", "canvas/contact icon/ws2.png");
      break;
  }
}

function unhover(element) {
  switch (element) {
    case github:
      element.setAttribute("src", "canvas/contact icon/github1.png");
      break;
    case linkedin:
      element.setAttribute("src", "canvas/contact icon/linkedin1.png");
      break;
    case mail:
      element.setAttribute("src", "canvas/contact icon/mail1.png");
      break;
    case whatsapp:
      element.setAttribute("src", "canvas/contact icon/ws1.png");
      break;
  }
}


// OPEN MENU

let menu = false;

function openMenu() {
  if (menu) {
    // CLOSE IT
    link.forEach((index) => index.classList.remove("inBar"));
    document.getElementById("mode-img").style.visibility = "visible";
    menu = false;
  } else {
    // OPEN IT
    link.forEach((index) => index.classList.add("inBar"));
    document.getElementById("mode-img").style.visibility = "hidden";
    menu = true;
  }

  if (day) {
    link.forEach((index) => index.classList.add("inBarDay"));
    link.forEach((index) => index.classList.remove("inBarNight"));
  } else {
    link.forEach((index) => index.classList.remove("inBarDay"));
    link.forEach((index) => index.classList.add("inBarNight"));
  }
}
