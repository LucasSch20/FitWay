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
    let flexResultado = document.querySelector('.flexResultado');
    let formResultado = document.querySelector('.formResultado');
    let msgFinal = document.querySelector('#msgFinal');


    initialForm.style.animation = 'infoAum 1s';
    if (initialForm.style.opacity == 0) {

        initialForm.style.display = 'none';
        loadingForm.style.display = 'flex';
        msgLoading.style.display = 'block';
        msgInicial.style.display = 'none';
        loadingForm.style.opacity = '100';
        setTimeout(function() {
            loadingForm.style.display = 'none';
            flexResultado.style.display = 'flex';
            formResultado.style.display = 'block';
            formResultado.style.opacity = 100;
            msgLoading.style.display = 'none';
            msgFinal.style.display = 'block';

        }, 5000);
    }
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

//Função que calcula o IMC e retorna uma string:

function imcCalculo() {
    let altura = document.querySelector('');
    let peso = document.querySelector('');

    let pesoAoQ = peso*peso;
    let IMC = altura/pesoAoQ;

    return IMC;
}