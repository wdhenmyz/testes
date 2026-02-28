export default class Store {
  constructor(initialState = {}, key = null) {
    this.key = key;
    this.listeners = new Set();

    // Se tiver chave, tenta carregar
    if (key) {
      const saved = localStorage.getItem(key);
      this.state = saved ? {...JSON.parse(saved)} : initialState;
    } else {
      this.state = initialState;
    }
  }

  // ---- GET ----
  get(val = null) {
    if (typeof val === "string") {
        return structuredClone(this.state[val]);
    } else {
        return structuredClone(this.state);
    }
  }

  // ---- SET ----
  set(partialState) {
    this.state = { ...this.state, ...partialState };

    if (this.key) {
      localStorage.setItem(this.key, JSON.stringify(this.state));
    }

    this.notify();
  }

  // ---- RESET ----
  reset() {
    this.state = {};
    if (this.key) localStorage.removeItem(this.key);
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
}