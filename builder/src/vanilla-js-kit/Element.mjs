export default class Element {
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
        const el1 = document.getElementById(selector);
        return el1 ? [el1] : [];
      case "tagname":
        return Array.from(document.getElementsByTagName(selector));
      case "classname":
        return Array.from(document.getElementsByClassName(selector));
      case "query":
        const el2 = document.querySelector(selector);
        return el2 ? [el2] : [];
      case "queryALL":
        return Array.from(document.querySelectorAll(selector))
      default:
        throw new Error(`Tipo inválido: "${type}". Use "id", "tagname", "classname", "query" ou "queryALL".`);
    }
  }
}