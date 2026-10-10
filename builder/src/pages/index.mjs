import { Template } from "../vanilla-js-kit/vanilla-kit.mjs";

import { Button } from "../components/components.mjs";
import { head } from "../head/head1.mjs";

export default class index extends Template {
    Head() {
        return head({
            title: "index",
            style: this.Style()
        })
    }

    Body() {
        const { bt } = this.css;

        return `
            <h1>Home ola</h1>
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

    Functions() {
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

new index('render')