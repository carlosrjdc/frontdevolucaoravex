import helpers from "../../../helpers";
import TabelaPadrao from "../../Global/Tabela";

export default function TabelaNotaFiscal({ data, setNotaSelecionada }) {
  //Incluir atributo ao array "Lixeira"
  for (let i = 0; i < data.length; i++) {
    data[i].statusdevolucao = helpers.verTipoDevolucao(data[i].tipoRetorno);
  }

  function acao(linha) {
    setNotaSelecionada(helpers.filtrarItensNota(data, linha.numeroNotaFiscal));
  }

  const infoDados = {
    titulo: ["NF", "Status"],
    conteudo: ["numeroNotaFiscal", "statusdevolucao"],
  };
  return (
    <div style={{ marginRight: "16px" }}>
      <TabelaPadrao acao={acao} data={data} minimo={400} titulo={infoDados} />
    </div>
  );
}
