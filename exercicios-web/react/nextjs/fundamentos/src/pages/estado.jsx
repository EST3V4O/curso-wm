import { useState } from 'react/cjs/react.production.min'
import Layout from '../components/Layout'

export default function Estado() {
  const [numero, setNumero] = useState(0) // Hooks

  function incrementar() {
    setNumero(numero + 1)
  }

  return (
    <Layout titulo="Componente com Estado">
      <div>{numero}</div>
      <button onClick={incrementar}>Incrementar</button>
    </Layout>
  )
}