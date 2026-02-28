import Store from "./Store.mjs";

export default class asyncStore extends Store {
  constructor(initialState = {}) {
    super(initialState);

    // Estado inicial padrão com loading/error já incluídos
    const baseState = {
      loading: false,
      error: null,
      ...initialState
    };

    this.state = baseState;

    // Se tiver chave, tenta carregar
    /*
    if (key) {
      const saved = localStorage.getItem(key);
      this.state = saved ? { ...baseState, ...JSON.parse(saved) } : baseState;
    } else {
      this.state = baseState;
    }
    */
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