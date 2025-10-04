import DOM from "../DOM.mjs"



export default class Page {
    constructor(selector, element) {
        this.tabela = new DOM(selector, element)
        this.page = this.html

        this.tabela.innerHTML(this.page)
        this.tabela.set(this.css)
    }

    html = `
        <section id="red"></section>
        <section id="blue"></section>
        <section id="green"></section>
        <section id="yellow"></section>
    `

    css = {
        display: 'grid',
        'grid-template-columns': 'auto auto',

        height: '600px',
        width: '600px',
        backgroundColor: 'black'
    }
}