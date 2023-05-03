import Pesquisa from "../../Global/Busca";
import notaFiscalService from "../../../services/notaFiscalService.js";
import demandaService from "../../../services/demandaService";
import { AiFillPrinter } from "react-icons/ai";
import { useContext } from "react";
import { GlobalContext } from "../../../context";

export default function BuscaCadastroNF({
  setListaNotaPorViagem,
  setNotaSelecionada,
  setInfoViagem,
  idViagem,
  setIdViagem,
  imprimir,
}) {
  const { setOpen } = useContext(GlobalContext);

  async function buscarNotaFiscais() {
    setOpen(true);
    await notaFiscalService.listarNotasPorDemanda(idViagem).then((response) => {
      setListaNotaPorViagem(response);
      setNotaSelecionada([]);
    });

    await demandaService.buscarInfoViagem(idViagem).then((response) => {
      setInfoViagem(response);
    });

    setOpen(false);
  }

  return (
    <div
      style={{
        borderRadius: "5px",
        marginLeft: "8px",
        marginTop: "8px",
        background: "white",
        padding: "2%",
        width: "280px",
      }}
    >
      <div style={{ fontSize: "10px", marginBottom: "16px" }}>BUSCA</div>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "space-between",
        }}
      >
        <Pesquisa acao={buscarNotaFiscais} tipo="number" valor={idViagem} setar={setIdViagem} label="ID VIAGEM" />
        <AiFillPrinter onClick={() => imprimir()} style={{ cursor: "pointer" }} size={20} />
      </div>
    </div>
  );
}
