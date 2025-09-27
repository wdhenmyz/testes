// DOM.mjs
export default class DOM {
  constructor(elementType, selector) {
    this.elements = this._getElements(elementType, selector);

    if (!this.elements || this.elements.length === 0) {
      throw new Error(`Nenhum elemento encontrado para ${elementType}: "${selector}"`);
    }
  }

  // método privado para identificar e capturar os elementos
  _getElements(type, selector) {
    switch (type) {
      case "id":
        const el = document.getElementById(selector);
        return el ? [el] : [];
      case "tagname":
        return Array.from(document.getElementsByTagName(selector));
      case "classname":
        return Array.from(document.getElementsByClassName(selector));
      default:
        throw new Error(`Tipo inválido: "${type}". Use "id", "tagname" ou "classname".`);
    }
  }

  //// funções de manipulação de estilos/css ////
  // aplica estilos (em todos os elementos encontrados)
  set(styles = {}) {
    this.elements.forEach(el => {
      Object.assign(el.style, styles);
    });
  }

  // adiciona/remova/troca classes
  addClass(...classes) {
    this.elements.forEach(el => el.classList.add(...classes));
  }

  removeClass(...classes) {
    this.elements.forEach(el => el.classList.remove(...classes));
  }

  toggleClass(className) {
    this.elements.forEach(el => el.classList.toggle(className));
  }
  ///////////////////////////////////////////////

  //// funções de manipulação de html ///////////
  // altera o conteúdo HTML (em todos os elementos encontrados)
  innerHTML(content) {
    this.elements.forEach(el => {
      el.innerHTML = content;
    });
  }

  // altera ou cria o conteúdo de um atributo (em todos os elementos encontrados)
  attribute(attribute, value) {
    this.elements.forEach(el => {
      el.setAttribute(attribute, value)
    });
  }

  // adiciona conteúdo HTML (em todos os elementos encontrados)
  append(content) {
    this.elements.forEach(el => {
      el.insertAdjacentHTML('beforeend', content);
    })
  }
  //////////////////////////////////////////////
}