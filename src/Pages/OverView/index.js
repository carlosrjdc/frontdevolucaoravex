import { useState } from "react";
import Titulo from "../../components/Global/Titulo";
import BuscarOverView from "../../components/OverView/Busca";
import CardOverView from "../../components/OverView/Card";
import FiltroOverView from "../../components/OverView/Filtro";
import TabelaOverView from "../../components/OverView/Tabela";
import SideBarMenu from "../../components/SideBarMenu";

export default function OverView() {
  const [dadosDemanda, setDadosDemanda] = useState([]);
  const [placa, setPlaca] = useState("");
  const [status, setStatus] = useState([]);

  function filtrostatus(idstatus) {
    const filtrado = status.filter((item) => item.status === idstatus);
    return filtrado[0]?.total === undefined ? 0 : filtrado[0]?.total;
  }

  const filtrar =
    placa.length > 0
      ? dadosDemanda.filter(
          (item) =>
            item?.placa.includes(placa.toUpperCase()) ||
            item?.id.toString().includes(placa) ||
            item?.transportadora.toString().includes(placa.toUpperCase()) ||
            item?.status.toString().includes(placa)
        )
      : dadosDemanda;

  console.log(dadosDemanda);

  return (
    <div style={{ display: "flex" }}>
      <SideBarMenu />
      <div style={{ width: "100%" }}>
        <Titulo titulo="OVERVIEW" />
        <div style={{ display: "flex" }}>
          <CardOverView titulo="A CONFERIR" status={filtrostatus("A Conferir")} />
          <CardOverView titulo=" EM CONFERENCIA" status={filtrostatus("Em Conferencia")} />
          <CardOverView titulo="CONFERIDO" status={filtrostatus("Conferido")} />
          <CardOverView titulo="CONCLUIDO" status={filtrostatus("Concluido")} />
        </div>
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "8px",
              background: "#fff",
              borderRadius: "5px",
            }}
          >
            <FiltroOverView placa={placa} setPlaca={setPlaca} />
            <BuscarOverView setDadosDemanda={setDadosDemanda} setStatus={setStatus} />
          </div>
          <div>
            <TabelaOverView dadosDemanda={filtrar} />
          </div>
        </div>
      </div>
    </div>
  );
}
