//como criar elementos
//crie um elemento do tipo li
//define a classe css
//define o id
//adicione um atributo
//adciona um texto

let novoItemLista=document.createElement('li');//criando o elemento li

novoItemLista.id='novo-item';//define o id do novo elemento

novoItemLista.className='collection-item';//define a classe css do novo elemento

novoItemLista.setAttribute('title', 'Novo item na lista');//adiciona um atributo

novoItemLista.appendChild(document.createTextNode('Fazer exercício físico'));//adiciona um node filho

let elementoAncora=document.createElement('a');//Criar sub elementos

elementoAncora.className='delete-item secondary-content';
elementoAncora.setAttribute('href', '#');

//criar um elemento <i>
let elementoIcone= document.createElement('i');
elementoIcone.className='fa fa-remove';

//adiciona o <i> dentro do <A>
elementoAncora.appendChild(elementoIcone);

//adiona o <a> em <li>
novoItemLista.appendChild(elementoAncora);

//como capturar o <ul> com QuerySelector
// let elementoUele=document.querySelector('ul.collection');

let elementoUele=document.getElementsByClassName('collection');

elementoUele[0].appendChild(novoItemLista);