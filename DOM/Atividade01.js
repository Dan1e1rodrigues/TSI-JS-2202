console.log(window);

// window.alert("Boraa BILLL!!!");

// window.alert("Bora filho do BILLL!!!");

// window.alert("Bora Mulher do BILLL!!!");


deixar
let meuTitulo = document.getElementById('titulo');

if(confirm('Deixe uma mensagem! ')) {

    let msg = prompt('Mensagem');
    meuTitulo.innerText = msg + 'Navegador do: ' + window.navigator.vendor;
    meuTitulo.style.background = 'yellow';


}else{

    meuTitulo.innerText = 'Sem mensagem';
    meuTitulo.style.background = '#dedede';
}

console.log(window.navigator);

