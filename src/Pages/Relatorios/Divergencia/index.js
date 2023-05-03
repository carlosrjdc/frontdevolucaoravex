import { useState } from "react";
import FiltroRelatorioDivergencia from "../../../components/Relatorios/Divergencia/Filtros";
import TabelaRelatorioDivergencia from "../../../components/Relatorios/Divergencia/Tabela";
import SideBarMenu from "../../../components/SideBarMenu";

export default function RelatorioDivergencia() {
  const [dadosRelatorio, setDadosRelatorio] = useState([]);

  return (
    <div style={{ display: "flex" }}>
      <SideBarMenu />
      <div style={{ width: "100%" }}>
        <div>
          <FiltroRelatorioDivergencia
            dadosRelatorio={dadosRelatorio}
            setDadosRelatorio={setDadosRelatorio}
          />
        </div>
        <TabelaRelatorioDivergencia data={dadosRelatorio} />
      </div>
    </div>
  );
}
