document.getElementById("botao").addEventListener("click", (e) => {
    e.preventDefault();

    let input = document.getElementById("entrada");
    let saida = document.getElementById("mostrar");

    // Pegamos os dados obtidos no formulário e guardamos no localStorage
    localStorage.setItem("nomeUsuario", input.value);

    saida.innerText = input.value;
    input.value = "";
})

// Coloca o dado do localStorage no span ao recarregar a página
document.getElementById("mostrar").innerText = localStorage.getItem("nomeUsuario");

// Apaga o dado do localStorage
// localStorage.removeItem("nomeUsuario");

