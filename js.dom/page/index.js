import Page from "./page.js";
import { Element } from "./components/element.js";

export default class HomePage extends Page {
    constructor () {
        super('id', 'app')

        this.span = Element("tagname",'span')
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
        
    }
}

new HomePage()