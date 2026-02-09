import DOM from './DOM.mjs'

export default class Template {
    constructor(type, selector) {
        this.dom = new DOM(type, selector)
        this.html = this.HTML();
        this.css = this.CSS();

        this._load(this.html, this.css, this.dom);
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

    _load(html, css, dom) {
        this.dom.innerHTML(html);
        this.dom.set(css);
        this.FUNCTIONS(dom)

        const attributes = this.ATRIBUTTES()

        Object.entries(attributes).forEach(([att, value]) => {
            this.dom.attribute(att, value);
        });
    }
}