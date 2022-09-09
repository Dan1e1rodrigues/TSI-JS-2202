/*
Criar uma calculadora de valor a ser cobrado do cliente.
O valor do serviço pode variar conforme o prazo.
Os valores e prazos devem ser armazenados em uma matriz.
O cálculo deve ficar obrigatoriamente em uma função.
*/

let tabela = [ ['$$$', '$$','$'], ['$$$$', '$$$$$', '$$$$$$'], ['Não faz', 'Não faz'] ];

//Serviço 
let servico = prompt('Entre com o serviço: \n0 - troca de óleo \n1 - Balanceamento \n2 - Calibragem)');
//Dia
let prazo = prompt("Entre com o prazo: \n0 - Um dia \n1 - Dois dias \n2 - Tres dias ");

if( validaEntrada(servico) && validaEntrada(prazo) ){

    alert("O serviço ficará em: " + tabela[servico][prazo]);

}else{
     
    alert("ERROR: verifique os valores inseridos e tente novamente!");
}

function validaEntrada(dadoUsuario) {

    return dadoUsuario >= 0 && dadoUsuario <= 2 ? true : false;
}
