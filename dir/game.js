"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const card_js_1 = require("./card.js");
class Game {
    constructor(container, progressBar) {
        this.cards = [];
        this.first = null;
        this.second = null;
        this.busy = false;
        this.right = 0;
        this.flipSound = new Audio("audio/flip.mp3");
        this.successSound = new Audio("audio/success.mp3");
        this.failSound = new Audio("audio/fail.mp3");
        this.victorySound = new Audio("audio/win.mp3");
        this.bgMusic = new Audio("audio/music.mp3");
        let images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        images = images.sort(() => 0.5 - Math.random());
        this.totalPairs = images.length / 2;
        this.progressBar = progressBar;
        this.bgMusic.loop = true;
        this.bgMusic.volume = 0.3;
        container.addEventListener("click", () => {
            if (this.bgMusic.paused)
                this.bgMusic.play();
        }, { once: true });
        images.forEach((value, i) => {
            const card = new card_js_1.Card(i, value);
            this.cards.push(card);
            container.appendChild(card.element);
            card.element.addEventListener("click", () => this.handleClick(card));
        });
    }
    handleClick(card) {
        if (this.busy || card.isFlipped)
            return;
        card.flip();
        this.flipSound.play();
        if (this.first === null) {
            this.first = card.index;
        }
        else if (this.second === null) {
            this.second = card.index;
            this.busy = true;
            setTimeout(() => this.checkMatch(), 600);
        }
    }
    checkMatch() {
        const firstCard = this.cards[this.first];
        const secondCard = this.cards[this.second];
        if (firstCard.value === secondCard.value) {
            this.right++;
            this.successSound.play();
            this.updateProgress();
            if (this.right === this.totalPairs)
                this.victorySound.play();
            this.resetSelection();
        }
        else {
            setTimeout(() => {
                firstCard.hide();
                secondCard.hide();
                this.failSound.play();
                this.resetSelection();
            }, 1000);
        }
    }
    resetSelection() {
        this.first = null;
        this.second = null;
        this.busy = false;
    }
    updateProgress() {
        const percent = Math.round((this.right / this.totalPairs) * 100);
        this.progressBar.style.width = percent + "%";
        this.progressBar.setAttribute("aria-valuenow", percent.toString());
        this.progressBar.textContent = percent + "%";
    }
}
exports.Game = Game;
