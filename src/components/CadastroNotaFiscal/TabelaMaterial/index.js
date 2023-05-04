import TabelaPadrao from "../../Global/Tabela";

export default function TabelaMaterial({ notaSelecionada }) {
  const infoDados = {
    titulo: ["Codigo", "Quantidade"],
    conteudo: ["codigo", "quantidadeDevolvida"],
  };

  const novoArrayProduto = notaSelecionada?.itens
    ? notaSelecionada?.itens.filter((filtrar) => filtrar.motivo !== null)
    : notaSelecionada?.itens;

  return (
    <div>
      <TabelaPadrao minimo={300} titulo={infoDados} data={novoArrayProduto} />
    </div>
  );
}
