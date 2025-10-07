import Template from '../DOM_kit/Template.js'

import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import DOM from '../DOM_kit/DOM.mjs'

class app extends Template {
    HTML() {
        return `
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src="${viteLogo}" class="logo" alt="Vite logo" />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
              <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
            </a>
            <h1>Hello Vite + vanilla.js(com DOM_kit)!</h1>
            <div class="card">
              <button id="counter" type="button"></button>
            </div>
            <p class="read-the-docs">
              Click on the Vite logo to learn more
            </p>
          </div>
        `
    }

    CSS() {

    }

    FUNCTIONS() {
      setupCounter(new DOM('id', 'counter'))
    }
}

new app ('id', 'app')