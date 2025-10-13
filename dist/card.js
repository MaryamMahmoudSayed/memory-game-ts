export class Card {
    constructor(index, value) {
        this.isFlipped = false;
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
