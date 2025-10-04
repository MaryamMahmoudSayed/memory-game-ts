export class Card {
  index: number;
  value: number;
  element: any;
  isFlipped: boolean = false;

  constructor(index: number, value: number) {
    this.index = index;
    this.value = value;

    this.element = document.createElement("img");
    this.element.src = "images/back.jpg";
  }

  flip() {
    this.element.src = `images/${this.value}.jpg`;
    this.isFlipped = true;
  }

  hide() {
    this.element.src = "images/back.jpg";
    this.isFlipped = false;
  }
}
