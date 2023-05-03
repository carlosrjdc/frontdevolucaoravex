import { useEffect, useState } from "react";
import AdicionarTransportadoraCRUD from "../../../components/CRUD/Transportadora/Adicionar";
import TabelaTransporteCRUD from "../../../components/CRUD/Transportadora/Tabela";
import Titulo from "../../../components/Global/Titulo";
import SideBarMenu from "../../../components/SideBarMenu";
import transportadoraService from "../../../services/placasService";
import funcionariotransportadoraservice from "../../../services/funcionariotransportadoraservice";
import TabelaFunctionarioTransportadoraCRUD from "../../../components/CRUD/FuncionarioTransportadora/Tabela";
import AdicionarFunctionarioTransportadoraCRUD from "../../../components/CRUD/FuncionarioTransportadora/Adicionar";

export default function FuncionarioTransportadoraCRUD() {
  const [dadosFuncionario, setDadosFuncionario] = useState([]);
  const [buscar, setBuscar] = useState("");

  useEffect(() => {
    funcionariotransportadoraservice
      .todosfuncionarios()
      .then((response) => setDadosFuncionario(response));
  }, []);

  const filtrar =
    buscar.length > 0
      ? dadosFuncionario.filter(
          (item) =>
            item?.nome.toUpperCase().includes(buscar.toUpperCase()) ||
            item?.transportadora?.toUpperCase().includes(buscar.toUpperCase())
        )
      : dadosFuncionario;

  return (
    <div style={{ display: "flex" }}>
      <SideBarMenu />
      <div style={{ width: "100%" }}>
        <Titulo titulo={"USUARIO TRANSPORTADORA"} />
        <AdicionarFunctionarioTransportadoraCRUD
          buscar={buscar}
          setBuscar={setBuscar}
        />
        <TabelaFunctionarioTransportadoraCRUD data={filtrar} />
      </div>
    </div>
  );
}
