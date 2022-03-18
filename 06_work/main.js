
// var lives = 3;
var playGround = document.querySelector(".game-container");
let player = document.querySelector(".player");
var deleteLive = document.querySelector(".lives-container");

document.addEventListener("keydown", function (event) {
  // console.log("event= ", event)
  if (event.code === "ArrowDown") {
    let oldTop = parseInt(player.style.top)
    if (oldTop < 350) {
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
    if (oldLeft < 350) {
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
    top: parseInt(Math.random() * 40)
  }
  var obsDiv = document.createElement("div");
  playGround.appendChild(obsDiv);
  obsDiv.classList.add("obs", "hidden");
  obsDiv.setAttribute("id", "obs" + i)
  obsDiv.setAttribute("style", "top: " + obstaco.top + "px; left: " + obstaco.left + "px;");
  console.log(obstaco);
  i++;
  if (i >= 3) {
    clearInterval(obsNum);
    player.classList.remove("hidden");
  }
}, 1000);

document.addEventListener("keydown", function overlap() {
  let rect1 = player.getBoundingClientRect();

  let obs0 = document.getElementById("obs0")
  let rect2 = obs0.getBoundingClientRect();

  let obs1 = document.getElementById("obs1")
  let rect3 = obs1.getBoundingClientRect();

  let obs2 = document.getElementById("obs2")
  let rect4 = obs2.getBoundingClientRect();

  // let obsObject = {rect2, rect3, rect4};
  // var obsObjectKeys = Object.keys(obsObject);
  // console.log(obsObject);
  // console.log(obsObjectKeys);

  // debugger;
  var overlap1 = !(rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom)
  console.log("Hit, obs 1" + overlap1);

  var overlap2 = !(rect1.right < rect3.left ||
    rect1.left > rect3.right ||
    rect1.bottom < rect3.top ||
    rect1.top > rect3.bottom)
  console.log("Hit, obs 2" + overlap2);

  var overlap3 = !(rect1.right < rect4.left ||
    rect1.left > rect4.right ||
    rect1.bottom < rect4.top ||
    rect1.top > rect4.bottom)
  console.log("Hit, obs 3" + overlap3);

  if (overlap1 == true) {
    obs0.classList.remove("hidden");
    deleteLive.removeChild(deleteLive.firstChild);
  }
  if (overlap2 == true) {
    obs1.classList.remove("hidden");
    deleteLive.removeChild(deleteLive.firstChild);
  }
  if (overlap3 == true) {
    obs2.classList.remove("hidden");
    deleteLive.removeChild(deleteLive.firstChild);
  }
  if (deleteLive.childElementCount == 0) {
    player.remove();
    alert("Game over");
  }
  if (rect1.x == 359 && rect1.y == 548.875) {
    alert("You made it !!!");
    player.remove();
  }
  console.log(rect1.x + "dd" + rect1.y);
});





