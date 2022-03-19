export default function Jsx() {
  const titulo = <h1>JSX é um Conceito Central</h1>
  
  function subtitulo() {
    return <h2>{"muito legal".toLocaleUpperCase()}</h2>
  }

  return (
    <div>
      { titulo }
      { subtitulo() }
      <p>
        {JSON.stringify({ nome: 'João', idade: 30 })}
      </p>
    </div>
  )
}