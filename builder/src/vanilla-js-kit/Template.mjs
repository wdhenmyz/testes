export default class Template {
    constructor(render) {
        this.attributes = this.Attributes();
        this.classes = this.class();
        this.functions = this.Functions();
        this.css = this.Css();

        if (render === 'render') {
            this.Render()
        }
    }

    Head () {
        return ``
    }

    Body () {
        return ``
    }

    Style () {
        return``
    }

    Script () {
        return``
    }

    Attributes () {
        return {}
    }

    class () {
        return {}
    }

    Css () {
        return {}
    }

    Functions () {
        return {}
    }

    Render() {
        const b = document.querySelector('body')
        const h = document.querySelector('head')

        h.innerHTML = this.Head()
        b.innerHTML = this.Body()

        const script = document.createElement('script');
        script.textContent = this.Script()
        b.appendChild(script)
    }
}
