import DOM from './DOM.mjs'

export default class Template {
    constructor(type, selector) {
        // carregar os elementos
        this.dom = new DOM(type, selector)

        // definir e renderizar o template
        this.stores = this.Store();
        this._render();
        this.FUNCTIONS(this.dom)
        
        const attributes = this.ATRIBUTTES()

        Object.entries(attributes).forEach(([att, value]) => {
            this.dom.attribute(att, value);
        });
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
        const html = this.HTML();
        const css = this.CSS();

        this.dom.innerHTML(html);
        this.dom.set(css);
    }
}