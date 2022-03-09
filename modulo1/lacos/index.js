// 1- Exercícios de Interpretação de código

//let valor = 0
//for(let i = 0; i < 5; i++) {
  //valor += i
//}
//console.log(valor)

// R: 10 

// 2- Exercícios de Interpretação de código

//const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
//for (let numero of lista) {
 // if (numero > 18) {
		//console.log(numero)
	//}
//}

// A- Retorna todos os números maiores que 18: 19,21,23,25,27,30
// B- Sim. Usando o Lenght

// 3- Exercícios de Interpretação de código

//const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
//let quantidadeAtual = 0
//while(quantidadeAtual < quantidadeTotal){
 // let linha = ""
 // for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
   // linha += "*"
 // }
 // console.log(linha)
  //quantidadeAtual++
//}

//*
//** 
//*** 
//**** 

// 1- Exercícios de Escrita de Código


//- **Exercícios de escrita de código**
    //1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
        
        //a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"
        
        //b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array
        
        //- 💡 Dica
            
            
            //⭐ Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.
            
        
       // c) Por fim, imprima o array com os nomes dos bichinhos no console

let nomePet = []
const pergunta = Number(prompt("Quantos bichinhos de estimação você tem?"))
let quantidadeDePets = 0
console.log(quantidadeDePets)

function bichos() {
if (pergunta === 0) {
    console.log("Que pena! Você pode adotar um pet!")
}else{}
}
while (quantidadeDePets < pergunta) {
    nomePet.push(prompt("digite um nome"))
    quantidadeDePets++
}
   console.log(nomePet)
{
    bichos()
}

//2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:
    
//a) Escreva um programa que **imprime** cada um dos valores do array original.
    
//b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

//c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

//d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

//A

let arrayOriginal = [70,130,150,170,230,250,290,333,360,410] 

console.log(arrayOriginal) 

//B

let newArray = arrayOriginal.map(item => item /10) 
console.log(newArray)    

//C

for (item of arrayOriginal) {
    if (item % 2 === 0) {
        console.log(item)
    }
}

//D 

for (let i=0; i<arrayOriginal.length; i++) {
    
    console.log(`O elemento do índex${i+1}- é: ${arrayOriginal[i]}`)

}

//E 

function imprimirMaioreMenorNumero(arrayOriginal) {}

let numMaior = 0;
let numMenor = 0;

for (let i=0; i<arrayOriginal.length; i++) {
    if (arrayOriginal[i] > numMaior){
        numMaior = arrayOriginal[i]; {
            
        }
       } else if (arrayOriginal[i] < numMenor) {
           numMenor = arrayOriginal[i];
       }
    } console.log(`O maior número é ${numMaior} e o menor é ${numMenor}`)


imprimirMaioreMenorNumero(arrayOriginal)



