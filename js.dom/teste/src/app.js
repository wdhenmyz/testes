import Template from './DOM_kit/Template.js'
import Store from './DOM_kit/store.mjs'

import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

import count_button from './components/button.js'
import DOM from './DOM_kit/DOM.mjs'

class app extends Template {
    HTML() {
        const {count} = this.stores;

        return `
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src="${viteLogo}" class="logo" alt="Vite logo" />
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
              <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
            </a>
            <h1>Hello Vite + vanilla.js(com DOM_kit)!</h1>

            <countButton class="card"></countButton>
            <countButton class="card"></countButton>

            <countCard class="card">
              <button id="counter1" type="button">
                count is: ${count.get().count1}
              </button>
            </countCard>
            <countCard class="card">
              <button id="counter2" type="button">
                count is: ${count.get().count2}
              </button>
            </countCard>

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
      new count_button('tagname', 'countButton')

      const {count} = this.stores;

      const counter1 = new DOM('id', 'counter1').addEvent('click', () => {
        count.set({ count1: count.get().count1 + 1})
        counter1.innerHTML(`count is: ${count.get().count1}`);
      });

      const counter2 = new DOM('id', 'counter2').addEvent('click', () => {
        count.set({ count2: count.get().count2 + 1})
        counter2.innerHTML(`count is: ${count.get().count2}`);
      });
    }

    Store() {
      return {
        count: new Store({ count1: 0, count2: 0 })
      }
    }
}

new app ('tagname', 'app')