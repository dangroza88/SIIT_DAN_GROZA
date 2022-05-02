console.log("1 2 3 ...go!");

import Monster from './MotherMonster.js';
import { gamecontainer } from './Movement.js';

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
    // bloodSpot.style.top = e.pageY + "px";
    // bloodSpot.style.left = e.pageX + "px";
    //   debugger
    if (monsterList.some(monsterList => monsterList.element === e.target)) score++;
    scoreBox.innerText = "SCORE: " + score;
    console.log(monsterList);
    console.log(e.target);
    console.log("score" + score)
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




