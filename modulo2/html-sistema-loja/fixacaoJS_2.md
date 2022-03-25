```function calculaPrecoTotal(quantidade) {```
  // Escreva seu código aqui
```const meiaDuzia = 6```
```const umaDuzia = 12``
``const valorMacaMenosMeiaDuzia = 1.30``
``const valorMacaMaisDeUmaDuzia = 1.00``
``const totalCompraMenosMeiaDuzia = quantidade * valorMacaMenosMeiaDuzia``
``const totalCompraMaisMeiaDuzia = quantidade * valorMacaMaisDeUmaDuzia``

``if(quantidade < meiaDuzia) {``
  ``return totalCompraMenosMeiaDuzia``
``} else if(quantidade >= umaDuzia) {``
  ``return totalCompraMaisMeiaDuzia``
  
``}else{``
  ``return calculaPrecoTotal``
  
``}``

``}``

