import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Table from "../components/Tabela";
import useClientes from "../hooks/useClientes";
import useTabelaOuForm from "../hooks/useTabelaOuForm";

export default function Home() {
  const {
      selecionarCliente,
      excluirCliente,
      cliente,
      clientes,
      novoCliente,
      salvarCliente,
      visivel,
      exibirTabela
  } = useClientes()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        { visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao
                cor="green"
                className="mb-4"
                onClick={novoCliente}
              >
                Novo Cliente
              </Botao>
            </div>
            <Table 
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            cancelado={exibirTabela}
            clienteMudou={salvarCliente}  
          />
        )}
      </Layout>
    </div>
  )
}
