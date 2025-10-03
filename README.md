# aqui estou testando algumas ideias 

## js.dom
* um "jquery da vida" para simplificar o DOM usando classe em js (ignore style.mjs, ele está vazio e vou excluir ele depois)
* como isso é só DOM, ele pode ser usado em conjunto com tailwind, bootstrap e entre outros

## versão 1
---
#### métodos atuais
* ## css

* set() -> define css diretamente
* addClass() -> adciona uma classe
* removeClass() -> remove uma classe
* toggleClass() -> alterna entre classes
---
* ## html

* innerHTML() -> altera o html interno
* atribute() -> manipula os atributtos de uma tag
* append() -> adiciona conteúdo, permite definir a posição
* remove() -> remove o elemento 
* appendChild() -> adiciona um elemento como filho de outro
* removeChild() -> remove um filho específico de um elemento pai
* replaceChild() -> substitui um filho por outro
* sandbox() -> usa "innerHTML" em prototipagem e testes de responsividade antes de escrever no html
---
* ## eventos

* addEvent() -> adiciona um evento
* removeEvent() -> remove um evento
---
## nota: se voce quer que somente um elemento seja manipulado pelo DOM, tenha certeza de usar só id do elemento em questão, se não, pode acontecer de mais de um elemento ser afetado
