export default class Template {
    constructor() {
        this.stores = this.Store();
        this.attributes = this.ATRIBUTTES();
        this.classes = this.class();
        this.functions = this.FUNCTIONS();
    }

    HTML () {
        return ``
    }

    Style () {
        return``
    }

    Script () {
        return``
    }

    ATRIBUTTES () {
        return {}
    }

    class () {
        return {}
    }

    Store () {
        return {}
    }

    FUNCTIONS () {
        return {}
    }

    Render() {
        const el = document.querySelector('body')

        el.innerHTML = this.HTML()

        const style = document.createElement("style")
        style.textContent = this.Style()
        document.head.appendChild(style)

        const script = document.createElement("script")
        script.textContent = this.Script()
        document.body.appendChild(script)
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