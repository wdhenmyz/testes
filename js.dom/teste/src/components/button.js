import DOM from "../../DOM_kit/DOM.mjs";
import Template from "../../DOM_kit/Template";
import { setupCounter } from "../counter";

export default class count_button extends Template {
    HTML () {
        return `
            <button id="counter" type="button"></button>
        `
    }

    

    FUNCTIONS () {
        setupCounter(new DOM('id','counter'))
    }
}