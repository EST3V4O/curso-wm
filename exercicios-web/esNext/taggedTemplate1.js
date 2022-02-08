// tagged template - processar o template dentro de uma função
function EventTarget(partes, ...valores) {
  console.log(partes)
  console.log(...valores)
  return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)