import { useEffect, useState } from "react";
import AdicionarTransportadoraCRUD from "../../../components/CRUD/Transportadora/Adicionar";
import TabelaTransporteCRUD from "../../../components/CRUD/Transportadora/Tabela";
import Titulo from "../../../components/Global/Titulo";
import SideBarMenu from "../../../components/SideBarMenu";
import transportadoraService from "../../../services/placasService";
import funcionariotransportadoraservice from "../../../services/funcionariotransportadoraservice";
import TabelaFunctionarioTransportadoraCRUD from "../../../components/CRUD/FuncionarioTransportadora/Tabela";
import AdicionarFunctionarioTransportadoraCRUD from "../../../components/CRUD/FuncionarioTransportadora/Adicionar";
import TabelaPlacaCRUD from "../../../components/CRUD/Placa/Tabela";
import AdicionarPlacaCRUD from "../../../components/CRUD/Placa/Adicionar";
import PlacasService from "../../../services/placasService";

export default function PlacaCRUD() {
  const [dadosPlacas, setDadosPlacas] = useState([]);
  const [buscar, setBuscar] = useState("");

  useEffect(() => {
    PlacasService.buscarPlacas().then((response) => setDadosPlacas(response));
  }, []);

  const filtrar =
    buscar.length > 0
      ? dadosPlacas.filter(
          (item) =>
            item?.placa?.toUpperCase().includes(buscar.toUpperCase()) ||
            item?.transportadora?.toUpperCase().includes(buscar.toUpperCase())
        )
      : dadosPlacas;

  return (
    <div style={{ display: "flex" }}>
      <SideBarMenu />
      <div style={{ width: "100%" }}>
        <Titulo titulo={"PLACA"} />
        <AdicionarPlacaCRUD buscar={buscar} setBuscar={setBuscar} />
        <TabelaPlacaCRUD data={filtrar} />
      </div>
    </div>
  );
}
