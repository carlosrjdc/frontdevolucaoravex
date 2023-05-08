import Pesquisa from "../../Global/Busca";
import { FaFlagCheckered } from "react-icons/fa";
import { AiFillPrinter } from "react-icons/ai";
import demandaService from "../../../services/demandaService";
import { useContext, useState } from "react";
import PopUpModal from "../../Global/PopUpModal";
import { GlobalContext } from "../../../context";
import { Troubleshoot } from "@mui/icons-material";
import transportadoraService from "../../../services/placasService";
import notaFiscalService from "../../../services/notaFiscalService";

export default function Finalizar({ setResultadoDemanda, setInfoDemanda, infoDemanda, imprimir, setRelacaoNotas }) {
  const [idDemanda, setIdDemanda] = useState("");

  const [show, setShow] = useState(false);
  const { open, setOpen } = useContext(GlobalContext);

  async function carregarResultadoDemanda() {
    setOpen(true);
    await demandaService.resultadoConferencia(idDemanda).then((response) => {
      setResultadoDemanda(response);
    });

    await demandaService.buscarInfoDemanda(idDemanda).then((responsta) => {
      setInfoDemanda(responsta);
    });

    await notaFiscalService.NotaPorDemanda(idDemanda).then((resposta) => {
      setRelacaoNotas(resposta);
      setOpen(false);
    });
  }

  async function finalizarDemanda() {
    setOpen(true);
    await demandaService.finalizarDemandaAdm(idDemanda).then(() => {});
    const infoplaca = await transportadoraService.buscarTransportadoraporPlaca(infoDemanda.placa);

    imprimir();
  }

  async function imprimirDemanda() {
    imprimir();
  }

  return (
    <div
      style={{
        borderRadius: "5px",
        marginLeft: "8px",
        marginTop: "8px",
        background: "white",
        padding: "2%",
        width: "97%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        {show && (
          <PopUpModal
            titulo="Confirmação de Cadastro"
            corpo="Deseja realmente finalizar a demanda??"
            confirmar={() => finalizarDemanda()}
            fechar={() => setShow(false)}
            disabilitar={infoDemanda.status === "Conferido" ? false : true}
          />
        )}
        <div style={{ fontSize: "10px", marginBottom: "16px" }}>BUSCA</div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <Pesquisa acao={carregarResultadoDemanda} valor={idDemanda} setar={setIdDemanda} label="ID DEMANDA" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "10%",
        }}
      >
        <div>
          <AiFillPrinter onClick={imprimirDemanda} style={{ cursor: "pointer" }} size={30} />
        </div>
        <div>
          <FaFlagCheckered style={{ cursor: "pointer" }} onClick={() => setShow(true)} size={30} />
        </div>
      </div>
    </div>
  );
}
