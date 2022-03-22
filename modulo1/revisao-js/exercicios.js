// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) { 
   
     
 return array.length
   
}
retornaTamanhoArray()

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  
    return array.reverse((a, b) => a - b);
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b);
  
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
 let arrayPares = [];
 for (index of array) {
     if (index % 2 === 0) {
      arrayPares.push(index);
     }
 } return arrayPares ;
 
}



// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 let arrayPares = []
 for (index of array) {
if (index % 2 === 0) {
    arrayPares.push(index ** 2)
}
 }

 return arrayPares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = 0
  for (let index = 0; index < array.length; index++) {
      const numeroArray = array[index]
      if (numeroArray > maiorNumero) {
          maiorNumero = numeroArray
      }
  }
  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
 let maiorNumero
 let menorNumero

 if (num1 > num2) {
 maiorNumero = num1
 menorNumero = num2
}else{
 maiorNumero = num2
 menorNumero = num1
}

    maiorDividirMenor = maiorNumero % menorNumero === 0
    const diferencaNumeros = maiorNumero - menorNumero
    return {
       maiorNumero: maiorNumero,
       maiorDivisivelPorMenor: maiorDividirMenor,
       diferenca : diferencaNumeros

    }
    
    
    }
 


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let pares = []
    let numerosPares = 0

    while (pares.length < n) {
     if (numerosPares % 2 ===0) {
         pares.push(numerosPares)
 }
    numerosPares++
    }
    return pares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
let definicao = ''

if (ladoA === ladoB && ladoA === ladoC) {
    definicao = "Equilátero"
 }else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
     definicao = "Escaleno"
    } else {
        definicao = "Isósceles"
    }
           return definicao 
        }

     
   

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
      
    let arrayMaiorEMenor = []
    const arrayCrescente = array.sort((a,b) => {
        if (a > b) return 1
        if (a < b) return -1
 
        return 0
    })
 arrayMaiorEMenor.push(arrayCrescente[arrayCrescente.length - 2])
 arrayMaiorEMenor.push(arrayCrescente[1])
 
 return arrayMaiorEMenor


}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
   


}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const anonimato = {...pessoa, nome:"ANÔNIMO"}
    return anonimato
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const alturaOk = 1.5
   const idadeMinima = 14
   const idadeMaxima = 60

   let autorizacao = pessoas.filter((item) =>{
       return !(item.altura < alturaOk || item.idade <= 
        idadeMinima || item.idade > idadeMaxima)
   })
return autorizacao
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const alturaOk = 1.5
  const idadeMinima = 14
  const idadeMaxima = 60

  let pessoasNaoAutorizadas = pessoas.filter((item) => {
      return item.altura < alturaOk || item.idade <= idadeMinima || 
      item.idade > idadeMaxima
  }
  )
  return pessoasNaoAutorizadas
}


// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let soma = 0
    let novoSaldo = 0

    for (let i = 0; i < contas.length; i++) {
        for (let somaCompras = 0; somaCompras < contas[i].compras.length; somaCompras++) {
            soma += contas[i].compras[somaCompras]
            novoSaldo = contas[i].saldoTotal - soma
            contas[i].saldoTotal = novoSaldo
            soma = 0
       
     }
     contas[i].compras = []
    }
  return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    let array = 
    [
        { nome: "João", dataDaConsulta: "01/10/2021" },
        { nome: "Pedro", dataDaConsulta: "02/07/2021" },
        { nome: "Paula", dataDaConsulta: "03/11/2021" },
        { nome: "Márcia", dataDaConsulta: "04/05/2021" },
      ]
    
    let arrayOrdenadoAlfabeticamente = array.sort(function(x , y) {
        let a = x.nome
        let b = y.nome

        return a == b ? 0 : a > b ? 1 : -1


    })
      
return arrayOrdenadoAlfabeticamente
      

  
}
        

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}