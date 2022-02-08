function soBoaNoticia(nota) {
  if(nota >= 7) {
   console.log("Aprovado com " + nota) 
  }
}

console.log(soBoaNoticia(8.6))
console.log(soBoaNoticia(6.1))

function seForVerdadeEuFalo(valor) {
  if(valor) {
    console.log("É verdade... " + valor)
  }
}

console.log(seForVerdadeEuFalo())
console.log(seForVerdadeEuFalo(null))
console.log(seForVerdadeEuFalo(undefined))
console.log(seForVerdadeEuFalo(NaN))
console.log(seForVerdadeEuFalo(''))
console.log(seForVerdadeEuFalo(0))
console.log(seForVerdadeEuFalo(-1))
console.log(seForVerdadeEuFalo(' '))
console.log(seForVerdadeEuFalo('?'))
console.log(seForVerdadeEuFalo([]))
console.log(seForVerdadeEuFalo([1, 2]))
console.log(seForVerdadeEuFalo({}))