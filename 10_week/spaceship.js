import ElementMove from "./move.js"
export const gameContainer = document.getElementById('game-container')

class Spaceship extends ElementMove {
    // #spaceshipElement;

    constructor() {
        super()
        let spaceship = document.createElement("img");
        spaceship.classList.add("spaceship");
        spaceship.style.top = "370px";
        spaceship.style.left = "180px";
        const randomShip = Math.floor(Math.random() * 3) + 1;
        console.log(randomShip);
        spaceship.src = `./spaceship${randomShip}.png`
        gameContainer.appendChild(spaceship);
        this.element = spaceship;
    }

}

export default Spaceship;