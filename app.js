//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;
    amigos.push(amigo);
    
    let ul = document.getElementById('listaAmigos');
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = amigos[i];
        ul.appendChild(li);
    }
}

function sortearAmigo() {
    amigos
}