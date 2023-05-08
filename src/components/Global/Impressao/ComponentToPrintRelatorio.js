import React, { useContext } from "react";
import TabelaResultadoConferencia from "../../FinalizarDemanda/Tabela";
import InformacoesFinalizarDemanda from "../../FinalizarDemanda/Informacoes";

export const ComponentToPrintRelatorio = React.forwardRef((props, ref) => {
  const { info, data, datadois, relacaoNotas } = props;
  return (
    <div
      style={{
        fontWeight: "bold",
        padding: "2%",
        textAlign: "center",
      }}
      ref={ref}
    >
      <InformacoesFinalizarDemanda relacaoNotas={relacaoNotas} data={data} />
      <TabelaResultadoConferencia data={datadois} />
    </div>
  );
});
