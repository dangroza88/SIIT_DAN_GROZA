import { gameContainer } from "./spaceship.js"


class Asteroid {

    constructor() {
        let asteroid = document.createElement("div");
        asteroid.setAttribute("class", "obs");
        asteroid.setAttribute("style", "left: " + Math.round(Math.random() * (gameContainer.clientWidth - 30) + 1) + "px; top:" + Math.round(Math.random() * (gameContainer.clientWidth - 30) + 1) + "px;");
        gameContainer.appendChild(asteroid);
        this.element = asteroid;
    }
    removeLastChild() {
        gameContainer.removeChild(gameContainer.lastChild);
    };

}


export default Asteroid;
