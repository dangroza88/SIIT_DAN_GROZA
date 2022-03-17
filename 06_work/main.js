
const lives = 3;
const playGround = document.querySelector(".game-container");

setInterval(() => {
  
}, 1000);

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


setInterval( function () {
  // console.log(event);
  var obstaco = {
    left: parseInt(Math.random() * 370),
    top: parseInt(Math.random() * 400)
  }
  var obsDiv = document.createElement("div");
  playGround.appendChild(obsDiv);
  obsDiv.classList.add("obs"); 
  // obsDiv.setAttribute("style", "top: " + obstaco.top + "px; left: " + obstaco.left + "px;");
  obsDiv.setAttribute("style", "top: 0px; left: " + obstaco.left + "px;");
  console.log(obstaco);
}, 1000);



function del() {
  debugger
  var deleteLive = document.querySelector(".lives-container");

  deleteLive.removeChild(deleteLive.firstChild);

}




// console.log(obsRandom())

