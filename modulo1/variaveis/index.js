//deve aparecer 10 e 10 e 5
// 10, 10 e 10
//let cargaHoraria 
//let valorHorasTrabalhadas

let meuNome
let minhaIdade
console.log(typeof meuNome, typeof minhaIdade)
//deu indefinido porque eu não defini os valores

let nome = prompt("qual seu nome?")
let idade = prompt("qual sua idade?")
console.log(typeof nome, typeof idade)

//apareceu string string

console.log("olá meu nome", nome, "minha idade é", idade)

 const sim = true
 const não = false

 let pergunta = prompt("Você está usando uma roupa azul hoje?");true
 let pergunta1 = prompt("você está cansado hoje?"); true
 let pergunta2 = prompt("você está triste?"); false
 let pergunta3 = prompt("você não gosta de tecnologia?"); false

 console.log("você está usando uma roupa azul hoje?", sim, "você está cansado hoje?", sim, 
 "você está triste?", não, "você não gosta de tecnologia?", sim) 
 
let a = 10;
let b = 25;
let c = a
a = b
b = c

console.log(a, b)