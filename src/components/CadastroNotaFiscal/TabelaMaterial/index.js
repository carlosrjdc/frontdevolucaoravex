import TabelaPadrao from "../../Global/Tabela";

export default function TabelaMaterial({ notaSelecionada }) {
  const infoDados = {
    titulo: ["Codigo", "Quantidade"],
    conteudo: ["codigo", "quantidadeDevolvida"],
  };

  console.log(notaSelecionada?.itens);
  return (
    <div>
      <TabelaPadrao minimo={300} titulo={infoDados} data={notaSelecionada?.itens.filter((filtrar) => filtrar.motivo !== null)} />
    </div>
  );
}
