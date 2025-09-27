import DOM from "./style.mjs";

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
div2.set({
  backgroundColor: "lightcoral",
  color: "white",
  padding: "15px",
  border: "2px solid darkred",
  borderRadius: "10px",
  fontFamily: "'Courier New', monospace",
  textAlign: "left"
});

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
  <p>Este conteúdo foi inserido dinamicamente usando o método html.</p>
  <p>a classe deste div foi mudada para changed</p>
  <p>
    ele ganhara o style de div1(que é global a todos os div's)
    por não ter definido css para essa classe ou id
  </p>
  `
div4.html(html);
div4.attribute("class", "changed");
