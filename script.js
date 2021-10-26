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
    let formResultadoIMC = document.querySelector('#formResultadoIMC');
    let formResultadoPorc = document.querySelector('#formResultadoPorc')
    let msgFinal = document.querySelector('#msgFinal');


    initialForm.style.animation = 'infoAum 1s';
    if (initialForm.style.opacity == 0) {

        initialForm.style.display = 'none';
        loadingForm.style.display = 'flex';
        msgLoading.style.display = 'block';
        msgInicial.style.display = 'none';
        loadingForm.style.opacity = '100';
        setTimeout(function () {
            loadingForm.style.display = 'none';
            flexResultado.style.display = 'flex';
            formResultadoIMC.style.display = 'block';
            formResultadoPorc.style.display = 'block';
            formResultado.style.opacity = 100;
            msgLoading.style.display = 'none';
            msgFinal.style.display = 'block';

        }, 4000);
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
    if (usuario.genero != "" && usuario.idade > 0 && usuario.peso > 0 && usuario.altura > 0 && usuario.atividade != "") {
        return loadLoadingForm();
    } else {
        return alert('Preencha todos os campos.');
    }
}

//Função que calcula o IMC e retorna uma string:

function imcCalculo(altura, peso) {
    let imcString = document.querySelector('#imcString');
    let classificacaoString = document.querySelector('#classificacaoString');

    alturaMetro = altura / 100
    let alturaAoQ = alturaMetro * alturaMetro;

    let IMC = peso / alturaAoQ;
    let classificacaoIMC;

    //Função que classifica o IMC do usuário:

    console.log(IMC);

    if (IMC < 18) {
        classificacaoIMC = 'Abaixo do peso';
    } else if (18 < IMC && IMC < 24.9) {
        classificacaoIMC = 'Normal';
    } else if (25 < IMC && IMC < 29.9) {
        classificacaoIMC = 'Acima do peso';
    } else if (30 < IMC && IMC < 34.9) {
        classificacaoIMC = 'Obesidade grau 1';
    } else if (35 < IMC && IMC < 39.9) {
        classificacaoIMC = 'Obesidade grau 2';
    } else if (IMC > 40) {
        classificacaoIMC = 'Obesidade grau 3';
    }


    console.log(classificacaoIMC);
    return imcString.innerHTML = IMC.toString(), classificacaoString.innerHTML = classificacaoIMC;
}
