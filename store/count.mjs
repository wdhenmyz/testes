// count-store.js
import Store from "./store.mjs";

// Segundo parâmetro = chave para persistência localStorage
const countStore = new Store({ count: 0 }, "countStore");

// Atualiza o estado
countStore.set({ count: countStore.get().count + 1 });

// Acessa o estado atual
console.log("Contagem atual:", countStore.get().count);

// Inscreve uma função para reagir a mudanças
countStore.subscribe((state) => {
  console.log("Novo estado:", state.count);
});