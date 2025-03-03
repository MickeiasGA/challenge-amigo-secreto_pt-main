//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo');
    amigos.push(amigo.value);
    amigo.value = "";

    let ul = document.getElementById('listaAmigos');
    ul.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.setAttribute("id", `${i}`)
        li.innerHTML = amigos[i];
        ul.appendChild(li);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ""

    let n = Math.floor(Math.random() * amigos.length);
    document.getElementById('listaAmigos').children[n].innerHTML  = "";

    let li = document.createElement('li');
    li.innerHTML = amigos[n];
    resultado.appendChild(li);

    amigos.splice(n, 1);
    let ul = document.getElementById('listaAmigos');
    ul.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.setAttribute("id", `${i}`)
        li.innerHTML = amigos[i];
        ul.appendChild(li);
    }
}