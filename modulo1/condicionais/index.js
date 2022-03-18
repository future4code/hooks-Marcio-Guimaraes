// 1- Exercícios de Interpretação de Código


// A) Ele testa se a condição é verdadeira. Se for ele é executado dentro do código.
// B) Ele imprime passou no teste para números resultantes de número  % 2 = 0
// C) Ele imprime  não passou no teste para números resultantes de número  % 2 diferente de 0.

// 2- Exercícios de Interpretação de Código


// A) Ele serve para verificar a variável como no caso do If/Else. Só que de uma forma mais simplificada.
// B) O preço da fruta maçã é R$ 2.25
// C) O preço da fruta "fornecida pelo usuário" é R$ 5

// 3- Exercícios de Interpretação de Código


// A) Está declarando um número e pedindo que o usuário defina este número.
// B) Se for 10 aparecerá que "Esse número passou no teste" pois é maior que 0.
// Se for -10 não aparecerá nada. Pois é menor que 0.
// C) Sim. A declaração da variável tem que estar depois da "}".

// 1- Exercícios de escrita de código

// a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

//b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

const idade = Number(prompt("Qual é a sua idade?"))

function confirmaSePodeDirigir(idade) {

  if (idade >= 18) { console.log("você pode dirigir")

  } else{console.log ("você não pode dirigir")}
  

}

confirmaSePodeDirigir(idade)

// 2- Exercícios de escrita de código

// Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else


const turno = prompt("qual é o horário que vc estuda?")

function horarioDeEstudos (M,V,N) {
if (turno === "M") {console.log("bom dia!")}
if (turno === "V") {console.log("boa tarde")}
if (turno === "N") {console.log("boa noite!")}

}

horarioDeEstudos(turno)

// 3- Exercícios de escrita de código
 
let turno1 = prompt("qual é o horário que vc estuda?")
if(turno1 === "M"){
  console.log("bom dia!")
}else if (turno1 === "V") {
  console.log("boa tarde!")
}else if (turno1 === "N") {
  console.log("boa noite!")
}

// 4- Exercícios de escrita de código

const filme = prompt("qual filme vamos assistir? É de fantasia?")
const ingresso = Number(prompt("qual é o valor do ingresso?"))


if(filme === "sim" && ingresso < 15) {
  console.log("bom filme!")

}else{
  console.log("Escolha outro filme :(")
}









