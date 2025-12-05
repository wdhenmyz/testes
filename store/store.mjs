export default class Store {
  constructor(initialState = {}, key = null) {
    this.key = key;
    this.listeners = new Set();

    // Estado inicial padrão com loading/error já incluídos
    const baseState = {
      loading: false,
      error: null,
      ...initialState
    };

    // Se tiver chave, tenta carregar
    if (key) {
      const saved = localStorage.getItem(key);
      this.state = saved ? { ...baseState, ...JSON.parse(saved) } : baseState;
    } else {
      this.state = baseState;
    }
  }

  // ---- GET ----
  get() {
    return structuredClone(this.state);
  }

  // ---- SET ----
  set(partialState) {
    this.state = { ...this.state, ...partialState };

    if (this.key) {
      localStorage.setItem(this.key, JSON.stringify(this.state));
    }

    this.notify();
  }

  // ---- SUBSCRIBE ----
  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  notify() {
    for (const cb of this.listeners) cb(this.get());
  }

  // ---- RESET ----
  reset() {
    this.state = {};
    if (this.key) localStorage.removeItem(this.key);
    this.notify();
  }

  // ---- LOAD ASSÍNCRONO ----
  async load(asyncFunction) {
    try {
      // inicia carregamento
      this.set({ loading: true, error: null });

      const result = await asyncFunction();

      // sucesso
      this.set({
        loading: false,
        error: null,
        data: result
      });

      return result;

    } catch (err) {
      // erro
      this.set({
        loading: false,
        error: err.message || "Erro desconhecido"
      });
      return null;
    }
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