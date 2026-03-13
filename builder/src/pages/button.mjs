import { Template } from "../vanilla-js-kit/vanilla-kit.mjs";

class button extends Template {
    HTML() {
        return `
            <button onclick="helloWorld()">Button Page</button>
        `
    }

    Style() {
        return `
            button {
                background-color: blue;
                color: white;
            }
        `
    }

    Script() {
        return ` 
            console.log('Button Page')

            function helloWorld() {
                console.log('Hello World')
            }
        `
    }
}

new button()