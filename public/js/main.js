
//$ equivale ao document.querySelector(.classe)
//metodo .text() pega o texto, já para inserir basta passar o conteudo text(conteudo)
let frase = $('.frase').text();

const qtdPalavras =frase.split(' ').length;

let numeroPalavras = $('#numero-palavras');

numeroPalavras.text(qtdPalavras);

