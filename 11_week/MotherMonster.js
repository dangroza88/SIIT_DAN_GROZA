


class Monster {
    constructor(location) {
    //   super();
    // debugger
      const monsterImg = document.createElement("img");
      monsterImg.style.top = "0px";
      monsterImg.style.left = "0px";
      const randomNumber = Math.floor(Math.random() * 11) + 1;
  
      monsterImg.src = `./monster/monster${randomNumber}.svg`;

    //   C:\Users\PC\Desktop\SIIT_dan.dev\SIIT_DAN_GROZA\monster\monster2.svg
  
      location.appendChild(monsterImg);
      monsterImg.classList.add('monster')
      this.element = monsterImg;
    }
  }

  export default Monster;