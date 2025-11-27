export default class Store {
  constructor(initialState = {}) {
    this.state = initialState;
    this.listeners = new Set();
  }

  // Retorna o estado atual (imutável)
  get() {
    return structuredClone(this.state); // evita mutação direta
  }

  // Atualiza o estado e notifica ouvintes
  set(partialState) {
    this.state = { ...this.state, ...partialState };
    this.notify();
  }

  // Inscreve um callback (ex: para atualizar DOM)
  subscribe(callback) {
    this.listeners.add(callback);
    // Retorna uma função para cancelar a inscrição
    return () => this.listeners.delete(callback);
  }

  // Notifica todos os inscritos
  notify() {
    for (const callback of this.listeners) callback(this.get());
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