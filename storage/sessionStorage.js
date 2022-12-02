// sessionStorage.setItem('nome', 'Camila');
// sessionStorage.setItem('Sobrenome', 'Silva');


//como trabalhar com LOCAL STORAGE
let btn=document.getElementById('botao');

btn.addEventListener('click', mostrar);

function mostrar(evento){
    evento.preventDefault();

    let entrada = document.getElementById('entrada');
    let mostrar = document.getElementById('mostrar');
    mostrar.innerText = entrada.value;
    entrada.value = '';

    //após obtermos o dado do usuário
    //vamos guardá-lo no local storage
    sessionStorage.setItem('dadodoUsuario', valor);
}

//para recuperar o dado de local storage
//usamo o sessionStorage.getItem()
document.querySelector('#mostrar').innerText=
    sessionStorage.getItem('dadoDoUsuario');

//guardar varias informações dentro do sessionstorage
let vetor=['pera','banana','manga'];

//inserir o dado no nosso minibanco
//para guardar algo que não seja uma string no localStorage ou sessionSota
//temos que converter para string. com o metodo json.stringify() transformamos
//vetores e objetos em string
sessionStorage.setItem('frutas', JSON.stringify(vetor));


/*Para recuperar uma string JSON do localStorage
ou sessionStorage e transformar em um objeto
ou vetor novamente, use json*/
let recuperaDado=JSON.parse(sessionStorage.getItem('frutas'));
recuperaDado[3]='morango';
recuperaDado[1]='parchita';
console.log(recuperaDado);


//transforma o vetor em string para poder gravar em sessionstorage ou local
let strRecuperaDados=JSON.stringify(recuperaDado);
console.log(strRecuperaDados);

//atualiza o item frutas no session
sessionStorage.setItem('frutas', strRecuperaDados);