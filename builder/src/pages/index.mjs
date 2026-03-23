import { Template } from "../vanilla-js-kit/vanilla-kit.mjs";

import { button } from "../components/components.mjs";

export default class index extends Template {
    HTML() {
        const { bt } = this.css;

        const BT = new button();

        return `
            <h1>Home</h1>
            ${BT.HTML(bt, this.functions.helloWorld)}
        `
    }

    Style() {
        return `
            h1 {
                color: red;
            }
        `
    }

    Script() {
        return ` console.log('Home') `
    }

    FUNCTIONS() {
        return {
            helloWorld: "console.log('Hello World')"
        }
    }

    Css() {
        return {
            bt: '"background-color: blue; color: red;"'
        }
    }
}

new index('')