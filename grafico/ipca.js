document.querySelector('button').addEventListener('click', mostraIpca);

function mostraIpca(evento){
    evento.preventDefault();

    const url = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.4448/dados?formato=json&dataInicial=20201101';

    fetch(url).then(function(retorno){

        return retorno.text();

    }).then(function(stringJson){

        const indices = JSON.parse(stringJson);

        //////  Fazer em casa! //////
        //colocar os dados recuperados da API 
        //no gráfico
        let indice;
        let ipca = [];
        let anoUsuario = document.getElementById('ano').value;
    
        indices.forEach(function(mes) {
            anoString = mes.data.substring(6,10);
            mesString = mes.data.substring(3,5);
            anoMesString = anoString + '-' + mesString;

            if(parseInt(anoString) != anoUsuario){
                return;
            }

            indice = parseFloat(mes.valor);

            ipca.push({month:anoMesString, value:indice});
        });

        jsonParaMorris = {
                            element: 'ipca',
                                // Dados do gráfico
                            
                            data:ipca,
                            //     data: [
                            //     { month: '1992-05', value: 45.2 },
                            //     { month: '1992-06', value: 45.2 },
                            //     { month: '1992-07', value: 45.2 },
                            //     { month: '1992-0', value: 45.2 },
                            //     { month: '1992-05', value: 45.2 },
                            //     { month: '1992-05', value: 45.2 },
                            //     { month: '1992-05', value: 45.2 }
                            // ],
                        
                            // O nome do eixo com os valores de X
                            xkey: 'month',
                            
                            // Uma lista de nomes dos atributos de dados contidos em Y
                            ykeys: ['value'],
                        
                            // Rótulos para os índices -- aparece quando passa o mouse por cima
                            labels: ['Value']
                            
                        };

        new Morris.Line(jsonParaMorris);
        

    }).catch(function(){

        alert('API do Banco Central fora do ar');
    });
}