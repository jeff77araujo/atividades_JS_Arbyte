/*

Fazer um programa para receber um número e verificar se está entre 100 e 200. 
Se estiver na faixa, imprimir: 
Você digitou um numero entre 100 e 200.
 Senão estiver na faixa, imprimir
Você digitou um numero fora da faixa entre 100 e 200
*/
//______________________________________________FINALIZADO_______________________________________________
var readlineSync = require('readline-sync')
var numero = readlineSync.questionInt("Digite um numero entre 100 e 200: ")

if (numero < 100 || numero > 200) {
    console.log("Você digitou um numero fora da faixa entre 100 e 200")
} else {
    console.log("Você digitou um numero entre 100 e 200.")
}
