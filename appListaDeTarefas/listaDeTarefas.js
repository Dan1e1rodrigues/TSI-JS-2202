const inputTarefa = document.querySelector('#tarefa');
const btnAddtarefa = document.querySelector('.btn');
const listaDeTarefas = document.querySelector('.collection');
const filtroDeTarefa = document.querySelector('#filtro');
const btnLimpaTudo = document.querySelector('.limpar-tarefas');

function carregaMonitoresDeEventos(){

    document.addEventListener('DOMContentLoaded', recuperaTarefas);

    //EVENTO para adicionar a tarefa
    btnAddtarefa.addEventListener('click', adicioneTarefa);
    
    //evento para fazer o x funcionar(apagar tarefa)
    listaDeTarefas.addEventListener('click', apagarTarefa);

    //evento para limpar toda lista
    btnLimpaTudo.addEventListener('click', apagarTudo);

    filtroDeTarefa.addEventListener('keyup', filtrar);
}
carregaMonitoresDeEventos();

function recuperaTarefas(evento){
   
    //recupera dados do localStorage
    let tarefas = localStorage.getItem('tarefas');
    
    //verifica se há dados recuperados, se não existir transforma em vetor
    if(tarefas == null){

        tarefas = [];
    }
    tarefas = JSON.parse(tarefas);

    tarefas.forEach(function(tarefa){
        const LI = document.createElement('li');
        LI.className='collection-item';
        LI.appendChild(document.createTextNode(tarefa));
    
        //cria aonde vai ficar o x para apagar a tarefa    
        const A =  document.createElement('a');
        A.className = 'apaga-tarefa secondary-content';
        
        //cria icone com o x para apagar a tarefa
        const I =  document.createElement('i');
        I.className = 'fa fa-remove';
    
        //monta o elemento li para colocar um ul
        A.appendChild(I);
        LI.appendChild(A);
        listaDeTarefas.appendChild(LI);
    })

}

function filtrar(evento) {

    //capturamos o que o usuario esta digitando.
    const procurado = evento.target.value.toLowerCase();
    //captura todos os elemetentos Li de uma vez.
    const tarefas = document.querySelectorAll('.collection-item');
    //para cada terefa busque a string desejada.
    tarefas.forEach(function(tarefa) {
        // recuperamos apenas o texto do elemento
        //li aonde está a tarefa. 
        const TextoTarefa = tarefa.innerText;
        // prucurando a string digitada no filtro
        // no texto que esta no <li>
        if(TextoTarefa.toLowerCase().indexOf(procurado) != -1) {
                
            tarefa.style.displays = 'block';
            
        } else {
            
            tarefa.style.displays = 'none';
        }
    });

}

function apagarTudo(evento){
    
   evento.preventDefault();
   listaDeTarefas.innerHTML = '';

   localStorage.removeItem('tarefas');
}


function apagarTarefa(evento){
    
   //se o elemento pai tiver a classe apaga-tarefa, ou seja, for  elemento 'a', apague li, ou seja, a tarefa

    if(evento.target.parentElement.classList.contains('apaga-tarefa')){
        
        //apaga o elemento pai do A ou seja, o li pois o elemento alvo do evento foi o li
        evento.target.parentElement.parentElement.remove();
        apagarDolocalStorage(evento.target.parentElement.parentElement)
    }
    

}

function  apagarDolocalStorage(tarefa){

    /*
    recuperar o que já existe no localStorage
    transformar em um objeto JSON, não uma string
    fazer um looping para buscar tarefa
    retirar tarefa ao objeto JSOn
    gravar o objeto JSON no localStorage 
    */
   let tarefaParaSerApagada = tarefa.innerText;
   let tarefas = [];

    //recuperar o que já existe no localStorage
   if(localStorage.getItem('tarefas') != null ){

    //transformar em um objeto JSO, não uma string
    tarefas = JSON.parse(localStorage.getItem('tarefas'));
   }


   //fazer um looping para buscar tarefa
   tarefas.forEach(function(tarefa, indice){
    if(tarefaParaSerApagada == tarefa){

        //apagamos a tarefa igual a tarefa que o usuário clicou para apagar
        tarefas.splice(indice, 1)
        }

   });
   //gravar o objeto JSON no localStorage novamente
   localStorage.setItem('tarefas', JSON.stringify(tarefas));

}
function adicioneTarefa(evento){
    evento.preventDefault();

    if(inputTarefa.value === '' ){
        alert('Entre com uma tarefa');

    }
    else{
    //cria li com a nova tarefa
    const LI = document.createElement('li');
    LI.className='collection-item';
    LI.appendChild(document.createTextNode(inputTarefa.value));

    //cria aonde vai ficar o x para apagar a tarefa    
    const A =  document.createElement('a');
    A.className = 'apaga-tarefa secondary-content';
    
    //cria icone com o x para apagar a tarefa
    const I =  document.createElement('i');
    I.className = 'fa fa-remove';

    //monta o elemento li para colocar um ul
    A.appendChild(I);
    LI.appendChild(A);
    listaDeTarefas.appendChild(LI);
    

    gravarTarefa(inputTarefa.value);
    inputTarefa.value = '';
    
    }
}

function gravarTarefa(tarefa){
    let tarefas = [];
    
    //recupera tarefas ja gravadas no localStorage
    let tarefaDoStorage = localStorage.getItem('tarefas');

    //se localStorage já tiver alguma informação
    // faz o parse da string JSON para um objeto JSON
    if(tarefaDoStorage != null){
        
        tarefas = JSON.parse(tarefaDoStorage);
    }
    //adiciona a tarefa ao JSON já existente
    tarefas.push(tarefa);
    //Grava o novo JSON no localStorage
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}