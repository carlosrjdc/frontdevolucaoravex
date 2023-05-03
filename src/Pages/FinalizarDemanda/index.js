import { useState, useRef } from "react";
import Finalizar from "../../components/FinalizarDemanda/Finalizar";
import TabelaResultadoConferencia from "../../components/FinalizarDemanda/Tabela";
import Titulo from "../../components/Global/Titulo";
import SideBarMenu from "../../components/SideBarMenu";
import InformacoesFinalizarDemanda from "../../components/FinalizarDemanda/Informacoes";
import { useReactToPrint } from "react-to-print";
import { ComponentToPrintRelatorio } from "../../components/Global/Impressao/ComponentToPrintRelatorio";

export default function FinalizarDemanda() {
  const [resultadoDemanda, setResultadoDemanda] = useState([]);
  const [infoDemanda, setInfoDemanda] = useState([]);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div style={{ display: "flex" }}>
      <SideBarMenu />
      <div style={{ display: "none" }}>
        <ComponentToPrintRelatorio
          data={infoDemanda}
          datadois={resultadoDemanda}
          ref={componentRef}
        />
      </div>
      <div style={{ width: "100%" }}>
        <Titulo titulo="Finalizar Demanda" />
        <Finalizar
          setInfoDemanda={setInfoDemanda}
          setResultadoDemanda={setResultadoDemanda}
          infoDemanda={infoDemanda}
          imprimir={handlePrint}
        />
        <InformacoesFinalizarDemanda data={infoDemanda} />
        <TabelaResultadoConferencia data={resultadoDemanda} />
      </div>
    </div>
  );
}
