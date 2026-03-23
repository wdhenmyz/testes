export default class Template {
    constructor(body) {
        this.stores = this.Store();
        this.attributes = this.ATRIBUTTES();
        this.classes = this.class();
        this.functions = this.FUNCTIONS();
        this.css = this.Css();

        if (body === 'body') {
            this.Render('body')
        }
    }

    HTML () {
        return ``
    }

    Style () {
        return``
    }

    Css () {
        return {}
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

    Render(body) {
        const el = document.querySelector(body)

        el.innerHTML = this.HTML()

        const style = document.createElement("style")
        style.textContent = this.Style()
        document.head.appendChild(style)

        const script = document.createElement("script")
        script.textContent = this.Script()
        document.body.appendChild(script)
    }
}