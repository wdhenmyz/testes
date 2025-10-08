import DOM from './DOM.mjs'

export default class Template {
    constructor(type, selector) {
        this.dom = new DOM(type, selector)

        this.html = this.HTML();
        this.css = this.CSS();

        this.load(this.html, this.css, this.dom);
    }

    HTML() {
        return ``
    }

    CSS() {
        return {}
    }

    FUNCTIONS(dom) {}

    load(html, css, dom) {
        this.dom.innerHTML(html);
        this.dom.set(css);
        this.FUNCTIONS(dom)
    }
}