import { Template } from "../vanilla-js-kit/vanilla-kit.mjs";
import { head } from "../head/head1.mjs";
            
export default class teste extends Template {
                Head() {
                    return head({
                        title: "teste",
                        style: this.Style()
                    })
                }

                Body() {
                    return "<h1>teste ola</h1>"
                }
                
                Style() {
                    return "h1 { color: red; }"
                }

                Script() {
                    return "console.log('teste')"
                }
            }

            new teste('render')
            