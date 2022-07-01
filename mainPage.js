var element = document.getElementById("bus-container");
var schoolBus = document.getElementById("school-bus");
var elementHeight = element.clientHeight;
var windowHeight = window.innerHeight;
var elementPosition;

document.addEventListener("scroll", animate);
let scrollY = window.scrollY || window.pageYOffset;
let scrollPosition = scrollY + windowHeight;

function inView() {
  elementPosition =
    element.getBoundingClientRect().top + scrollY + elementHeight / 3;
  if (scrollPosition > elementPosition) {
    return true;
  }
  return false;
}

function animate() {
  let scrollAfterInView = scrollPosition - elementPosition;
  let firstElementPosition =
    element.getBoundingClientRect().top +
    scrollY +
    elementHeight -
    elementHeight / 7.5;
  let firstStop = firstElementPosition < scrollPosition;
  let scrollAfterFirstStop = scrollPosition - firstElementPosition;
  let rotate = scrollAfterFirstStop * 1.5;

  let secondStop = null;
  if (rotate > 45) {
    secondStop = true;
  }

  let thirdStop = null;
  if (rotate > 90) {
    thirdStop = true;
  }

  let forthElementPosition =
    element.getBoundingClientRect().top +
    scrollY +
    elementHeight +
    elementHeight / 3.8;
  let forthStop = forthElementPosition < scrollPosition;

  // move right
  if (inView()) {
    let moveRight = scrollAfterInView / 7;
    schoolBus.style.left = `${moveRight}` + "%";
    schoolBus.style.transform = "rotate(" + 0 + "deg)";
    schoolBus.style.top = 0 + "%";
  }

  //first stop
  if (firstStop) {
    schoolBus.style.transform = "rotate(" + rotate + "deg)";
  }

  if (firstStop && !secondStop) {
    let static = (13 * scrollAfterInView) / 140;

    var smallMoveRight = scrollAfterInView / 20 + static;
    schoolBus.style.left = `${smallMoveRight}` + "%";

    let smallSmallMoveDown = scrollAfterFirstStop / 4;
    schoolBus.style.top = `${smallSmallMoveDown}` + "%";
  }

  //secondStop
  if (secondStop) {
    let static = (13 * scrollAfterInView) / 140;
    let staticOnFirstStop = scrollAfterInView / 40 + static;

    var smallSmallMoveRight = scrollAfterInView / 40 + staticOnFirstStop;
    schoolBus.style.left = `${smallSmallMoveRight}` + "%";

    //  console.log("rotate: " + rotate)
    //  console.log("smallSmallMoveRight: " + smallSmallMoveRight)

    let staticDown = scrollAfterFirstStop * 0.75;
    let smallMoveDown = scrollAfterFirstStop / 1 - staticDown;
    schoolBus.style.top = `${smallMoveDown}` + "%";
  }

  //thirdStop
  if (thirdStop && !forthStop) {
    let moveDown;
    schoolBus.style.transform = "rotate(" + 90 + "deg)";
    schoolBus.style.left = "57.5%";
    let anotherStaticDown = scrollAfterFirstStop * 1.75;
    moveDown = 2 * scrollAfterFirstStop - anotherStaticDown;
    schoolBus.style.top = `${moveDown}` + "%";
  }

  let scrollAfterForthStop = scrollPosition - forthElementPosition;
  let minusRotate;
  //forthStop
  if (forthStop) {
    minusRotate = 90 - scrollAfterForthStop * 1.5;
    schoolBus.style.transform = "rotate(" + minusRotate + "deg)";
    let staticSecond = 58;
    let smallSmallMoveRightSecond = scrollAfterForthStop / 40 + staticSecond;
    schoolBus.style.left = `${smallSmallMoveRightSecond}` + "%";
  }

  //fifthStop
  let fifthStop = null;
  if (minusRotate < 0) {
    fifthStop = true;
  }

  if (fifthStop) {
    schoolBus.style.transform = "rotate(" + 0 + "deg)";
    schoolBus.style.top = "79%";
    let smallMoveRightSecond = scrollAfterForthStop / 10 + 54;
    schoolBus.style.left = `${smallMoveRightSecond}` + "%";
  }
}

let day = true;
let body = document.getElementsByTagName("body")[0];
let link = document.querySelectorAll(".navbar a");
let about = document.getElementById("about")
let education = document.getElementById("education")
let project = document.getElementById("project")
let projContainer = document.querySelectorAll(".project-container")
let line4 = document.querySelectorAll(".line4")

function changeMode() {
  if (day) {
    body.style.color = "#DAE3F3";
    link[0].style.color = "#DAE3F3";
    link[1].style.color = "#DAE3F3";
    link[2].style.color = "#DAE3F3";
    link[3].style.color = "#DAE3F3";
    about.style.color = "#FFF";
    about.style.textShadow = "0 0 5px black";
    education.style.color = "#445C7F";
    project.style.color = "#FFF";
    for (let i = 0; i < projContainer.length; i++) {
      projContainer[i].style.backgroundColor = "#4F4B67";
      projContainer[i].style.color = "#ECE3E3";
    }
    for (let i = 0; i < line4.length; i++) {
      line4[i].style.color = "#FFF";
    }
    body.style.backgroundImage = "url(canvas/scenery-night.svg)";
    document.getElementById("mainCanva").data = "canvas/nightMainCanva.html";
    document.getElementById("mode-img").src = "canvas/sun.svg";
    document.getElementById("logo").src = "canvas/logo-bright.svg";
    
    
    day = false;
  } else if (!day) {
    body.style.backgroundImage = "url(canvas/scenery-morning.svg)";
    document.getElementById("mainCanva").data = "canvas/dayMainCanva.html";
    document.getElementById("mode-img").src = "canvas/moon.svg";
    body.style.color = "#445C7F";
    link[0].style.color = "#445C7F";
    link[1].style.color = "#445C7F";
    link[2].style.color = "#445C7F";
    link[3].style.color = "#445C7F";
    about.style.color = "#445C7F";
    project.style.color = "#7D759F";
    about.style.textShadow = "0 0 5px transparent";
    for (let i = 0; i < projContainer.length; i++) {
      projContainer[i].style.backgroundColor = "#FFF";
      projContainer[i].style.color = "#666189";
    }
    for (let i = 0; i < line4.length; i++) {
      line4[i].style.color = "#000";
    }
    document.getElementById("logo").src = "canvas/logo.svg";
    day = true;
  }
}


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
