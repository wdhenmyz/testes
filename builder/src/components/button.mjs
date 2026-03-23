import { Template } from "../vanilla-js-kit/vanilla-kit.mjs";

export default class button extends Template {
    HTML(style, click) {
        return `
            <button style=${style} onclick="${click}">Button Page</button>
        `
    }

}