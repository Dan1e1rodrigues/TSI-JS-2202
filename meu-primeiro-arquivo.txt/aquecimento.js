//Estrutura de repetição
/*var repeticao;

for(repeticao = 0; repeticao < 10; repeticao++) {
    console.log('Vai repetir')
}
*/

//Estrutura de repetição segunda tentativa

//Looping

//For


for( let i = 0 ; i < 10 ; i++) {

    console.log('Número da linha ' + i )
}


//While

//Lembre de zerar o I pois ele esta valendo 10 por conta do for
i = 0;
//O I começa valendo 0 e o contador só para quando ele chega a 10 assim console.log irá mostra-ló no console
//Cuidado para não deixar ele repetir infinitamente

//Ele só exucuta quando e verdade
while( i < 10) {

    console.log('Número da linha com while: ' + i);
    i++;
}

//Do while

//Ele executa até chegar ao número esperado
i = 0;
do{
    console.log('Numero da linha com do while' + i)
    i++
}while (i < 10)

////////////////////////////
//Condicionais 

//If

var A = 4;
var B = 2;

if(A > B){
    console.log(A + " é menor que" + B);
}else if(A == B){
    console.log( A + ' é igual a ' + B);
}
else{
    console.log(A + " não é menor que " + B);
}

//Switch
let diaSemana = 0;

switch(diaSemana) {

    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda');
        break;
    case 2:
        console.log('Terça');
        
        break;
    case 3:
        console.log('Quarta');
        break;
    case 4:
        console.log("Quinta");
        break;
    case 5:
        console.log("Sexta");
        break;
    case 6:
        console.log("Sabado");
        break;
    default:
        console.log("Número Inválido")
}

//Ternário
//Não confunda console.log com document.write
let x = 4;
let y = 2;

let resultado = x > y ? 'x é maior ' : ' não é maior';

console.log(resultado);

//Formulario 
let genero = prompt('Entre com M ou F');

let saida = genero == 'M' ? 'Maculino' : 'Feminino';

console.log(saida);

//Coalescente

let coisa = 14;
let variavel = coisa ?? 'Não há';
console.log(variavel);