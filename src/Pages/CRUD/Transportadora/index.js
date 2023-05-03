import { useEffect, useState } from "react";
import AdicionarTransportadoraCRUD from "../../../components/CRUD/Transportadora/Adicionar";
import TabelaTransporteCRUD from "../../../components/CRUD/Transportadora/Tabela";
import Titulo from "../../../components/Global/Titulo";
import SideBarMenu from "../../../components/SideBarMenu";
import transportadoraService from "../../../services/transportadoraService";

export default function TransportadoraCRUD() {
  const [dadosTransportadora, setDadosTransportadora] = useState([]);

  useEffect(() => {
    transportadoraService
      .buscarTransportadoras()
      .then((response) => setDadosTransportadora(response));
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <SideBarMenu />
      <div style={{ width: "100%" }}>
        <Titulo titulo={"TRANSPORTADORA"} />
        <AdicionarTransportadoraCRUD />
        <TabelaTransporteCRUD data={dadosTransportadora} />
      </div>
    </div>
  );
}
