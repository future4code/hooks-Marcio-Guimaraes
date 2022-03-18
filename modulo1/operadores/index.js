// 1- Exercício de interpretação de código

//const bool1 = true
//const bool2 = false
//const bool3 = !bool2

//let resultado = bool1 && bool2
//console.log("a. ", resultado)

//aqui o resultado será true>>>>>>>>>>>

//resultado = bool1 && bool2 && bool3 
//console.log("b. ", resultado) 

//aqui o resultado será false>>>>>>>>>>>

//resultado = !resultado && (bool1 || bool2) 
//console.log("c. ", resultado)

//aqui o resultado será false>>>>>>>>>>>>

//console.log("d. ", typeof resultado)

//aqui o resultado será boolean>>>>>>>>>>>

// 2- Exercício de interpretação de código


//let primeiroNumero = prompt("Digite um numero!")
//et segundoNumero = prompt("Digite outro numero!")

//const soma = primeiroNumero + segundoNumero

//console.log(soma)


//Ao pedir um valor no terminal, esse valor será uma string>>>>>>>>>>>>>>>

//const primeiroNumero =  Number (prompt("Digite um numero!"))
//const segundoNumero = Number (prompt("Digite outro numero!"))

//const soma = primeiroNumero + segundoNumero

//console.log(soma)

// 1- Exerícios de escrita de código

const idadeUser = Number(prompt("digite um numero!"))
const idadeMelhorAmigo = Number(prompt("digite um valor!"))

console.log(idadeUser > idadeMelhorAmigo)
console.log(idadeUser - idadeMelhorAmigo)

// 2- Exercícios de escrita de código

const numeroPar = Number(prompt("digite um numero par!"))
console.log(numeroPar % 2)

//nunca haverá resto com qualquer número par dividido por 2
//inserindo um número ímpar sempre haverá resto

// 3- Exercícios de escrita de código

const suaIdade = Number(prompt("digite sua idade!"))

console.log(suaIdade * 12) 
console.log(suaIdade * 365)
console.log(suaIdade * 8760)

// 4- Exercícios de escrita de código

const numero1 = Number(prompt("fale um numero!"))
const numero2 = Number(prompt("fale outro numero"))

const primeiraPergunta = numero1 > numero2
console.log(primeiraPergunta)

const segundaPergunta = numero1 === numero2
console.log(segundaPergunta)

const terceiraPergunta = numero1 % numero2
console.log(terceiraPergunta)

const quartaPergunta = numero2 % numero1
console.log(quartaPergunta)

