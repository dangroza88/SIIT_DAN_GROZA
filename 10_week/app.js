console.log("app loaded")
import Spaceship from './spaceship.js'
import MrPutin from './obtacles.js'
import { gameContainer } from "./spaceship.js"

document.getElementById("getShip").addEventListener("click", () => {
    gameContainer.innerHTML = '';
    globalThis.spaceship = new Spaceship;


})

document.getElementById("getObs").addEventListener("click", () => {
    setInterval(function () {
        if (gameContainer.getElementsByTagName('div').length > 0) {
            mrPutin.removeLastChild();
        }
        globalThis.mrPutin= new MrPutin;
    }, 800);
    const hitBtn = document.getElementById("getObs");
    hitBtn.remove();

})


document.getElementById("resetBtn").addEventListener("click", () => {
    location.reload();
})



document.addEventListener("keydown", function (eventKeydown) {
    if (eventKeydown.code === "ArrowDown") {
        spaceship.moveDown()
    }
    if (eventKeydown.code === "ArrowLeft") {
        spaceship.moveLeft()
    }
    if (eventKeydown.code === "ArrowRight") {
        spaceship.moveRight()
    }
    if (eventKeydown.code === "ArrowUp") {
        spaceship.moveUp()
    }

    const shipPosition = spaceship.element.getBoundingClientRect();
    const obsPosition = mrPutin.element.getBoundingClientRect();


    if (shipPosition.top <= obsPosition.bottom && shipPosition.bottom >= obsPosition.top && shipPosition.left <= obsPosition.right && shipPosition.right >= obsPosition.left) {
        alert("Bye Mr Putin!");
        location.reload();
    }


})
