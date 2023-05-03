import TabelaPadrao from "../../Global/Tabela";
import moment from "moment-timezone";

export default function TabelaOverView({ dadosDemanda }) {
  const infoDados = {
    titulo: [
      "Id",
      "Placa",
      "Data",
      "Transportadora",
      "Status",
      "Conferente",
      "Doca",
      "Gerada",
      "Inicio Conf",
      "Fim Conf",
      "Fechamento",
    ],
    conteudo: [
      "id",
      "placa",
      "data",
      "transportadora",
      "status",
      "nomeConferente",
      "Doca",
      "criado",
      "Inicio_Conf",
      "Fim_Conf",
      "Termino",
    ],
  };

  //Incluir atributo ao array "Lixeira"
  for (let i = 0; i < dadosDemanda.length; i++) {
    dadosDemanda[i].nomeConferente = dadosDemanda[i]?.conferente?.nome;
    dadosDemanda[i].criado =
      dadosDemanda[i].createdAt === null ? null : moment(dadosDemanda[i].createdAt).format("DD/MM/YYYY HH:mm:ss");
    dadosDemanda[i].Inicio_Conf =
      dadosDemanda[i].inicioConferencia === null ? null : moment(dadosDemanda[i].inicioConferencia).format("DD/MM/YYYY HH:mm:ss");
    dadosDemanda[i].Fim_Conf =
      dadosDemanda[i].fimConferencia === null ? null : moment(dadosDemanda[i].fimConferencia).format("DD/MM/YYYY HH:mm:ss");
    dadosDemanda[i].Termino =
      dadosDemanda[i].fimProcesso === null ? null : moment(dadosDemanda[i].fimProcesso).format("DD/MM/YYYY HH:mm:ss");
  }

  return (
    <div style={{ margin: "8px" }}>
      <TabelaPadrao data={dadosDemanda} titulo={infoDados} />
    </div>
  );
}
