let bntCalcular=document.getElementById('calcular');

//esse método espera uma função e um parametro(escutador de eventos)
bntCalcular.addEventListener('click', function(evento){
    evento.preventDefault();

    let servico=document.getElementById('servico');
    let prazo=document.getElementById('prazo');
    let resultado=document.getElementById('resultado');

    let preco=calcularPreco(servico.value, prazo.value);

    resultado.innerText=`O serviço ficará em:${preco}`;
    
    console.log(evento);
});

function calcularPreco(servico, prazo){

    let tabela=[['$100','$200','$300']
    ,['$400','$500','$600']
    ,['$700','$800','$900']];
    return tabela[servico][prazo];

}
//faça o mesmo exercicio do serviços

// let servico=document.getElementById('servico');
// let prazo=document.getElementById('titulo');
// let resultado=document.getElementById('resultado');


// let tabela=[['$100','$200','$300','$400','$500','$600','$700','$800','$900']];


// if(servico>=0 && prazo>=0){
//         resultado.innerText("O serviço ficará em: "+[tabela][servico][prazo]);
// }
// else{
//     alert("ERRO");
// }
// function validaEntrada(){
//     return dadoUsuario>= 0 && dadoUsuario<=2 ? true : false;
// }














/*ou fazer assim
bntCalcular.addEventListener('click', executa(){
    function executa(evento){
        console.log(evento);
    }
})*/
console.log(bntCalcular);