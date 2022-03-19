import Navegador from "../components/Navegador";

export default function Inicio() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100vh'
    }}>
      <Navegador texto="Estiloso" destino="/estiloso" />
      <Navegador texto="Exemplo" destino="/exemplo" color="#9400d3" />
      <Navegador texto="JSX" destino="/jsx" color="crimson" />
      <Navegador texto="Navegação #01" destino="/navegacao" color="green" />
      <Navegador texto="Navegação #02" destino="/cliente/sp-2/321" color="blue" />
      <Navegador texto="Componente com Estado" destino="/estado" color="#a45b71" />
      <Navegador texto="Integração com API #01" destino="/integracao_1" color="#42a9a9" />
      <Navegador texto="Conteúdo Estático" destino="/estatico" color="#fa054a" />
    </div>
  )
}