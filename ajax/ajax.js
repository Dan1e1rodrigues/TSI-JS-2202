document.querySelector('button').addEventListener('click', recuperaConteudoAjax);

function recuperaConteudoAjax(){

    const XHR = new XMLHttpRequest;
    
    XHR.open('GET', 'http://127.0.0.1:8080/TSI-JS-2202/ajax/conteudo.txt',true);

    XHR.onload = function(){
        if(this.status == 200){

            document.querySelector('#dadoRecuperado').innerHTML = this.responseText;

        }
    }

    XHR.send();
};