// Exercício de Manipulação de Array

// Crie uma lista de compras que é inicialmente vazia.
// Adicione 5 itens à lista usando push().
// Agora, remova o primeiro item da lista usando shift().
// Imprima a lista final no console.

const lista = [];

lista.push({nome:'vitor',idade:30}, {nome:'juca',idade:25},{nome:'lucas',idade:12},{nome:'loriosvenilson',idade:50},{nome:'jul',"idade":20});
lista.shift();
for (var i = 0; i < lista.length; i++) {
    console.log(`${lista[i]['nome']} tem a idade de ${lista[i].idade} anos`)
}

// Exercício de Manipulação de Array - find()

// Você tem um array de números: [3, 7, 14, 21, 29, 36, 42].
// Use a função find() para encontrar o primeiro número que é divisível por 7
// e maior que 10.

const numeros = [3, 7, 14, 21, 29, 36, 42];
const numerosMaior = numeros.find((elemento) => elemento % 7 === 0 && elemento >  10)
console.log(numerosMaior)

// Exercício de Manipulação de Array - filter()

// Dado o array de números: [5, 10, 15, 20, 25, 30, 35, 40].
// Use a função filter() para criar um novo array que contenha apenas os números
// que são maiores que 20.

const num =  [5, 10, 15, 20, 25, 30, 35, 40];
const numMaiorQue20 = num.filter( n => n > 20)
console.log(numMaiorQue20)

// Exercício de Manipulação de String - split(), trim()

// Dada a string: " Bom dia, mundo! ".
// Remova os espaços em branco no início e no final da string e,
// em seguida, divida a string em palavras.

const fraseInical = "             Bom dia, mundo! "
console.log(fraseInical.trim().split(' '))
// Exercício de Manipulação de String - startsWith(), endsWith()

// Dada a string: "O rato roeu a roupa do rei de Roma".
// Verifique se a string começa com a palavra "O" e termina com a palavra "Roma".
const frase = "O rato roeu a roupa do rei de Roma"
console.log(frase.startsWith('O'))
console.log(frase.endsWith('Roma'))