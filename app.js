// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.//
let NomSorteados = [];
//Asigna el texto a un elemnto html
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

//Funcion para agregar los nombres para el sorteo//
function agregarAmigo(){
    let nomDeAmigo = document.getElementById("amigo");
    let amigo = nomDeAmigo.value;
    //Valida que amigo no este vacio o que sea un numero \d metacaracter de 0 a 9 y test devuelve true de tener un num//
    if (!amigo || /\d/.test(amigo))
    {
        alert(`Por favor, Escribe un nombre`);
        return;
    }
    //Funcion visualizar lista// 
    function mostrarListaAmigos() {
        let listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.innerHTML = '';
        for (let i = 0; i < NomSorteados.length; i++) {
            let li = document.createElement("li");
            li.textContent = NomSorteados[i];
            listaAmigos.appendChild(li);
        }
    }
    function sortearAmigo() {
        if (NomSorteados.length === 0) {
            alert('NO hay nombres que sortear');
            return;
        }
        if (NomSorteados.length < 3) {
            alert('Por favor, ingrese al menos 3 nombres');
            return;
        }
        let listaSorteada = NomSorteados[Math.floor(Math.random() * NomSorteados.length)];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `El amigo secreto es: ${listaSorteada}`;
        limpiarLista();
    }
    // Limpiar el resultado del sorteo si ya se ha realizado
    let resultado = document.getElementById('resultado');
    if (resultado.innerHTML !== '') {
        resultado.innerHTML = '';
        limpiarLista();
    }       
    NomSorteados.push(amigo);
    console.log(NomSorteados);
    limpiarCampo();
    mostrarListaAmigos();  
}


function limpiarCampo() {
    let amigo = document.getElementById('amigo');
    amigo.value = '';
    amigo.focus();
}

function limpiarLista() { 
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    NomSorteados = [];
}

//Sorteo 
asignarTextoElemento('h1', 'Amigo Secreto');
asignarTextoElemento('h2', 'Digite el nombre de sus amigos');
agregarAmigo();
