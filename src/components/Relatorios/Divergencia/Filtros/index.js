import { useContext, useState } from "react";
import Pesquisa from "../../../Global/Busca";
import { FaFileExcel } from "react-icons/fa";
import { GlobalContext } from "../../../../context";
import RelatoriosService from "../../../../services/relatorios";
import moment from "moment-timezone";
import { exportarParaExcel } from "../../../Global/ExportarExcel";

export default function FiltroRelatorioDivergencia({
  setDadosRelatorio,
  dadosRelatorio,
}) {
  const [data, setData] = useState("");
  const { open, setOpen } = useContext(GlobalContext);

  async function CarregarRelatorioDivergencia() {
    setOpen(true);
    RelatoriosService.anomalisPorData(moment(data).format("YYYY-MM-DD"))
      .then((response) => {
        setDadosRelatorio(response);
        setOpen(false);
      })
      .catch((erro) => setOpen(false));
  }

  function exportarxlsx() {
    exportarParaExcel(dadosRelatorio);
  }

  return (
    <div
      style={{
        padding: "16px",
        background: "#fff",
        margin: "8px",
        borderRadius: "8px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Pesquisa label="Buscar" />
        <div style={{ display: "flex", alignItems: "center" }}>
          <Pesquisa
            acao={CarregarRelatorioDivergencia}
            valor={data}
            setar={setData}
            label="Data"
            tipo="date"
          />
          <FaFileExcel
            onClick={exportarxlsx}
            style={{ marginLeft: "32px", cursor: "pointer" }}
            size={25}
          />
        </div>
      </div>
    </div>
  );
}
