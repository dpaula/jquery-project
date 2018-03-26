
//$ equivale ao document.querySelector(.classe)
//metodo .text() pega o texto, já para inserir basta passar o conteudo text(conteudo)
let frase = $('.frase').text();

const qtdPalavras =frase.split(' ').length;

let numeroPalavras = $('#numero-palavras');

numeroPalavras.text(qtdPalavras);

let campoD = $('.campo-digitacao');
//para setar o evento com jquery, basta usar o metodo on
//passando o primeiro parametro qual sera o evento, e o segundo a função que sera executada
campoD.on('click', () => {
    //para pegar valor de um textArea, ao inves de .value(), no jquery é usado o .val()
    //a diferença em CAMPO.text() para CAMPO.val() é que text é o texto entre tags 
    //e o value() é o que está dentro de caixas de input
    let textoCampoArea = campoD.val();
    let qtdPalavrasTA = textoCampoArea.split(' ').length;
    $('#contador-palavras').text(qtdPalavrasTA);
});

