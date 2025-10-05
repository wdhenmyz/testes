import DOM from '../DOM.mjs'

export default class Page {
    constructor(type, selector) {
        this.dom = new DOM(type, selector)

        this.html = this.HTML();
        this.css = this.CSS();

        this.load(this.html, this.css);
    }

    HTML() {}

    CSS() {}

    FUNCTIONS(dom) {}

    load(html, css) {
        this.dom.innerHTML(html);
        this.dom.set(css);
        this.FUNCTIONS()
    }
}