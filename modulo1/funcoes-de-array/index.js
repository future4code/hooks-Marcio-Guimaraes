// 1- Exercícios de Interpretação de Código

//const usuarios = [
    //{ nome: "Amanda Rangel", apelido: "Mandi" },
    //{ nome: "Laís Petra", apelido: "Laura" },
    //{ nome: "Letícia Chijo", apelido: "Chijo" }
  //]
  
  //const novoArrayA = usuarios.map((item, index, array) => {
    // console.log(item, index, array)
  //})

  // R: Uma nova Array contendo os nomes, apelidos e posições

  // 2- Exercícios de Interpretação de Código

  //const usuarios = [
    //{ nome: "Amanda Rangel", apelido: "Mandi" },
    //{ nome: "Laís Petra", apelido: "Laura" },
    //{ nome: "Letícia Chijo", apelido: "Chijo" },
  //]
  
  //const novoArrayB = usuarios.map((item, index, array) => {
     //return item.nome
 // })
  
  //console.log(novoArrayB)

  // R: Uma array só com os nomes: "Amanda Rangel", "Laís Petra," "Letícia Chijo"

  // 3- Exercícios de Interpretação de Código

  //const usuarios = [
   // { nome: "Amanda Rangel", apelido: "Mandi" },
   // { nome: "Laís Petra", apelido: "Laura" },
    //{ nome: "Letícia Chijo", apelido: "Chijo" },
 // ]
  
  //const novoArrayC = usuarios.filter((item, index, array) => {
    // return item.apelido !== "Chijo"
  //})
  
  //console.log(novoArrayC)

  // R: Uma nova Array sem "Letícia Chijo" e "Chijo"


  // 1- Exercícios de Escrita de Código
  //A)
     const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"}, 
]
    const pegaNome = (item, indice, array) => {
     return item.nome
    }
    
    const nomeDogs = pets.map (pegaNome)

    console.log(nomeDogs)
  // B)
    const arraySalsicha = pets.filter((salsicha) => {
        return salsicha.raca === "Salsicha"
    }
    
    )

    console.log(arraySalsicha)
  // C)

  const arrayPoodle = pets.filter((poodle) => {
      return poodle.raca === "Poodle"
  }
  )

  const promocao = arrayPoodle.map ((promo) => {
      return `você ganhou um cupom de desconto de 10% para tosar o/a ${promo.nome}`
  }
  )

  console.log (promocao)

  // 2- Exercícios de Escrita de Código

  // A)

  const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 } ]

    const pegandoNome = (item, indice, array) => {
        return item.nome
       }
       
       const nomeProduto = produtos.map (pegandoNome)
   
       console.log(nomeProduto)
    
   // B)

   const novosPrecos = produtos.map((item) =>{
       return {nome: item.nome, preco: (item.preco)*0.95.toFixed(2)}
   }
   )
   console.log(novosPrecos)

   // C)

   const arrayBebidas = produtos.filter((bebidas) => {
       return bebidas.categoria === "Bebidas"
   }
   
   )
   
   console.log(arrayBebidas)

   // D) 

    const nomeYpe = produtos.filter((produto) => {
     return produto.nome.includes("Ypê")
    }
  )

  console.log(nomeYpe)

  // E) 

  const fraseYpe = nomeYpe.map((nomeYpe) => {
      return `Compre ${nomeYpe.nome} por ${nomeYpe.preco}`
  }
  
  )

  console.log(fraseYpe)

  