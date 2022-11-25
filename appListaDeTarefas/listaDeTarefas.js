const entradaTarefa = document.querySelector('#tarefa');
const btnAddTarefa = document.querySelector('.btn');
const listaDeTarefas = document.querySelector('.collection');
const filtroDeTarefa = document.querySelector('#filtro');
const btnLimpaTudo = document.querySelector('.limpar-tarefas');

function carregaMonitoresDeEventos(){

    //Quando a página for carregada, chama recuperaTarefas
    document.addEventListener('DOMContentLoaded', recuperaTarefas);
    //evento para adicionar a tarefa
    btnAddTarefa.addEventListener('click', adicionarTarefa);
    //evento para fazer o x funcionar (apagar uma única tarefa)
    listaDeTarefas.addEventListener('click', apagarTarefa);
    //evento para limpar toda a lista
    btnLimpaTudo.addEventListener('click', apagarTudo);
    //evento para filtrar as tarefas
    filtroDeTarefa.addEventListener('keyup', filtrar);
}
carregaMonitoresDeEventos();

function recuperaTarefas(evento){

    //recupera dados do localStorage
    let tarefas = localStorage.getItem('tarefas');

    //Verifica se há dados recuperados,
    //se não existir transforma em vetor
    if(tarefas == null){
        tarefas = [];
    }

    tarefas = JSON.parse(tarefas);

    tarefas.forEach(function(tarefa){

        //cria li com a nova tarefa
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(tarefa));

        //cria a onde vai ficar o x para apagar a tarefa
        const a = document.createElement('a');
        a.className = 'apaga-tarefa secondary-content';

        //cria ícone com x para apagar a tarefa
        const i = document.createElement('i');
        i.className = 'fa fa-remove';

        //monta o elemento li para colocar em ul
        a.appendChild(i);
        li.appendChild(a);
        listaDeTarefas.appendChild(li);
    });
}

function filtrar(evento){

    //capturamos o que o usuário está digitando
    //passando tudo para minúsculo
    const procurado = evento.target.value.toLowerCase();
    //capturamos todos os elementos <li> existentes 
    const tarefas = document.querySelectorAll('.collection-item');

    //Para cada tarefa existente, busque a string
    //desejada
    tarefas.forEach(function(tarefa){

        //Recuperamos apenas o texto do elemento 
        //<li> onde está a tarefa
        textoTarefa = tarefa.innerText;

        //Procuramos a string digitada no filtro
        //no texto que está no <li>
        if( textoTarefa.toLowerCase().indexOf(procurado) != -1 ){

            tarefa.style.display = 'block';
        }else{

            tarefa.style.display = 'none';
        }
    });
}

function apagarTudo(evento){
    evento.preventDefault();
    
    listaDeTarefas.innerHTML = '';   
    
    localStorage.removeItem('tarefas');
}

function apagarTarefa(evento){

    //se o elemento pai tiver a classe apaga-tarefa,
    //ou seja, for o elemento "a", apague li, ou seja, 
    //a tarefa
    if( evento.target.parentElement.classList.contains('apaga-tarefa') ){

        //apaga o elemento pai do "a", ou seja, o li, pois
        //o elemento alvo do evento foi o i 
        evento.target.parentElement.parentElement.remove();

        apagarDoLocalStorage(evento.target.parentElement.parentElement);
    }
}

function apagarDoLocalStorage(tarefa){

    let tarefaParaSerApagada = tarefa.innerText;

    let tarefas = [];

    //recuperar o que já existe no localStorage
    if( localStorage.getItem('tarefas') !== null ){

        //transformar em um objeto JSON, não uma string
        tarefas = JSON.parse(localStorage.getItem('tarefas'));
    }

    //fazer um looping para buscar tarefa
    tarefas.forEach(function(tarefa, indice){

        //se encontrarmos o que queremos apagar,
        //apagamos
        if(tarefaParaSerApagada == tarefa){  
            //retirar tarefa do objeto JSON
            //apagamos a tarefa igual a tarefa que o 
            //usuário clicou para apagar
            tarefas.splice(indice, 1);
        }
    });

    //gravar o objeto JSON no localStorage novamente 
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

function adicionarTarefa(evento){
    evento.preventDefault();

    //verifica se usuário entrou com uma tarefa
    if( entradaTarefa.value === '' ){
        alert('Entre com uma tarefa');
        return false;
    }

    //cria li com a nova tarefa
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(entradaTarefa.value));

    //cria a onde vai ficar o x para apagar a tarefa
    const a = document.createElement('a');
    a.className = 'apaga-tarefa secondary-content';

    //cria ícone com x para apagar a tarefa
    const i = document.createElement('i');
    i.className = 'fa fa-remove';

    //monta o elemento li para colocar em ul
    a.appendChild(i);
    li.appendChild(a);
    listaDeTarefas.appendChild(li);

    //gravar a tarefa no localStorage
    gravarTarefa(entradaTarefa.value);

    //apaga o input para entrada
    entradaTarefa.value = '';
}

function gravarTarefa(tarefa){

    let tarefas = [];

    //Recupera tarefas já gravadas no localStorage
    let tarefaDoStorage = localStorage.getItem('tarefas');

    if( tarefaDoStorage != null ){
        //Se localStorage já tiver alguma informação,
        //faz o parse da string JSON para um objeto JSON
        tarefas = JSON.parse(tarefaDoStorage);
    }

    //Adiciona a tarefa ao JSON já existente
    tarefas.push(tarefa);

    //Grava o novo JSON no localStorage
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}
