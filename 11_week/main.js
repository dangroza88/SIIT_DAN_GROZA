console.log("1 2 3 ...go!");
import Monster from './MotherMonster.js';

const gamecontainer = document.querySelector(".game-container");


// debugger;
const monsterList = []
for (let i = 0; i < 10; i++) {
  const monster = new Monster(gamecontainer);
  monsterList.push(monster);
}