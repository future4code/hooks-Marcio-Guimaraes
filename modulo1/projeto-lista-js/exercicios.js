// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  const numero1 = 1
  const numero2 = 2
  const resultado = numero1 + numero2

  console.log(resultado)
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("escreva a altura de um retângulo"))
  const largura = Number(prompt("escreva a largura de um retângulo"))
  const AreaRetangulo = altura * largura
  console.log(AreaRetangulo)



}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const anoAtual = Number(prompt("escreva o ano atual"))
const anoNascimento = Number(prompt("escreva seu ano de nascimento"))
const idade = anoAtual - anoNascimento
console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC() {
  // implemente sua lógica aqui
  let peso = Number(prompt("qual seu peso(em kg)?"))
  let altura = Number(prompt("qual sua altura(em metros)?"))
  return imc = peso / (altura * altura)
  
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  let nomeUsuario = prompt("digite seu nome aqui")
  let idadeUsuario = Number(prompt("digite sua idade aqui"))
  let emailUsuario = prompt("digite seu email aqui")
  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
let cor1 = prompt("diga uma cor")
let cor2 = prompt("diga uma cor")
let cor3 = prompt("diga uma cor")
 TresCoresFavoritas = [cor1,cor2,cor3]
 console.log(TresCoresFavoritas)


}

// EXERCÍCIO 06
function retornaStringEmMaiuscula() {
  // implemente sua lógica aqui

  let string = prompt("diga algo")
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const total = (custo/valorIngresso)
  return total


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length == string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  const tamanho = array[array.length -1]
  return tamanho

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  let primeiroElemento = array.shift()
  let ultimoElemento = array.pop()
  let colocandoUltimoElemento = array.push(primeiroElemento) 
  let colocandoPrimeiroElemento = array.unshift(ultimoElemento)

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let padrao1 = string1.toUpperCase()
  let padrao2 = string2.toUpperCase()
  return padrao1 === padrao2

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}