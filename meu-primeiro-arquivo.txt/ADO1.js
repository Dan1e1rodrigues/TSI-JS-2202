//Declarando altura e peso
let altura = parseFloat(prompt('Digite sua altura '));
let peso = parseFloat(prompt('Digite seu peso '));

//Calculando altura e peso, peso/(altura*altura) ou altura**2
let imc = peso/(altura*altura);

//Variavel para dizer o estado de saúde do usuario 
//If e else ou else if

//Variavel para dizer que caso o peso esteja entre 18 e 24 = a peso normal

//Caso esteja abaixo de 18 peso não recomendado 
if (imc < 18.5) {
    document.write("CUIDADO! você esta abaixo do peso recomendado");
}
//Caso esteja a baixo entre 24 e 29.9 peso recomendado
else if (imc < 24.9) {
    document.write("Você esta com o peso recomendado")
}
else if (imc < 29.9) {
    document.write("CUIDADO! você esta com Sobrepeso")
}
//Caso seja menor que 39.9 obesidade
else if (imc < 39.9) {
    document.write("CUIDADO! você esta com Obesidade")
}
//Caso ultrapasse 39.9 obesidade morbida
else if (imc > 39.9) {
    document.write("CUIDADO! você esta com Obesidade Mórbida!")
}

document.write("<br> Sua altura e de " + altura + "");
document.write("<br> Seu peso e de " + peso + " Kg");
document.write("<br> IMC e " + imc + "");

//Como arredondar um número em JavaScript?