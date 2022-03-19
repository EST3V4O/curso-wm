import Layout from "../components/Layout";

export async function getStaticProps() {
  // pode ser feito uma chamada a api
  return {
    props: {
      numero: Math.random()
    }
  }
}

export default function Estatico(props) {
  return (
    <Layout titulo="Conteúdo Estático">
      <div>{props.numero}</div>
    </Layout>
  )
}
