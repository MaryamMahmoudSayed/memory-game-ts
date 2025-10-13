import { Game } from "./game.js";
window.onload = () => {
    const container = document.getElementById("cards");
    const progressBar = document.getElementById("progress");
    const game = new Game(container, progressBar);
    document.getElementById("restartBtn").onclick = () => location.reload();
};
