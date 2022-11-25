//Como apagar elementos
/*
const itens = document.querySelectorAll('li');

console.log(itens);

itens[1].remove();
itens[2].remove();
*/

//Outra forma de remover
const item = document.querySelector('ul');

console.log(item.firstElementChild.firstElementChild);

//item.remove();

item.firstElementChild.firstElementChild.remove();
