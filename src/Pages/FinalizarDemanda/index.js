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
  const [relacaoNotas, setRelacaoNotas] = useState([]);

  //    await notaFiscalService.NotaPorDemanda(idDemanda).then((responsta) => {
  //  setRelacaoNotas(responsta);
  //  setOpen(false);
  //});

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div style={{ display: "flex" }}>
      <SideBarMenu />
      <div style={{ display: "none" }}>
        <ComponentToPrintRelatorio
          relacaoNotas={relacaoNotas}
          data={infoDemanda}
          datadois={resultadoDemanda}
          ref={componentRef}
        />
      </div>
      <div style={{ width: "100%" }}>
        <Titulo titulo="Finalizar Demanda" />
        <div>Imprimir</div>
        <Finalizar
          setRelacaoNotas={setRelacaoNotas}
          setInfoDemanda={setInfoDemanda}
          setResultadoDemanda={setResultadoDemanda}
          infoDemanda={infoDemanda}
          imprimir={handlePrint}
        />
        <InformacoesFinalizarDemanda relacaoNotas={relacaoNotas} data={infoDemanda} />
        <TabelaResultadoConferencia data={resultadoDemanda} />
      </div>
    </div>
  );
}
