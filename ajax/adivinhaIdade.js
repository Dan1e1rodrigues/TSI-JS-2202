document.querySelector('button').addEventListener('click', recuperaDados);

function recuperaDados(evento){
    evento.preventDefault();
    
    //nome do usuario
    let nome = document.getElementById('nome').value;

    //aqui fazemos a chamada                  então(depois'then')
    fetch(`https://api.agify.io/?name=${nome}`).then(function(retorno){
        //pegamos apenas o conteúdo do retorno
        return retorno.text();

        //então
    }).then(function(cont){
        
            let dados = JSON.parse(cont);

            let saida = `${dados.name} tem ${dados.age} anos`;     
            
            document.getElementById('nome').Value = '';

            document.querySelector('#dadoRecuperado').innerHTML = saida;
                
            
        });
}