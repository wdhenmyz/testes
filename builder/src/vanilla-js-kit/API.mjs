class API {
  constructor(baseURL = "") {
    this.baseURL = baseURL;
    this.reset();
  }

  reset() {
    this.method = "GET";
    this.endpoint = "";
    this.headers = {};
    this.queryParams = {};
    this.body = null;
    this.successHandler = null;
    this.errorHandler = null;
  }

  // --- definições da linguagem ---

  url(endpoint) {
    this.endpoint = endpoint;
    return this;
  }

  get(endpoint) {
    this.method = "GET";
    this.url(endpoint);
    return this;
  }

  post(endpoint) {
    this.method = "POST";
    this.url(endpoint);
    return this;
  }

  put(endpoint) {
    this.method = "PUT";
    this.url(endpoint);
    return this;
  }

  delete(endpoint) {
    this.method = "DELETE";
    this.url(endpoint);
    return this;
  }

  body(data) {
    this.body = data;
    return this;
  }

  query(params) {
    Object.assign(this.queryParams, params);
    return this;
  }

  auth(token) {
    this.headers["Authorization"] = `Bearer ${token}`;
    return this;
  }

  onSuccess(fn) {
    this.successHandler = fn;
    return this;
  }

  onError(fn) {
    this.errorHandler = fn;
    return this;
  }

  // --- executor ---
  async send() {
    const url = new URL(this.baseURL + this.endpoint);
    Object.entries(this.queryParams).forEach(([k, v]) =>
      url.searchParams.append(k, v)
    );

    const options = {
      method: this.method,
      headers: {
        "Content-Type": "application/json",
        ...this.headers
      }
    };

    if (this.body) {
      options.body = JSON.stringify(this.body);
    }

    try {
      const res = await fetch(url, options);
      const data = await res.json();

      if (this.successHandler) this.successHandler(data);

      this.reset();
      return data;

    } catch (err) {
      if (this.errorHandler) this.errorHandler(err);

      this.reset();
      return null;
    }
  }
}