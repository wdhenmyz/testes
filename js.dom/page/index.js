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