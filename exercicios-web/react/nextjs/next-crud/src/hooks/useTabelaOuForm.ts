import { useState } from "react";

export default function useTabelaOuForm() {
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  
  const exibirFormulario = () => setVisivel('form')
  const exibirTabela = () => setVisivel('tabela')

  return {
    visivel,
    exibirFormulario,
    exibirTabela
  }
}