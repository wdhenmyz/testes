//import { checkWinner } from "./checkWinner.mjs";

export default class TicTacToe {
    constructor (state, gameStore, boardEl, statusEl, restartBtn) {
        this.renderBoard(state, gameStore, boardEl)
        this.renderStatus(state, statusEl)

        // Botão reiniciar
        restartBtn.onclick = () => {
            gameStore.set({
                board: Array(9).fill(""),
                current: "X",
                winner: null,
            });
        };
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
    
            const winner = this.checkWinner(newBoard);
    
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

    checkWinner(board) {
        const wins = [
            [0, 1, 2], // linhas
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6], // colunas
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8], // diagonais
            [2, 4, 6],
        ];

        for (const [a, b, c] of wins) {
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a]; // 'X' OU 'O'
            }
        }

        // empate
        if (board.every(c => c !== "")) return "draw";

        return null;
    }
}