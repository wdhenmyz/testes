import DOM from './DOM.mjs'

export default class Template {
    constructor(type, selector) {
        // carregar os elementos
        this.dom = new DOM(type, selector)

        // definir e renderizar o template
        this.stores = this.Store();
        this._applyAttributes();
        this._render();
    }

    HTML() {
        return ``
    }

    CSS() {
        return {}
    }

    ATRIBUTTES() {
        return {}
    }

    FUNCTIONS(dom) {}

    Store () {
        return {}
    }

    _render() {
        this.dom.innerHTML(this.HTML());
        this.dom.set(this.CSS());
        this.FUNCTIONS(this.dom)
    }

    _applyAttributes() {
        const attributes = this.ATRIBUTTES();
        Object.entries(attributes).forEach(([att, value]) => {
            this.dom.attribute(att, value);
        });
    }
}