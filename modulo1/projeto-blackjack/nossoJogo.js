/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)

**/

console.log("Boas vindas ao jogo de Blackjack!")


if(confirm("Quer iniciar uma nova rodada?")) {
   // o que fazer se o usuário clicar "ok"
   console.log("Iniciar um novo jogo!")
} else {
   console.log("O jogo acabou!")
   // o que fazer se o usuário clicar "cancelar"
}

const cartaUmJogador = comprarCarta ()
const cartaDoisJogador = comprarCarta()
const computadorCartaUm = comprarCarta()
const computadorCartaDois = comprarCarta()

const resultadoJogador = cartaUmJogador.valor + cartaDoisJogador.valor
const resultadoComputador = computadorCartaUm.valor + computadorCartaDois.valor

console.log(`Usuário cartas -${cartaUmJogador.texto} ${cartaDoisJogador.texto} - pontuacão ${resultadoJogador}`)
console.log(`Usuário cartas -${computadorCartaUm.texto} ${computadorCartaDois.texto} - pontuacão ${resultadoComputador}`)

if (resultadoJogador > resultadoComputador) {
   console.log("O usuário ganhou!")
}
else if (resultadoJogador === resultadoComputador) {
   console.log("Empate!")
}
else if (resultadoJogador < resultadoComputador) {
   console.log("O computador ganhou!")
}
