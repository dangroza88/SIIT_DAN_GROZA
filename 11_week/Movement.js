
class ElementMove {

  moveRight() {
    const oldLeft = parseInt(this.element.style.left);
    const newLeft = oldLeft + 30;
    if (newLeft <= 770) {
      this.element.style.left = newLeft + "px";
    }
  }

  moveDown() {
    const oldTop = parseInt(this.element.style.top);
    const newTop = oldTop + 30;
    if (newTop <= 770) {
      this.element.style.top = newTop + "px";
    }
  }

  moveLeft() {
    const oldLeft = parseInt(this.element.style.left);
    const newLeft = oldLeft - 30;
    if (newLeft >= 0) {
      this.element.style.left = newLeft + "px";
    }
  }

  moveUp() {
    const oldTop = parseInt(this.element.style.top);
    const newTop = oldTop - 30;
    if (newTop >= 0) {
      this.element.style.top = newTop + "px";
    }
  }
}

export default ElementMove;