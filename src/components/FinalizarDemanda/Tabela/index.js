import TabelaPadrao from "../../Global/Tabela";

export default function TabelaResultadoConferencia({ data }) {
  const infoDados = {
    titulo: ["Produto", "Descrição", "Contabil", "Fisico", "Avaria", "Diferença"],
    conteudo: ["produto", "descricao", "contabil", "fisico", "avaria", "diferenca"],
  };
  return (
    <div style={{ marginLeft: "8px", marginTop: "8px", marginRight: "16px" }}>
      <TabelaPadrao data={data} titulo={infoDados} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div>_______________________________________________</div>
          <div>Assinatura Motorista:</div>
        </div>
        <div>
          <div>_______________________________________________</div>
          <div>Assinatura Lactalis:</div>
        </div>
      </div>
    </div>
  );
}
