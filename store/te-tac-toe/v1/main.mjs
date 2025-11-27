import Store from "../../store.mjs";
import { checkWinner } from "../checkWinner.mjs";

const gameStore = new Store({
  board: Array(9).fill(""),
  current: "X",
  winner: null,
});

const boardEl = document.getElementById("board");
const statusEl = document.getElementById("status");
const restartBtn = document.getElementById("restart");

// --------- RENDERIZA TABULEIRO ---------
function renderBoard(state) {
  boardEl.innerHTML = ""; // limpa

  state.board.forEach((value, i) => {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.textContent = value;

    cell.onclick = () => {
        if (state.winner || state.board[i]) return;

        const newBoard = [...state.board];
        newBoard[i] = state.current;

        const winner = checkWinner(newBoard);

            gameStore.set({
                board: newBoard,
                current: state.current === "X" ? "O" : "X",
                winner: winner, // null, "X", "O", ou "draw"
            });
        };


    boardEl.appendChild(cell);
  });
}

// --------- RENDERIZA STATUS ---------
function renderStatus(state) {
  if (state.winner === "draw") {
    statusEl.textContent = "Empate!";
    return;
  }

  if (state.winner) {
    statusEl.textContent = `Vitória de: ${state.winner}`;
    return;
  }

  statusEl.textContent = `Vez de: ${state.current}`;
}


// Inscrição reativa
gameStore.subscribe(state => {
  renderBoard(state);
  renderStatus(state);
});

// Inicializa
renderBoard(gameStore.get());
renderStatus(gameStore.get());

// Botão reiniciar
restartBtn.onclick = () => {
  gameStore.set({
    board: Array(9).fill(""),
    current: "X",
    winner: null,
  });
};