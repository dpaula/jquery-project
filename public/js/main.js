const tempo = 3;
const qtdPalavras = $('.frase').text().split(' ').length;
$('#tempo-digitacao').text(tempo);
let campoD = $('.campo-digitacao');

//onReady - carrega a tela e só dai executa a função
$('document').ready(() => {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    $('#botao-reiniciar').click(reiniciaJogo);
});



function reiniciaJogo() {
    campoD.attr('disabled', false);
    campoD.val('');
    $('#contador-palavras').text('0');
    $('#contador-caracteres').text('0');
    $('#tempo-digitacao').text(tempo);
    $('#numero-palavras').text(qtdPalavras);
    inicializaCronometro();
}

function atualizaTamanhoFrase() {
    let numeroPalavras = $('#numero-palavras');
    numeroPalavras.text(qtdPalavras);
}

function inicializaContadores() {
    campoD.on('input', () => {
        //para pegar valor de um textArea, ao inves de .value(), no jquery é usado o .val()
        //a diferença em CAMPO.text() para CAMPO.val() é que text é o texto entre tags 
        //e o value() é o que está dentro de caixas de input
        let textoCampoArea = campoD.val();
        let qtdPalavrasTA = textoCampoArea.split(/\S+/).length - 1;
        $('#contador-palavras').text(qtdPalavrasTA);
        let qtdCaracteres = textoCampoArea.length;
        $('#contador-caracteres').text(qtdCaracteres);
    });
}

function inicializaCronometro() {
    let tempoRestante = $('#tempo-digitacao').text();
    //criando evento apenas uma vez
    //campo.one('evento', função)
    campoD.one('focus', () => {
        //usando setInterval para definir uma função em um espaço de tempo desejado
        //e atribuindo ao um ID, que pode ser parado quando quiser
        //funciona com dois parametros(função, tempo em milisegundos)
        let cronometroId = setInterval(() => {
            tempoRestante--;
            $('#tempo-digitacao').text(tempoRestante);
            if (tempoRestante < 1) {
                //metodo campo.attr que servve para pegar os atributos dos campos e setar valores
                campoD.attr('disabled', true);
                //para o interval
                clearInterval(cronometroId);
            }
        }, 1000);
    });
}