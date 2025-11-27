import Store from "../store.mjs";
import TicTacToe from "./tic-tac-toe.mjs"

const gameStore = new Store({
  board: Array(9).fill(""),
  current: "X",
  winner: null,
});

const boardEl = document.getElementById("board");
const statusEl = document.getElementById("status");
const restartBtn = document.getElementById("restart");


// Inscrição reativa
gameStore.subscribe(state => {
  new TicTacToe(state, gameStore, boardEl, statusEl)
});

// Inicializa
new TicTacToe(gameStore.get(), gameStore, boardEl, statusEl)

// Botão reiniciar
restartBtn.onclick = () => {
  gameStore.set({
    board: Array(9).fill(""),
    current: "X",
    winner: null,
  });
};