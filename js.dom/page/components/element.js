import DOM from "../../DOM_kit/DOM.mjs"

export const Element = (type, selector) => {
    const element = new DOM(type, selector)

    element.set({
        width: '400px',
        height: '80px',
        backgroundColor: 'blue',
        margin: '2px 0px 2px 0px',
    })
}