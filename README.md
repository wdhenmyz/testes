# aqui estou testando algumas ideias 

## Element
* facilita o retorno de elementos/tags específicas, definindo o tipo e o valor da chamada

## DOM
* extende a classe Element
* um "jquery da vida" para simplificar o DOM usando classe em js (ignore style.mjs, ele está vazio e vou excluir ele depois)
* como isso é só DOM, ele pode ser usado em conjunto com tailwind, bootstrap e entre outros

## Template
* extende a classe DOM
* baseado em react, facilita a criação de componentes em puro javascript
* pela forma que é criada, recomendo ser usado mais para criar uma página

### nota: se voce quer que somente um elemento seja afetado por DOM ou Template, considere usar os tipos "id" ou "query" de Element.

## store
* baseado em react useState, cria stados de dados que podem ser compartilhados temporariamente e são perdidos quando a página é recarregada, ou pode definir uma chave de localstorage para persistir os dados retornados indefinidamente