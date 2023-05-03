import TabelaPadrao from "../../Global/Tabela";

export default function TabelaResultadoConferencia({ data }) {
  const infoDados = {
    titulo: [
      "Produto",
      "Descrição",
      "Contabil",
      "Fisico",
      "Avaria",
      "Diferença",
    ],
    conteudo: [
      "produto",
      "descricao",
      "contabil",
      "fisico",
      "avaria",
      "diferenca",
    ],
  };
  return (
    <div style={{ marginLeft: "8px", marginTop: "8px", marginRight: "16px" }}>
      <TabelaPadrao data={data} titulo={infoDados} />
    </div>
  );
}
