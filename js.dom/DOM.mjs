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
  // permite definir a posição onde o conteúdo será inserido
  append(content, position = 'beforeend') {
    const validPositions = ['beforeend', 'afterbegin', 'beforebegin', 'afterend'];
    if (!validPositions.includes(position)) {
      throw new Error(
        `Posição inválida: "${position}". Use ${validPositions.join(', ')}.`
      );
    }

    // Permite adicionar tanto strings HTML quanto elementos DOM
    /* 
      nota, insertAdjacentHTML tem risco de html injection
      tenha cuidado ao usar com conteúdo dinâmico
    */
    this.elements.forEach(el => {
      if (content instanceof Element) {
        // Clona o elemento para múltiplos usos
        el.insertAdjacentElement(position, content.cloneNode(true));
      } else if (typeof content === 'string') {
        el.insertAdjacentHTML(position, content);
      } else {
        throw new Error('Content deve ser uma string ou um Element.');
      }
    });
  }

  // remove o elemento do DOM (em todos os elementos encontrados)
  remove() {
    this.elements.forEach(el => {
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    });
  }

  // adiciona um nó (elemento) como filho de outro (em todos os elementos encontrados)
  appendChild(element, content) {
    const childElement = document.createElement(`${element}`);
    childElement.textContent = content;

    this.elements.forEach(el => {
      el.appendChild(childElement);
    });
  }

  // remove um filho específico de um elemento pai (em todos os elementos encontrados)
  removeChild(type, selector) {
    const children = this._getElements(type, selector);

    this.elements.forEach(parent => {
      children.forEach(child => {
        if (parent.contains(child)) {
          parent.removeChild(child);
        }
      });
    });
  }

  // substitui um filho por outro (em todos os elementos encontrados)
  replaceChild(before = [], after = []) {
    const antigos = this._getElements(before[0], before[1]);

    this.elements.forEach(parent => {
      antigos.forEach(antigo => {
        const novo = document.createElement(after[0]);

        novo.textContent = after[1];
        if (parent.contains(antigo)) {
          parent.replaceChild(novo, antigo);
        }
      });
    });
  }

  // variação do método innerhtml, para ser usado em prototipagem e testes em html
  // a variável enabled define se sandbox vai ser ativado ou não
  // enabled naturalmente sera true, se for false nada ocorrerá
  sandbox(content, enabled = true) {
    if (enabled) {
      this.innerHTML(content)
    }
  }
  //////////////////////////////////////////////

  //// funções de manipulação de eventos ///////
  // adiciona um evento (em todos os elementos encontrados)
  addEvent(event, callback) {
    this.elements.forEach(el => {
      el.addEventListener(event, callback);
    });
  }

  // remove um evento (em todos os elementos encontrados)
  removeEvent(event, callback) {
    this.elements.forEach(el => {
      el.removeEventListener(event, callback);
    })
  }
}