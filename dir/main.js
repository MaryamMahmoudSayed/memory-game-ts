"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game_js_1 = require("./game.js");
window.onload = () => {
    const container = document.getElementById("cards");
    const progressBar = document.getElementById("progress");
    const game = new game_js_1.Game(container, progressBar);
    document.getElementById("restartBtn").onclick = () => location.reload();
};
