import Link from 'next/link'
import styles from '../styles/Estiloso.module.css'

export default function Estiloso() {
  return (
    <div className={styles.roxo}>
      <Link href="/">Voltar</Link>
      <h1>Estilo usando CSS Módulos</h1>
    </div>    
  )
}