//como atualizar um elemento com 35

//criamos um elemento 
const novoTitulo=document.createElement('h2');

//colocamos as caracteristicas que desejamos
novoTitulo.id='task-title';
novoTitulo.appendChild(document.createTextNode('Nova Lista'));

//Capturamos o elemento HS atual (que está originalmente no html)
const tituloAtual=document.getElementById('task-title');

//capturamos o elemento mae/pai do elemento que queremos atualizar
let divMaeDoTitulo=document.getElementsByClassName('card-action');

//atualizamos o elemento 
divMaeDoTitulo[0].replaceChild(novoTitulo, tituloAtual);