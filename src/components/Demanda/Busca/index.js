import Pesquisa from "../../Global/Busca";
import demandaService from "../../../services/demandaService";
import { useNavigate } from "react-router-dom";
import { AiFillPrinter } from "react-icons/ai";
import { useState } from "react";

export default function BuscaDemanda({ buscar, buscarViagem, imprimir }) {
  const [idViagem, setIdViagem] = useState("");
  const navigate = useNavigate();

  async function BuscarDados() {
    await demandaService
      .listarNotasPorDemanda(idViagem)
      .then((response) => buscar(response));
    await demandaService
      .buscarInfoDemanda(idViagem)
      .then((response) => buscarViagem(response));
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
        <Pesquisa
          valor={idViagem}
          setar={setIdViagem}
          acao={BuscarDados}
          label="ID DEMANDA"
        />
        <AiFillPrinter
          onClick={() => imprimir()}
          style={{ cursor: "pointer" }}
          size={20}
        />
      </div>
    </div>
  );
}
