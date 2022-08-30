//Declarando altura e peso
let altura = parseFloat(prompt('Digite sua altura '));
let peso = parseFloat(prompt('Digite seu peso '));

let calculando = peso/(altura*altura);

document.write("A sua altura e de " + altura + " e seu peso e de " + peso + " seu IMC e " + calculando + "");
