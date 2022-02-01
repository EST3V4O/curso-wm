Array.prototype.map2 = function(callback) {
  const newArray = []
  for (let i in this) {
    newArray.push(callback(this[i], i, this))
  }
  return newArray
}

const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "Kit de Lapis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.5 }'
]

// Retornar um array com apenas com os preços

const paraObjeto = json => JSON.parse(json)
const paraPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map2(paraPreco)
console.log(resultado)