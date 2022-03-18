// 1- Exercícios de interpretação de código

//let array
//console.log('a. ',array)

//R: Undefined>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//array = null
//console.log('b.', array)

//R: null>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//console.log('c. ', array.length)

//R: 11>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//let i = 0
//console.log('d. ', array[i])

//R: 3>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//array[i+1] = 19
//console.log('e. ', array)

//R:[3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] e 11>>>>>>>>>>>>>>>>

//const valor = array[i+6]
//console.log('f. ', valor)

//R: 9

// 2- Exercícios de interpretação de código

//const frase = prompt("Digite uma frase")

//console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

//R: "SUBI NUM ÔNIBUS EM MIRROCOS" 27

// 1- Exercícios de escrita de código

const email = prompt("diga seu email")
const nomeDoUsuario = prompt("dia o nome do usario")

console.log`O email foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeDoUsuario}!`

// 2- Exercícios de escrita de código

const comidasPreferidas = ["churrasco", "pizza", "lasanha", "hambúrger", "queijo"]

console.log(comidasPreferidas)

console.log `Essas são as minhas 
${comidasPreferidas},`

const outraComida = prompt("qual sua comida favorita?")

console.log(outraComida)

console.log(comidasPreferidas[1],outraComida)


// 3- Exercícios de escrita de código

const listaDeTarefas = prompt("quais tarefas?")

console.log(listaDeTarefas)

 const listaDeTarefas1 = ["treinar", "arrumarCasa","fazerAtividade"]

console.log(listaDeTarefas1)

const tarefa = prompt("qual realizou")

console.log(tarefa)

listaDeTarefas1.splice(1)

console.log(listaDeTarefas1)