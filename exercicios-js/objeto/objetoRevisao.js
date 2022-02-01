// coleção dinâmica de pares chaves/valor
const produto = new Object
produto.nome = "Cadeira"
produto["marca do produto "] = "Genérica"
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto["marca do produto "]

console.log(produto)

const carro = {
  modelo: 'A4',
  preco: 89000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereco: {
      logradouro: 'Rua Abc',
      numero: 123
    }
  },
  condutores: [{
    nome: 'Junior',
    idade: 19
  }, {
    nome: 'Ana',
    idade: 42
  }],
  calcularValorDoSeguro: function () {
    // ...
  }
}

carro.proprietario.endereco.numero = 1000
carro["proprietario"]["endereco"]["logradouro"] = 'Av Gigante'

console.log(carro)

// delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorDoSeguro

console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)