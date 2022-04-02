const express = require('express')
const app = express()

const saudacao = require('./saudacaoMid')

const usuarioApi = require('./api/usuario')
const produtoApi = require('./api/produto')
produtoApi(app, 'com param!')

app.post('/usuario', usuarioApi.salvar)
app.get('/usuario', usuarioApi.obter)

app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(saudacao('Guilherme'))

app.use((req, res, next) => {
  console.log('Antes...')
  next()
})

app.get('/clientes/relatorio', (req, res) => {
  res.send(`Cliente relatório: completo = ${req.query.completo} ano = ${req.query.ano}`)
})

app.post('/corpo', (req, res) => {
  // let corpo = ''
  // req.on('data', function(parte) {
  //   corpo += parte
  // })

  // req.on('end', function() {
  //   res.send(corpo)
  // })
    res.send(JSON.stringify(req.body))
})

app.get('/clientes/:id', (req, res) => {
  res.send(`Cliente ${req.params.id} selecionado!`)
})

app.get('/opa', (req, res, next) => {
  console.log('Durante...')
  res.json({
    data: [
      { id: 7, nome: 'Ana', position: 1 },
      { id: 34, nome: 'Bia', position: 2 },
      { id: 73, nome: 'Carlos', position: 3 },
    ],
    count: 30,
    skip: 0,
    limit: 3,
    status: 200
  })

  next()

  // res.json({
  //   name: "iPad 32Gb",
  //   price: 1899.00,
  //   discount: 0.12
  // })

  // res.send('<h1>Estou bem!</h1><br><h2>Tipo é HTML!</h2>')
})

app.use((req, res) => {
  console.log('Depois...')
})

app.listen(3000, () => {
  console.log('Server is running')
})