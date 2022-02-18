// 1- Exercícios de interpretação de código

//  será impresso 10 e 50>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 2- Exercícios de Interpretação de código

// ela pede pro usuário inserir um texto, coloca tudo em letras minúsculas e determina se contem a palavra "cenoura"
// a resposta será "true" nas três

// 1- Exercícios de escrita de código

function imprimaMinhasInformacoes() {

    let meuNome = Márcio
    let minhaIdade = 36
    let minhaCidade = Campos
    let minhaProfissao = autônomo
    
console.log(`eu sou ${meuNome}, tenho ${minhaIdade}, moro em ${minhaCidade}, e sou ${minhaProfissao}`)

}


function imprimeMinhasInformacoes () {

let nomeUsuario = prompt("qual é o seu nome?")
let idadeUsuario = Number(prompt("qual é a sua idade?"))
let cidadeUsuario = prompt("qual é a sua cidade?")
let profissaoUsuario = prompt("qual é a sua profissão?")

console.log(`eu sou ${nomeUsuario}, tenho ${idadeUsuario}, moro em ${cidadeUsuario}, e sou ${profissaoUsuario}`)


}

imprimeMinhasInformacoes()

// 2-Exercícios de escrita de código
// A)

function fazSoma () {

let valor1 = Number(prompt("diga um número"))
let valor2 = Number(prompt("diga um número"))


console.log(valor1 + valor2)


}

fazSoma()

//B) 

function comparacao() {


let valor1 = Number(prompt("diga um número"))
let valor2 = Number(prompt("diga um número"))
console.log(valor1 >= valor2)

}

comparacao ()

//C)

function par(numero) {

let valor = Number(prompt("diga um número"))

return (numero % 2 === 0)

}

//D)

function textoUpper() {

let mensagem = prompt("digite uma frase")
console.log(mensagem.toUpperCase())
console.log(mensagem.length)


}
textoUpper()

// 3- Exercícios de escrita de código

function calculos () {

const numero1 = Number(prompt("diga um número"))
const numero2 = Number(prompt("diga um número"))

console.log(numero1 + numero2)
console.log(numero1 - numero2)
console.log(numero1 * numero2)
console.log(numero1 / numero2)

}

calculos()



