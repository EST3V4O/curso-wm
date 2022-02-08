function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    try {
      con.log('temp')
      if(Math.random() < chanceErro) {
        reject('Ocorreu um erro!')
      } else {
        resolve(valor)
      }
    } catch (e) {
      reject(e)
    }
  })
}

funcionarOuNao('Testando...', 0.5)
  .then(v => v)
  .then(
    v => consol.log(v),
    err => console.log(err)
  )
  .then(() => console.log('Quase Fim!'))
  .catch(console.log)
  .then(() => console.log('Fim!'))