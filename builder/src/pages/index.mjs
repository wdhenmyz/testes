import { Template } from "../vanilla-js-kit/vanilla-kit.mjs";

import { Button } from "../components/components.mjs";

export default class index extends Template {
    HTML() {
        const { bt } = this.css;

        return `
            <h1>Home</h1>
            ${Button(bt, this.functions.helloWorld)}
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

new index('body')