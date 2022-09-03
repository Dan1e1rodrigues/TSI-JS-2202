//Lembrar de colocar ";"
let vetor = ['Rodrigues', 'Aguiar', 'Marta', 'Yuri', 'Matheus', 'Pedro'];

//looping com vetor

for (var i = 0; i < vetor.length; i++) {
   console.log('Seu Sobrenome é '+ vetor[i] + "")
  };

//lenght, ele mostra a quantidade conteúdo 
//CUIDADO POSSIVEL VIRUS!!!
/*
for (var i = 0; i < vetor.length; i++) {
    vetor[i]=20;
   console.log('Seu Sobrenome é '+ vetor[i] + "")
  };
*/

//Foreach For = paraeach = cada 

//O forEach chama uma função, na qual vai esperar dois parametros na seguinte ordem: 1º valeu = "Valor" e 2º index
vetor.forEach(function (valor, indice){

    console.log(`${indice}: ${valor}`);
});

//Map

vetor.map(function(valor, indice){

    console.log(`${indice}: ${valor}`);
});

//A atividade de IMC já foi realizada, esta na branch ADO1
let peso = prompt('Qual e o seu peso');
let altura = prompt('Qual e a sua altura');

let resultado = calculadoraImc(peso, altura);

alert(resultado);

function calculadoraImc(peso, altura){

    let imc = peso/(altura*altura);

    let retorno = '';

    if(imc > 25){
        retorno = 'Acima do peso';
    }else if(imc >= 18 && imc <= 25){
        retorno = 'peso ideal';
    }else{
        retorno = 'Abaixo do peso';
    }

    return retorno;
}