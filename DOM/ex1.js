console.log(window);

window.alert("Brincando com DOM");

alert(`Sua resolução é de ${window.innerHeight} x ${window.innerWidth}`)

//como utilizar atributos de um objeto 

let meuTitulo= document.getElementById('titulo');

if(confirm('Deixa uma mensagem')){
    let msg=prompt('Mensagem');
    meuTitulo.innerText=msg+"seu navegador é:"+window.navigator.vendor;
    meuTitulo.style.background='PINK';
}
else{
    meuTitulo.innerText='Sem mensagem';
    meuTitulo.style.background='#dedede';
}

//para ver tudo disponivel em navigator
console.log(window.navigator);




//meuTitulo.innerText='BILL';
//meuTitulo.style.background='#dedede';
/*let a=parseInt(prompt("Digita 1 "));
let i=0
if(a==1){
    while(i<=1200){
        document.write("Bora bill");
        i++;
    }
}
else{
    document.write("regarrega a pagina e digita só 1 seu safado");
}*/