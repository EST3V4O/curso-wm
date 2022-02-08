const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// síncrono... Arquivos pesados travam o event-loop 
const conteudo = fs.readFileSync(caminho, 'utf-8') 
console.log(conteudo)

// assíncrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo)
  console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
  console.log('Conteúdo da pasta...')
  console.log(arquivos)
})