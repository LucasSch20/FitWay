//Input de Masculino ou Feminino:

var inputGeneroMasc = document.querySelector("#mascInput");
var inputGeneroFem = document.querySelector("#femInput");
// Objeto perfil do usuário:
var usuario = {
    "genero": "",
    "idade": "",
    "peso": "",
    "altura": "",
    "gordura": "",
    "atividade": ""
}

function inputChangeMasc() {
    return inputGeneroFem.checked = false, usuario.genero = "masculino";
    
}
function inputChangeFem() {
    return inputGeneroMasc.checked = false, usuario.genero = "feminino";
}


//Função que chama o formulário Loading e Fecha o Formulário de Info:
function loadLoadingForm() {
    let initialForm = document.querySelector(".formInfo");
    let loadingForm = document.querySelector(".formLoading");
    let msgLoading = document.querySelector('#msgLoading');
    let msgInicial = document.querySelector('#msgInicial');

    initialForm.style.animation = 'infoDim 1s';
    if (initialForm.style.opacity == 0) {

        initialForm.style.display = 'none';
        loadingForm.style.display = 'flex';
        msgLoading.style.display = 'block';
        msgInicial.style.display = 'none';
        loadingForm.style.animation = 'infoAum 1s';
        loadingForm.style.opacity = '100';
        
    }
}

//Função que chama os formulário das informações do usuário:
function loadInfo() {
    let loadingForm = document.querySelector(".formLoading");
}

//Função que checa se todos os campos do formulário de informações estão completos. Caso sim, ele vai executar a função anterior. Caso não, ele irá mostrar uma mensagem para o usuário.
function checkInput() {

    usuario.idade = document.querySelector("#idadeInput").value;
    usuario.peso = document.querySelector("#pesoInput").value;
    usuario.altura = document.querySelector("#alturaInput").value;
    usuario.gordura = document.querySelector("#gorduraInput").value;
    usuario.atividade = document.querySelector("#exercicioInput").value;

    console.log(usuario);

    //Teste pra ver se os inputs estão vazios ou não:
    if (usuario.genero != "" && usuario.idade > 0 && usuario.peso > 0 && usuario.altura > 0 && usuario.gordura > 0 && usuario.atividade != "") {
        return loadLoadingForm();
    } else {
        return alert('Preencha todos os campos.');
    }
}
