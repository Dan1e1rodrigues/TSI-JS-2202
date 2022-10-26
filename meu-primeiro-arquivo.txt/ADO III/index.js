const urlBase = "http://numbersapi.com";

function request(method, url, data) {
    const promisse = new Promise((resolve, reject) => {
        // Instancia objeto XMLHttoRequest
        let request = new XMLHttpRequest();

        // Abre a requisição e define o tipo de retorno como json
        request.open(method, url);
        request.responseType = "json";

        // Caso a requisição tenha que enviar um body, define o cabeçalho de content-type
        if(data){
            request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        }
        
        // Quando a requisição e carregada, executa uma função 
        request.onload = () => {

            // Caso o stauts seja maior ou igual à 400, acusa como erro, senão, retorna os dados obtidos
            if(request.status >= 400){
                reject({message: "Erro ao consumir a API."});
            } else{
                resolve(request.response);
            }
        }

        // Caso ocorra um rerro na requisição, acusa como erro 
        request.onerror = () => {
            reject({message: "Erro ao consumir a API."})
        }

        request.send(JSON.stringify(data));
    });

    return promisse;
}

function burcarCuriosidade() {
    // Pega os dados digitados pelo usuário
    let numberToPreview = document.getElementById("numberToPreview").value;

    if(!numberToPreview || numberToPreview == ""){
        return;
    }

    // Monta a url
    let params = `/${numberToPreview}/math?json`;
    let url = urlBase + params;

    // Realiza a requisição
    let req = request("GET", url);

    // Pega o elemento que será exibido o restorno
    let responseElement = document.getElementById("response");

    req
        .then((res) =>{
            // Caso dê certo, exibe a a curiosidade
            console.log(res);
            if (res){
                responseElement.innerText = res.text;
            } else{
                responseElement.innerText = "Nenhuma curiosidade encontrada para este número!";
            }
        })
        .catch((err) =>{
            // Caso dê erro, exibe a mensagem de erro
            responseElement.innerText = err.message;
        });
}

// Ao clicar no botão de prever idade, realiza a requisição
document.getElementById("send").addEventListener("click", function(e){
    e.preventDefault();

    burcarCuriosidade();
})