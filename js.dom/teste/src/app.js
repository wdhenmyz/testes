import Template from '../DOM_kit/Template.js'

import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

import count_button from './components/button.js'

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
            <count class="card">
            </count>
            <p class="read-the-docs">
              Click on the Vite logo to learn more
            </p>
          </div>
        `
    }

    CSS() {
      return {
        'max-width': `1280px`,
        margin: '0 auto',
        padding: '2rem',
        'text-align': 'center'
      }
    }

    ATRIBUTTES() {
      return {
        id: 'app',
        class: 'app',
        title: 'app',
      }
    }

    FUNCTIONS() {
      new count_button('classname', 'card')
    }
}

new app ('tagname', 'app')