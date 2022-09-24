let t;

t=document.getElementsByClassName('collection-item');

let vetor= Array.from(t);

console.log(vetor);
//ForEach espera receber o prototico de um vetor
vetor.forEach(function(val){
    val.style.color='green';
    // val.innerText='Outra tarefa';
    console.log(val.innerText);
});

//com queryselectorAll
e = document.querySelectorAll('li');
console.log(e[2]);

e.forEach(function(val){
    console.log(val.innerText);
});

//somente ímpares (para pares, even)
e=document.querySelectorAll('li:nth-child(even)');

e.forEach(function(val){
    val.style.background='#dedede';
});

e=document.querySelector('ul.collection');
console.log(e.firstChild);