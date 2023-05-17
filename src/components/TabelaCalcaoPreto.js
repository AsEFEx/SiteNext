export default function TabelaCalcaoPreto({ setShowTabela, setState, ano, tabela }) {
  return <>
    <style dangerouslySetInnerHTML={{
      __html: "table, td, th{border: 1px solid black; width: 5%}    th+th{border: 1px solid black; width:10%}    th+th+th{border: 1px solid black; width:20%}    th+th+th+th{border: 1px solid black; width: 25%}    table{border-collapse: collapse; width: 100%}    td{text-align: center; padding-left: 5px; padding-right: 5px; vertical-align: middle}"
    }} />
    <span className="hide">Início do conteúdo da página</span>

    <button style={{ borderRadius: "4px", marginBottom: "10px" }}
      variant="primary" className="btn-default" onClick={() => {
        setShowTabela(false)
        setState({ decada: "escolha", ano: "escolha", existeDados: true, preenchido: true })
      }}>
      Voltar
    </button>

    <p><b>Nr CP</b> - Número do Calção Preto</p>
    <p><b>QI</b> - Quadro de Intendentes</p>
    <div className="module-box-01">
      <div className="header"><h2 className="titulo-box" style={{ display: "flex", justifyContent: "center" }}><strong> {ano} </strong></h2></div>

      <table border={1}><tbody>
        <tr>
          <th>Nr CP</th>
          <th>Curso </th>
          <th>Posto</th>
          <th>Nome</th>
          <th>Arma</th>
        </tr>
        {tabela.Tabela.map((val, index) => {
          return <tr key={val.NrCP.toString()} style={{ height: "36px" }}>
            <td>{val.NrCP}</td>
            <td>{val.Curso}</td>
            <td><b>{val.Posto}</b></td>
            <td>{val.Nome}</td>
            <td>{val.Arma}</td>
          </tr>
        })}
      </tbody></table>
    </div>
  </>
}