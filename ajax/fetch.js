document.querySelector('button').addEventListener('click', recuperaDados);

function recuperaDados(evento){
    evento.preventDefault();

    //aqui fazemos a chamada                  então(depois'then')
    fetch('http://127.0.0.1:5500/ajax/conteudo.txt').then(function(retorno){
        console.log(retorno)
        //pegamos apenas o conteúdo do retorno
        return retorno.text();

        //então
    }).then(function(cont){
        // HTTP 2000 OK
        

            let dados = JSON.parse(cont);

            let saida = '';

            dados.forEach(function(aluno) {

                   saida += aluno.idade >= 18 ? `${aluno.nome} é maior de idade<br>`:
                   `${aluno.nome} é menor de idade<br>`;
;             
            });
            
             document.querySelector('#dadoRecuperado').innerHTML
                 = saida;
                
            
        });
}