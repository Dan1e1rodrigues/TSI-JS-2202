// sessionStorage.setItem('nome', 'Camila');
// sessionStorage.setItem('Sobrenome', 'Silva');


//como trabalhar com LOCAL STORAGE
let btn=document.getElementById('botao');

btn.addEventListener('click', mostrar);

function mostrar(evento){
    evento.preventDefault();

    let entrada = document.getElementById('entrada').value;
    let mostrar=document.getElementById('mostrar').innerText=valor;
    let valor=entrada.value;
    mostrar.innerText=valor;
    entrada.value='';


    //após obtermos o dado do usuário
    //vamos guardá-lo no local storage
    sessionStorage.setItem('dadoUsuario', valor);
}

//para recuperar o dado de local storage
//usamo o sessionStorage.getItem()
document.querySelector('mostrar').value=
    sessionStorage.getItem('dadoDoUsuario');