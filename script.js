//Input de Masculino ou Feminino:

var inputGeneroMasc = document.querySelector("#mascInput");
var inputGeneroFem = document.querySelector("#femInput");

function inputChangeMasc() {
    return inputGeneroFem.checked = false;
}
function inputChangeFem() {
    return inputGeneroMasc.checked = false;
}

// Objeto perfil do usuário:

var usuario = {
    "genero": undefined,
    "idade": document.querySelector("#idadeInput input").value,
    "peso": document.querySelector("#pesoInput input").value,
    "altura": document.querySelector("#alturaInput input").value,
    "gordura": document.querySelector("#gorduraInput input").value,
    "atividade": document.querySelector("#exercicioInput input").value
}

function returnThings() {
    return console.log(toString(usuario.idade));
}

