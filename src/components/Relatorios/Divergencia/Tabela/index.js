import TabelaPadrao from "../../../Global/Tabela";

export default function TabelaRelatorioDivergencia({ data }) {
  console.log(data);
  const infoDados = {
    titulo: [
      "idDemanda",
      "NF",
      "parcial",
      "Motivo",
      "Sku",
      "Descrição",
      "Placa",
      "Transportadora",
      "Conferente",
      "Doca",
      "Tipo",
      "Quantidade",
    ],
    conteudo: [
      "idDemanda",
      "nota_fiscal",
      "Nota_parcial",
      "motivo",
      "produto",
      "descricao",
      "placa",
      "transportadora",
      "conferente",
      "doca",
      "tipo",
      "quantidade",
    ],
  };

  //Incluir atributo ao array "Lixeira"
  for (let i = 0; i < data.length; i++) {
    data[i].descricao = data[i]?.materiais?.descricao;
  }

  return (
    <div style={{ margin: "8px" }}>
      <TabelaPadrao data={data} titulo={infoDados} />
    </div>
  );
}
