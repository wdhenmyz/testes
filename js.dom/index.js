import DOM from "./DOM.mjs";

let style1, style2, style3;

const div1 = new DOM("tagname", "div");
style1 = {
  backgroundColor: "lightblue",
  color: "darkgreen",
  padding: "10px",
  border: "2px solid darkblue",
  borderRadius: "5px",
  fontFamily: "Arial, sans-serif",
  textAlign: "center"
}
div1.set(style1);

const div2 = new DOM("id", "teste");
style2 = {
  backgroundColor: "lightcoral",
  color: "white",
  padding: "15px",
  border: "2px solid darkred",
  borderRadius: "10px",
  fontFamily: "'Courier New', monospace",
  textAlign: "left"
}
div2.set(style2);

const div3 = new DOM("classname", "teste");
style3 = {
    backgroundColor: "purple",
    color: "white",
    padding: "20px",
    border: "2px solid darkmagenta",
    borderRadius: "15px",
    fontFamily: "'Times New Roman', serif",
    textAlign: "right"
}
div3.set(style3);

const div4 = new DOM("id", "change");
const html = `
  <h2>Conteúdo alterado!</h2>
  <p>Este conteúdo foi inserido usando o método innerHTML.</p>
  <p>a classe deste div foi mudada para changed usando o método attribute</p>
  <p>
    ele ganhara o style de div1(que é global a todos os div's)
    por não ter definido css para essa classe ou id
  </p>
  `
div4.innerHTML(html);
div4.attribute("class", "changed");
div4.append(`
  <p>Este parágrafo foi adicionado ao final do conteúdo existente usando o método append.</p>
  `);

// div3.append(html)

// div4.remove();
// div3.remove();
// div2.remove();
// div1.remove(); // apagando esta div também apaga as outras, pois são todas div's e o css dele é global para todas as div's

const al = () => alert("Div clicada!");

div4.addEvent("click", al);
div4.addEvent("mouseover", () => div4.set(style2));
div4.addEvent("mouseout", () => div4.set(style1));
//div4.removeEvent("click", al);