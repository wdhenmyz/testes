import { Template } from "../vanilla-js-kit/vanilla-kit.mjs";

export default class index extends Template {
    HTML() {
        return `
            <h1>Home</h1>
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
}

new index()