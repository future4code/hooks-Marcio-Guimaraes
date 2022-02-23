// 1- Exercícios de Interpretação de código 

// Matheus Nachtergaele
// Virginia Cavendish
// Globo 14h 

// 2- Exercícios de Interpretação de código

//A) nome: "Juca", Idade: 3, raça: "SRD"
// nome: "Juba", Idade: 3, raça: "SRD"
// nome: "Jubo", Idade: 3, raça: "SRD"

//B) Ela inclui as propriedades do objeto anterior.

// 3- Exercícios de Interpretação de código

//A) false
// Undefined

//B) Não foi declarado e definido um valor a "altura"


// 1- Exercícios de escrita de código

const pessoa = {
    nome: "Amanda", 
    apelidos: ["Amandinha", "Mandinha", "Mandi"],
    
 }

 const mesmaPessoa = {
     ...pessoa,
     apelidos: [...pessoa.apelidos, "Mandoca", "Mandona", "Manduca"]
 }
 

console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos}`)
console.log(mesmaPessoa)

// 2- Exercícios de escrita de código

const pessoa1 = {
	nome: "Márcio", 
  idade: 36, 
	profissao: "Técnico em Informática",

}


const pessoa2 = {

    nome: "Joaquim",
    idade: 28,
    profissao: "Médico"
}

let arr1 = [pessoa1.nome, pessoa1.nome.length, pessoa1.idade, pessoa1.profissao, pessoa1.profissao.length]
let arr2 = [pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.profissao, pessoa2.profissao.length]


 console.log(arr1)
 console.log(arr2)

 // 3- Exercícios de escrita de código

 const carrinho = []
const fruta = {
   nome: "kiwi",
   disponibilidade: true
}

const fruta1 = {
  nome: "uva",
  disponibilidade: true

}
const fruta2 = {
   nome: "manga",
   disponibilidade: true
}

function adicionarCarrinho(objeto,objeto1,objeto2){
    carrinho.push(objeto1,objeto2)
    return carrinho
}
console.log(adicionarCarrinho(fruta,fruta1,fruta2))