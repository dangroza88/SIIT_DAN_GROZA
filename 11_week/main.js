console.log("1 2 3 ...go!");

import Monster from './MotherMonster.js';

const gamecontainer = document.querySelector(".game-container");
const scoreBox = document.querySelector(".score");
let score = 0;

// debugger;

const monsterList = []
for (let i = 0; i < 30; i++) {
    const monster = new Monster(gamecontainer);
    monsterList.push(monster);
}

setInterval(function () {
    for (let i = 0; i < monsterList.length; i++) {
        const monster = monsterList[i];
        moveMonster(monster);
    }
}, 500);

gamecontainer.addEventListener("click", (e) => {
    //   debugger
    if (monsterList.some(monsterList => monsterList.element === e.target))
    
    
        score++;
    else if (score > 0)
        score--;
    scoreBox.innerText = "SCORE: " + score;
});


function moveMonster(myMonster) {
    const movement = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown']
    const randomIndex = Math.floor(Math.random() * movement.length);
    const randomMove = movement[randomIndex];

    if (randomMove === "ArrowDown") {
        myMonster.moveDown()
    }
    if (randomMove === "ArrowLeft") {
        myMonster.moveLeft()
    }
    if (randomMove === "ArrowRight") {
        myMonster.moveRight()
    }
    if (randomMove === "ArrowUp") {
        myMonster.moveUp()
    }
}




