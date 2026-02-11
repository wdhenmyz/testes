import DOM from "../DOM_kit/DOM.mjs";
import Template from "../DOM_kit/Template";

import Store from "../DOM_kit/store.mjs";

export default class count_button extends Template {
    HTML () {
        const {countStore} = this.stores;

        return `
            <button class="counterButton" type="button">count is: ${countStore.get().count}</button>
        `
    }

    FUNCTIONS () {
        const counterButton = new DOM('classname', 'counterButton');
        const {countStore} = this.stores;
        

        counterButton.addEvent('click', () => {
            countStore.set({ count: countStore.get().count + 1});
            counterButton.innerHTML(`count is: ${countStore.get().count}`);
        })
    }

    Store () {
        return {
            countStore: new Store({ count: 0 }, 'countStore')
        }
    }
}