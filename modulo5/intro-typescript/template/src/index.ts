const a: number = 2
const b: number = 3
const c: number = 6


function checaTriangulo(a: number, b: number, c: number) {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

  console.log(checaTriangulo(2,4,6))