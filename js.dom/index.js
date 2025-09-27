import DOM from "./DOM.mjs";

const div1 = new DOM("tagname", "div");
div1.set({
  backgroundColor: "lightblue",
  color: "darkgreen",
  padding: "10px",
  border: "2px solid darkblue",
  borderRadius: "5px",
  fontFamily: "Arial, sans-serif",
  textAlign: "center"
});

const div2 = new DOM("id", "teste");
let style = {
  backgroundColor: "lightcoral",
  color: "white",
  padding: "15px",
  border: "2px solid darkred",
  borderRadius: "10px",
  fontFamily: "'Courier New', monospace",
  textAlign: "left"
}
div2.set(style);

const div3 = new DOM("classname", "teste");
div3.set({
    backgroundColor: "purple",
    color: "white",
    padding: "20px",
    border: "2px solid darkmagenta",
    borderRadius: "15px",
    fontFamily: "'Times New Roman', serif",
    textAlign: "right"
})

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

// div4.remove();
// div3.remove();
// div2.remove();
// div1.remove(); // apagando esta div também apaga as outras, pois são todas div's e o css dele é global para todas as div's