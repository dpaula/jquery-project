//$ equivale ao document.querySelector(.classe)
//metodo .text() pega o texto, já para inserir basta passar o conteudo text(conteudo)
let frase = $('.frase').text();

const qtdPalavras = frase.split(' ').length;

let numeroPalavras = $('#numero-palavras');

numeroPalavras.text(qtdPalavras);

let campoD = $('.campo-digitacao');
//para setar o evento com jquery, basta usar o metodo on
//passando o primeiro parametro qual sera o evento, e o segundo a função que sera executada
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

let tempoDigitacao = $('#tempo-digitacao').text();    

//criando evento apenas uma vez
//campo.one('evento', função)
campoD.one('focus', () => {

    //usando setInterval para definir uma função em um espaço de tempo desejado
    //e atribuindo ao um ID, que pode ser parado quando quiser
    //funciona com dois parametros(função, tempo em milisegundos)
    let cronometroId = setInterval(() => {
        tempoDigitacao--;

        $('#tempo-digitacao').text(tempoDigitacao);

        if(tempoDigitacao < 1){

            //metodo campo.attr que servve para pegar os atributos dos campos e setar valores
            campoD.attr('disabled', true);
            //para o interval
            clearInterval(cronometroId);
        }

    }, 1000);

});