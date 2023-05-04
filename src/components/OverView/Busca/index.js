import { useContext, useEffect, useState } from "react";
import demandaService from "../../../services/demandaService";
import Pesquisa from "../../Global/Busca";
import { GlobalContext } from "../../../context";
import moment from "moment-timezone";

export default function BuscarOverView({ setDadosDemanda, setStatus }) {
  const [data, setData] = useState(moment(new Date()).format("YYYY-MM-DD"));
  const { setOpen } = useContext(GlobalContext);

  async function buscarDemandaPorData() {
    setOpen(true);
    await demandaService.buscarDemandasPorData(moment(data).format("YYYY-MM-DD")).then((response) => setDadosDemanda(response));
    await demandaService.statusPorData(moment(data).format("YYYY-MM-DD")).then((response) => setStatus(response));
    setOpen(false);
  }

  useEffect(() => {
    buscarDemandaPorData();
  }, []);

  return (
    <div
      style={{
        width: "290px",
        padding: "16px",
        margin: "8px",
        background: "#fff",
        borderRadius: "5px",
      }}
    >
      <Pesquisa label="Data" tipo={"date"} valor={data} setar={setData} acao={buscarDemandaPorData} />
    </div>
  );
}
