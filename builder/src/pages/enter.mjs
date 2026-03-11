import { Template } from "../vanilla-js-kit/vanilla-kit.mjs";

export default class enter extends Template {
    HTML() {
        return `
            <h1>enter page</h1>
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
        return ` console.log('enter page') `
    }
}

new enter()//.Render()