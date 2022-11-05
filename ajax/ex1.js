document.querySelector('button').addEventListener('click', carregaConteudo);

function carregaConteudo(){
    
    const XHR = new XMLHttpRequest();
    
    //true = assincrono, sincrono esta sendo descontinuado
    XHR.open('GET', 'http://127.0.0.1:5500/ajax/conteudo.txt', true); 

    XHR.onload = function(){
        // HTTP 2000 OK
        if(this.status === 200){


            let dados = JSON.parse(this.responseText);

            let saida = '';

            dados.forEach(function(aluno) {

                   saida += aluno.idade >= 18 ? `${aluno.nome} é maior de idade<br>`:
                   `${aluno.nome} é menor de idade<br>`;
;             
            });
            
             document.querySelector('#dadoRecuperado').innerHTML
                 = saida;
                
            }
        }

        //realiza a requisição
        XHR.send();
}
// if(valor.idade>18){
//     document.querySelector('#dadoRecuperado').innerText =(ind+" é maior de idade"+" tem "+valor.idade);
// }
// else{
//     document.querySelector('#dadoRecuperado').innerText =(ind+" é menor de idade"+" tem "+valor.idade);
// }