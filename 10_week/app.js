console.log("app loaded")
import Spaceship from './spaceship.js'
import Asteroid from './obtacles.js'
import { gameContainer } from "./spaceship.js"

// const gameContainer = document.getElementById('game-container')
document.getElementById("getShip").addEventListener("click", () => {
    gameContainer.innerHTML='';
    globalThis.spaceship = new Spaceship;
    
    setInterval(function () {
        if (gameContainer.getElementsByTagName('div').length > 0 ) {
            obtacles.removeLastChild();
        }
        globalThis.obtacles = new Asteroid;
    }, 2000);

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


})
