//como apagar elementos

// const itens= document.querySelectorAll('li');

// console.log(itens);

// itens[1].remove();
// itens[2].remove();

//outra forma de remover
const item= document.querySelectorAll('ul');

console.log(item);

item.firstElementChild.firstElementChild.remove();