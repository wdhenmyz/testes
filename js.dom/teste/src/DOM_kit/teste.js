import DOM from "./DOM.mjs";

const teste = new DOM('id', 'teste')

teste.sandbox(`
    <span></span>
    <span></span>
    `, false)
// apague ou altere false para true para ver o html interno

teste.set({
    display: 'flex',
    'flex-direction': 'column',
    width: '500px',
    height: '500px',
    backgroundColor: 'darkblue'
})

const span = new DOM('tagname', 'span')
span.set({
    width: '500px',
    height: '200px',
    backgroundColor: 'yellow',
    'margin-bottom':'2px',
    'margin-top':'2px'
})