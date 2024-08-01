let listaDeNumerosSorteados = [];
let limiteDeNumeros = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag , texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak (texto, 'Spanish Female', {rat:1.2});
}
function exibirMensagenInicial() {
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha un numero entre 1 e 10'); 
}
exibirMensagenInicial();

function verificarChute(){

    let chute = document.querySelector('input').value;

   if (chute == numeroSecreto){
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
    let mesagenTentativas = `Parabens voçe descobriu o numero secreto! con ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p', mesagenTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');

   } else {
     if (chute > numeroSecreto){
        exibirTextoNaTela ('p', 'O numero secreto e menor!');
     } else {
      exibirTextoNaTela('p', 'O numero secreto e maior!');

     }
     tentativas ++;
     limparCampo();

   }
}
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * limiteDeNumeros + 1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if(quantidadeDeElementosNaLista == 10){
    listaDeNumerosSorteados = [];

   }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio ();
   } else{
    listaDeNumerosSorteados.push (numeroEscolhido);
    console.log (listaDeNumerosSorteados);
    return numeroEscolhido;

   }
}
function limparCampo() {
    chute = document.querySelector(`input`);
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagenInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}