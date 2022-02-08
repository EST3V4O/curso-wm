function real(partes, ...valores) {
  const resultados = []
  valores.forEach((valor, indice) => {
    valor = isNaN(valor) ? valor : `R$ ${valor.toFixed(2)}`
    resultados.push(partes[indice], valor)
  })
  return resultados.join('')
}

const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}`)