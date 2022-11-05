const urlBase = "http://numbersapi.com";

function request(method, url, data) {
    const promisse = new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();

        request.open(method, url);
        request.responseType = "json";

        if(data){
            request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        }
        
        request.onload = () => {

            
            if(request.status >= 400){
                reject({message: "Erro ao consumir a API."});
            } else{
                resolve(request.response);
            }
        }

        request.onerror = () => {
            reject({message: "Erro ao consumir a API."})
        }

        request.send(JSON.stringify(data));
    });

    return promisse;
}

function burcarCuriosidade() {
    
    let numberToPreview = document.getElementById("numberToPreview").value;

    if(!numberToPreview || numberToPreview == ""){
        return;
    }

    let params = `/${numberToPreview}/math?json`;
    let url = urlBase + params;

    let req = request("GET", url);

    let responseElement = document.getElementById("response");

    req
        .then((res) =>{
            
            console.log(res);
            if (res){
                responseElement.innerText = res.text;
            } else{
                responseElement.innerText = "Nenhuma curiosidade encontrada para este número!";
            }
        })
        .catch((err) =>{
            responseElement.innerText = err.message;
        });
}
document.getElementById("send").addEventListener("click", function(e){
    e.preventDefault();

    burcarCuriosidade();
})