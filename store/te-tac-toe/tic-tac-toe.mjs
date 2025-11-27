import { checkWinner } from "./checkWinner.mjs";

export default class TicTacToe {
    constructor (state, gameStore, boardEl, statusEl) {
        this.renderBoard(state, gameStore, boardEl)
        this.renderStatus(state, statusEl)
    }

    // --------- RENDERIZA TABULEIRO ---------
    renderBoard(state, gameStore, boardEl) {
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
    renderStatus(state, statusEl) {
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
}