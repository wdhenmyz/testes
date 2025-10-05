import DOM from "./DOM.mjs";

const div = new DOM("id", "child");
let p = "<p id='child-paragraph'>mais um texto</p>"
div.append("<p id='mudar'>ola div com id child</p>");
div.append(p, "afterbegin");
//div.remove()
div.appendChild("p", "sou um paragrafo filho do div com id child");

//div.removeChild("tagname", "p");

const p2 = new DOM("id", "child-paragraph");
p2.set({ color: "red", backgroundColor: "yellow" });


div.replaceChild(["id", "mudar"], ["span", "novo texto"]);

const al = () => alert("Div clicada!");

div.addEvent("click", al)
    .removeEvent("click", al)
    .append(`<p>ola</p>`)

// new DOM('query', 'p').set({backgroundColor: 'purple'})
// new DOM('queryALL', 'span').set({backgroundColor: 'purple'})










