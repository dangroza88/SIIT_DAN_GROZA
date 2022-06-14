import { gameContainer } from "./spaceship.js"


class MrPutin {

    constructor() {
        let mrPutin = document.createElement("div");
        mrPutin.setAttribute("class", "obs");
        mrPutin.setAttribute("style", "left: " + Math.round(Math.random() * (gameContainer.clientWidth - 30) + 1) + "px; top:" + Math.round(Math.random() * (gameContainer.clientWidth - 30) + 1) + "px;");
        gameContainer.appendChild(mrPutin);
        this.element = mrPutin;
    }
    removeLastChild() {
        gameContainer.removeChild(gameContainer.lastChild);
    };

}


export default MrPutin;
