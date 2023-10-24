// exercicio 1: hello world
console.log("hello world")

// exercicio 2: number conversion

const inicial = "1234";
console.log(typeof Number(inicial))

// exercicio 3: manipulation of strings

let js = "javaScript é incrivel";

console.log('O total de caracteres na frase "javaScript é incrivel" é: '+ (js.length));
console.log('O total de palavras na frase "javaScript é incrivel" é: '+(js.split(' ')).length);

// exercicio 4: Loops and arrays

const listaEx4 = ['João','Maria','Flavio','Vito'];

for (var i=0; i <= listaEx4.length;i++) {
    console.log(listaEx4[i])
}

// exercicio 5: function and strings
// algoritimo que converta hora dada em formato 24hr para o formato 12hr am e pm
function convercao(data) {
    data = data.split(':');
    let hora = Number(data[0]) % 12  || 12;
    hora12 = hora + ':' + data[1];
    data[0] >= 12? console.log(hora12 + ' PM'): console.log(hora12 + ' AM');
}
convercao('12:30');
convercao('15:20');
convercao('00:00');

