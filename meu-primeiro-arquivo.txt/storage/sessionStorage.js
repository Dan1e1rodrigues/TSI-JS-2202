document.getElementById("botao").addEventListener("click", (e) => {
    e.preventDefault();

    let input = document.getElementById("entrada");
    let saida = document.getElementById("mostrar");

    // Pegamos os dados obtidos no formulário e guardamos no localStorage
    sessionStorage.setItem("nomeUsuario", input.value);

    saida.innerText = input.value;
    input.value = "";
})

// Coloca o dado do localStorage no span ao recarregar a página
document.getElementById("mostrar").innerText = sessionStorage.getItem("nomeUsuario");

// Apaga o dado do localStorage
// localStorage.removeItem("nomeUsuario");

let vetor =['pera','banana','manga'];

//jogar formaçãõa no banco temporario 
sessionStorage.setItem('frutas',
                            JSON.stringify(vetor));

let recupDado = JSON.parse(
                            sessionStorage.getItem('frutas'));

//Alterações no vetor recuperado
//do sessionStorage
recupDado[3] = 'morango';
recupDado[1] = 'laranja';

//console.log(repupDado);

//transforma o vetor em string para poder
//gravar em sessionStorage ou localStorage
let strRecupeDados = JSON.stringify(recupDado);

//console.log(strRecupeDados);

//Atualiza o itemfruta no sessionStorage
sessionStorage.stItem('frutas', strRecupeDados );

console.log(recupDado);

//Como adicionar um novo item
