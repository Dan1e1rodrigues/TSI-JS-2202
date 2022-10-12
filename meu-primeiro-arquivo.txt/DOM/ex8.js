const cartao=document.querySelector('.card');
const titulo=document.querySelector('hs');

cartao.addEventListener('mousemove', executaAcao);

function executaAcao(evento){
    // console.log(evento.type);
    titulo.textContent = `Eixo X: ${evento.offsetX} Eixo Y: ${evento.offsetY}`;

    document.body.style.backgroundColor=`rgb(${evento.offsetX},${evento.offsetY}, 40)`;

}