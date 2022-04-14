import { gameContainer } from "./spaceship.js"

// const container = document.getElementById("container")

class Asteroid {

    constructor() {
        let asteroid = document.createElement("div");
		asteroid.setAttribute("class", "obs");
		asteroid.setAttribute("style", "left: " + Math.round(Math.random() * gameContainer.clientWidth - 30) + "px; top:" + Math.round(Math.random() * gameContainer.clientWidth - 30) + "px;");
        // asteroid.setAttribute("style", "top: " + Math.round(Math.random() * gameContainer.clientWidth) + "px;");
        console.log(gameContainer.clientWidth);
		gameContainer.appendChild(asteroid);
        
        // asteroid.style.top = Math.round(Math.random() * gameContainer.clientWidth - 30) + "px;";
        // asteroid.style.left = Math.round(Math.random() * gameContainer.clientWidth - 30) + "px;";
        // console.log(gameContainer.clientHeight);
		// asteroid.setAttribute("onmousemove", "start = 2;");
        this.element = asteroid;
        // // if(gameContainer.lastChild.nodeType == 1){
        // //     gameContainer.removeChild(gameContainer.lastChild);

        // }





    //     let asteroid = document.createElement("div");
    //     asteroid.classList.add("obs");
    //     asteroid.style.top = "0px";
    //     asteroid.style.left = "0px";
    //     // const randomShip = Math.floor(Math.random() * 3) + 1;
    //     // spaceship.src =`./spaceship${randomShip}.png`
    //     gameContainer.appendChild(asteroid);
    //     this.element = asteroid;
    }
    removeLastChild() {
        gameContainer.removeChild(gameContainer.lastChild);
    };
    
}


export default Asteroid;



// var obsNum = setInterval(function () {
//     // console.log(event);
//     var obstaco = {
//       left: parseInt(Math.random() * 330),
//       top: parseInt(Math.random() * 40)
//     }
//     var obsDiv = document.createElement("div");
//     playGround.appendChild(obsDiv);
//     obsDiv.classList.add("obs");
//     // obsDiv.setAttribute("id", "obs" + i)
//     obsDiv.setAttribute("style", "top: " + obstaco.top + "px; left: " + obstaco.left + "px;");
//     // console.log(obstaco);
//     // i++;
//     // if (i >= 3) {
//     //   clearInterval(obsNum);
//     //   player.classList.remove("hidden");
//     }
//   }, 1000);