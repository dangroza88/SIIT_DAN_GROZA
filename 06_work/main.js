
var lives = 3;
var playGround = document.querySelector(".game-container");



let player = document.querySelector(".player")

document.addEventListener("keydown", function (event) {
  // console.log("event= ", event)
  if (event.code === "ArrowDown") {
    let oldTop = parseInt(player.style.top)
    if (oldTop < 370) {
      player.style.top = `${oldTop + 10}px`
    }

  }
  if (event.code === "ArrowUp") {
    let oldTop = parseInt(player.style.top)
    if (oldTop > 0) {
      player.style.top = `${oldTop - 10}px`
    }

  }

  if (event.code === "ArrowRight") {
    let oldLeft = parseInt(player.style.left)
    if (oldLeft < 370) {
      player.style.left = `${oldLeft + 10}px`
    }
  }

  if (event.code === "ArrowLeft") {
    let oldLeft = parseInt(player.style.left)
    if (oldLeft > 0) {
      player.style.left = `${oldLeft - 10}px`
    }
  }

  
});


var i = 0;
var obsNum = setInterval(function () {
  // console.log(event);
  var obstaco = {
    left: parseInt(Math.random() * 330),
    // top: parseInt(Math.random() * 400)
  }
  var obsDiv = document.createElement("div");
  playGround.appendChild(obsDiv);
  obsDiv.classList.add("obs");
  obsDiv.setAttribute("id", "obs" + i)
  // obsDiv.setAttribute("style", "top: " + obstaco.top + "px; left: " + obstaco.left + "px;");
  obsDiv.setAttribute("style", "top: 10px; left: " + obstaco.left + "px;");
  console.log(obstaco);
  i++;
  if (i >= 5) {
    clearInterval(obsNum);
  }
}, 1000);


function overlap(){
  let rect1 = player.getBoundingClientRect();

  let obs0 = document.getElementById("obs0")
  let rect2 = obs0.getBoundingClientRect();

  let obs1 = document.getElementById("obs1")
  let rect3 = obs1.getBoundingClientRect();

  let obs2 = document.getElementById("obs2")
  let rect4 = obs2.getBoundingClientRect();

  let obs3 = document.getElementById("obs3")
  let rect5 = obs3.getBoundingClientRect();

  let obs4 = document.getElementById("obs4")
  let rect6 = obs4.getBoundingClientRect();

  let obsObject = {rect2, rect3, rect4, rect5, rect6};
  var obsObjectKeys = Object.keys(obsObject);
  console.log(obsObject);
  console.log(obsObjectKeys);
 
  debugger;
  var overlap = !(rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom)
    console.log(overlap);

}

// document.addEventListener("keydown", function (event){
//   console.log(event);
//   var obstaco = {
//     left: parseInt(Math.random() * 370),
//     top: parseInt(Math.random() * 400)
//   }
//   var obsDiv = document.createElement("div");
//   playGround.appendChild(obsDiv);
//   obsDiv.classList.add("obs"); 
//   // obsDiv.setAttribute("style", "top: " + obstaco.top + "px; left: " + obstaco.left + "px;");
//   obsDiv.setAttribute("style", "top: 10px; left: " + obstaco.left + "px;");
//   console.log(obstaco);
// });





function del() {
  debugger
  var deleteLive = document.querySelector(".lives-container");

  deleteLive.removeChild(deleteLive.firstChild);

}





