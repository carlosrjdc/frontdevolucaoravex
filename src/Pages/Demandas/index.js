import { useContext, useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import BuscaDemanda from "../../components/Demanda/Busca";
import CadastroDemanda from "../../components/Demanda/Cadastro";
import InfoDemanda from "../../components/Demanda/Status";
import TabelaDemanda from "../../components/Demanda/Tabela";
import SideBarMenu from "../../components/SideBarMenu";
import { GlobalContext } from "../../context";
import { ComponentToPrint } from "../../components/Global/Impressao/ComponentToPrint";

export default function Demandas() {
  const { setOpen } = useContext(GlobalContext);
  const [notasDemandas, setNotasDemandas] = useState([]);
  const { infoDemanda, setInfoDemanda } = useContext(GlobalContext);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div style={{ display: "flex", width: "100%", fontFamily: "roboto" }}>
      <SideBarMenu />

      <div style={{ display: "none" }}>
        <ComponentToPrint info={infoDemanda} ref={componentRef} />
      </div>

      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <BuscaDemanda buscar={setNotasDemandas} buscarViagem={setInfoDemanda} imprimir={handlePrint} />
          <InfoDemanda
            setInfoDemanda={setInfoDemanda}
            setOpen={setOpen}
            idViagem={infoDemanda?.id}
            status={infoDemanda?.status}
          />
          <CadastroDemanda setOpen={setOpen} buscarViagem={setInfoDemanda} />
        </div>
        <div>
          <TabelaDemanda data={notasDemandas} idViagem={infoDemanda?.id} buscar={setNotasDemandas} setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
}
