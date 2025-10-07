# primeira versão do DOM_kit

## DOM
* um "jquery da vida" para simplificar o DOM usando classe em js (ignore style.mjs, ele está vazio e vou excluir ele depois)
* como isso é só DOM, ele pode ser usado em conjunto com tailwind, bootstrap e entre outros

#### métodos atuais
* ## css

* set() -> define css diretamente
* addClass() -> adciona uma classe
* removeClass() -> remove uma classe
* toggleClass() -> alterna entre classes
---
* ## html

* innerHTML() -> altera o html interno
* atribute() -> manipula os atributtos de uma tag
* append() -> adiciona conteúdo, permite definir a posição
* remove() -> remove o elemento 
* appendChild() -> adiciona um elemento como filho de outro
* removeChild() -> remove um filho específico de um elemento pai
* replaceChild() -> substitui um filho por outro
* sandbox() -> usa "innerHTML" em prototipagem e testes de responsividade antes de escrever no html
* getText() -> retorna o textContent do elemento
---
* ## eventos

* addEvent() -> adiciona um evento
* removeEvent() -> remove um evento
---

## nota: se voce quer que somente um elemento seja manipulado pelo DOM, tenha certeza de usar só id do elemento em questão, se não, pode acontecer de mais de um elemento ser afetado

## template
* extensão do DOM que pode ser usado como base para renderizar páginas inteiras ou até só um componente
* possui 3 métodos principais HTML/CSS/FUNCTIONS que são carregados automáticamente através do quarto método load quando a classe é chamada
* nenhum dos 3 métodos são obrigatórios, vc pode usar até só um deles se quiser
### exemplo de usagem
```
import DOM from './DOM.mjs'

export default class Template {
    constructor(type, selector) {
        this.dom = new DOM(type, selector)

        this.html = this.HTML();
        this.css = this.CSS();

        this.load(this.html, this.css);
    }

    HTML() {
        return ``
    }

    CSS() {
        return {}
    }

    FUNCTIONS() {}

    load(html, css) {
        this.dom.innerHTML(html);
        this.dom.set(css);
        this.FUNCTIONS()
    }
}
```
em uma página
```
import DOM from "../DOM_kit/DOM.mjs";
import Template from "../DOM_kit/Template.js";
import { Span } from "./components/Span.js"; 

export default class HomePage extends Template {
    HTML() {
        return`
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        `;
    }

    CSS() {
        return{
            width: '400px',
            height: '400px',
            backgroundColor: 'red',

            display: 'flex',
            'flex-direction': 'column',
        };
    }

    FUNCTIONS() {
        Span(new DOM('tagname','span'))
    }
}

new HomePage('id', 'app')


// /Span.js
export const Span = (span) => {
    span.set({
        width: '400px',
        height: '80px',
        backgroundColor: 'blue',
        margin: '2px 0px 2px 0px',
    })
}
```