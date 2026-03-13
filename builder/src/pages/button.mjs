import { Template } from "../vanilla-js-kit/vanilla-kit.mjs";

class button extends Template {
    HTML() {
        return `
            <h1>Button Page</h1>
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

new button().Render()