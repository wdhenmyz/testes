import Template from "../DOM_kit/Template.js";
import { Span } from "./components/Span.js"; 

export default class HomePage extends Template {
    constructor () {
        super('id', 'app')

        this.span = Span("tagname",'span')
    }

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
        Span("tagname",'span')
    }
}

new HomePage()