// let name = prompt("QUAL E O SEU NOME ?");
// let age = prompt("QUAL E A SUA IDADE? ");


// let api = {"age":61,"count":298219,"name":"michael"}

// document.write("SEU NOME É " +nome+ "");
// fetch("https://api.agify.io?name=michael");

//Requisição do XMLHttpRequest
function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.response.Text
}

function criaLinha(usuario) {

}

function main() {
    //Funçao que preve idade a partir do nome.
    //Nesse teste talvez não funcione.
    data = fazGet ("https://api.agify.io?name=michael")
    usuarios = JSON.parse(data);
    console.log(usuarios)
}

// let ola = prompt("Carro que você gosta ?");