import { useContext, useState, useRef } from "react";
import BuscaCadastroNF from "../../components/CadastroNotaFiscal/Busca";
import InfoNotaFiscal from "../../components/CadastroNotaFiscal/InfoNotaFiscal";
import InfoDemandaNotaFiscal from "../../components/CadastroNotaFiscal/Status";
import TabelaMaterial from "../../components/CadastroNotaFiscal/TabelaMaterial";
import TabelaNotaFiscal from "../../components/CadastroNotaFiscal/TabelaNotaFiscal";
import SideBarMenu from "../../components/SideBarMenu";
import { GlobalContext } from "../../context";
import CadastrarNotaFiscal from "../../components/CadastroNotaFiscal/Cadastro";
import helpers from "../../helpers";
import { ComponentToPrint } from "../../components/Global/Impressao/ComponentToPrint";
import { useReactToPrint } from "react-to-print";

export default function CadastroNotaFiscal() {
  const { infoViagem, setInfoViagem, infoDemanda } = useContext(GlobalContext);
  const [listaNotaPorViagem, setListaNotaPorViagem] = useState([]);
  const [notaSelecionada, setNotaSelecionada] = useState("");
  const [idViagem, setIdViagem] = useState("");

  const idSolicitante = sessionStorage.getItem("id");

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  console.log(
    helpers
      .converterArraydeProdutosParaInput(
        notaSelecionada?.itens,
        infoDemanda?.id,
        notaSelecionada?.numeroNotaFiscal,
        notaSelecionada?.statusdevolucao
      )
      .filter((item) => item !== undefined)
  );

  const objetoInput = {
    idDemanda: infoDemanda.id,
    status_nf: notaSelecionada.statusdevolucao,
    nota_fiscal: notaSelecionada.numeroNotaFiscal,
    operador: parseInt(idSolicitante),
    motivodevolucao: notaSelecionada?.motivo?.descricao,
    transporte: infoViagem?.identificador,
    id_viagem: infoViagem?.id,
    produtos: helpers
      .converterArraydeProdutosParaInput(
        notaSelecionada?.itens,
        infoDemanda?.id,
        notaSelecionada?.numeroNotaFiscal,
        notaSelecionada?.statusdevolucao
      )
      .filter((item) => item !== undefined),
  };

  return (
    <div style={{ display: "flex" }}>
      <SideBarMenu />
      <div style={{ display: "none" }}>
        <ComponentToPrint info={infoDemanda} ref={componentRef} />
      </div>
      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <BuscaCadastroNF
            setNotaSelecionada={setNotaSelecionada}
            setListaNotaPorViagem={setListaNotaPorViagem}
            imprimir={handlePrint}
            setInfoViagem={setInfoViagem}
            idViagem={idViagem}
            setIdViagem={setIdViagem}
          />
          <InfoDemandaNotaFiscal />
          <InfoNotaFiscal notaSelecionada={notaSelecionada} />
        </div>
        <div
          style={{
            display: "flex",
            padding: "1.8%",
            alignItems: "flex-start",
          }}
        >
          <TabelaNotaFiscal setNotaSelecionada={setNotaSelecionada} data={listaNotaPorViagem} />
          <TabelaMaterial notaSelecionada={notaSelecionada} />
          <CadastrarNotaFiscal objetoInput={objetoInput} />
        </div>
      </div>
    </div>
  );
}
