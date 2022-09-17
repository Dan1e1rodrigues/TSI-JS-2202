let btnCalcular = document.getElementById('calcular');

btnCalcular.addEventListener('click', function(evento){
    evento.preventDefault();

    let serv = document.getElementById('servico');
    let prazo = document.getElementById('prazo');
    let res = document.getElementById('resultado');

    //Recuperar os dados da matriz

    let preco = calculaPreco( serv.value, prazo.value);

    //Mostra o resultado no elemento p
    res.innerText = `O preço é ${preco}`;

    console.log(serv.value);

    //ver dados do evento (click) no console.
    console.log(evento);

    //Obter valores de serviço e prazo.
});

function calculaPreco( servico, prazo) {

    let tabela = [  ['$$$','$$','$'],
                    ['$$$$', '$$$', '$$', '$'],
                    ['Não faz', 'Não faz', '$$$']]

    return tabela [servico][prazo];
};

