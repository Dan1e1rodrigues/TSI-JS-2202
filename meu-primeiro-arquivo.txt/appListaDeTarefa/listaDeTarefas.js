//Adicionar 
const entradaTarefa = document.querySelector('#tarefa');
const btnAddTarefa = document.querySelector('.btn');
const listaDeTarefas = document.querySelector('.collection');
const filtroDeTarefa = document.querySelector('#filtro');
const btnLimpaTudo = document.querySelector('.Limpar-tarefas');

function carregaMonitoresDeEventos(){

    //Evento para adicionar a terefa
    btnAddTarefa.addEventListener('click', adicioneTarefa);
    //evento para fazer  o x apagar uma tarefa 
    listaDeTarefas.addEventListener('click',apagarTarefa);
}
carregaMonitoresDeEventos();

function apagarTarefa(evento) {
    // console.log(evento.target);
    // Se o elemento pai tiver a classe apaga-tarefa 
    // ou seja se for o elemento 'a', apague li , ou seja 
    // a tarefa     
    if(evento.target.parentElement.classList.contains('apaga-tarefa')) {

        evento.target.parentElement.parentElement.remove();

    }
}

function adicioneTarefa(evento){
    evento.preventDefault();

    //verifica se o usuario entrou com uma tarefa
    if(entradaTarefa.value === '' ){

        alert('Entre com uma tarefa');
    }

//ciar li com a nova tarefa
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(entradaTarefa.value));

    //criar onde vai ficar o x para apagar a terefa
    const a =document.createElement('a');
    a.className = 'apaga-tarefa secondary-content';

    //cria icone com x para apagar a terefa
    const i = document.createElement('i');
    i.className = 'fa fa-remove';

    a.appendChild(i);
    li.appendChild(a);
    listaDeTarefas.appendChild(li);

    //apaga o input para entrada
    entradaTarefa.value = '';

}



