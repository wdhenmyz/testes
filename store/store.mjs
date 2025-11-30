export default class Store {
  constructor(initialState = {}, key = null) {
    this.key = key; // chave opcional para salvar no localStorage
    this.listeners = new Set();

    // Se tiver chave, tenta carregar o estado salvo
    if (key) {
      const savedState = localStorage.getItem(key);
      this.state = savedState ? JSON.parse(savedState) : initialState;
    } else {
      this.state = initialState;
    }
  }

  // Retorna uma cópia imutável do estado atual
  get() {
    return structuredClone(this.state);
  }

  // Atualiza o estado parcialmente e salva se necessário
  set(partialState) {
    this.state = { ...this.state, ...partialState };

    // Se houver uma key, salva no localStorage
    if (this.key) {
      localStorage.setItem(this.key, JSON.stringify(this.state));
    }

    this.notify();
  }

  // Inscreve um callback para mudanças de estado
  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  // Notifica todos os inscritos
  notify() {
    for (const cb of this.listeners) {
      cb(this.get());
    }
  }

  // Limpa o estado e o armazenamento local
  reset() {
    this.state = {};
    if (this.key) localStorage.removeItem(this.key);
    this.notify();
  }
}

/*
const countStore = new Store({count: 0})

const { count } = countStore.get();

// Atualiza o estado
countStore.set({ count: count + 1 });

// Mostra no console o valor atualizado
console.log(countStore.get().count);
*/