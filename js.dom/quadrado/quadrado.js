import DOM from "../DOM.mjs"

const tabela = new DOM('id', 'quadrado')

tabela.innerHTML(`
    <section id="red"></section>
    <section id="blue"></section>
    <section id="green"></section>
    <section id="yellow"></section>
    `)

tabela.set({
    display: 'grid',
    'grid-template-columns': 'auto auto',

    height: '600px',
    width: '600px',
    backgroundColor: 'black'
})

const quadrado = new DOM('tagname', 'section')
quadrado.set({
    height: '250px',
    width: '250px',
    backgroundColor: 'red'
})