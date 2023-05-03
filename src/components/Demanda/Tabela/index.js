import { BsTrash } from "react-icons/bs";
import TabelaPadrao from "../../Global/Tabela";
import PopUpModal from "../../Global/PopUpModal";
import { useState } from "react";
import demandaService from "../../../services/demandaService";

export default function TabelaDemanda({ data, idViagem, buscar, setOpen }) {
  const [show, setShow] = useState(false);
  const [idNota, setIdNota] = useState("");
  const [nota, SetNota] = useState("");

  const infoDados = {
    titulo: [
      "id",
      "idDemanda",
      "nota_fiscal",
      "nota_fiscal_parcial",
      "transporte",
      "id_viagem",
      "status_nf",
      "Excluir",
    ],
    conteudo: [
      "id",
      "idDemanda",
      "nota_fiscal",
      "nota_fiscal_parcial",
      "transporte",
      "id_viagem",
      "status_nf",
      "icone",
    ],
  };

  //Incluir atributo ao array "Lixeira"
  for (let i = 0; i < data.length; i++) {
    data[i].icone = (
      <BsTrash
        onClick={() => {
          setIdNota(data[i].id);
          SetNota(data[i].nota_fiscal);
          setShow(true);
        }}
        size={15}
        color="red"
        style={{ cursor: "pointer" }}
      />
    );
  }

  //Função apagar registro
  async function deletarRegistro() {
    setOpen(true);
    await demandaService.deletarRegistro(idNota, nota);
    await demandaService.listarNotasPorDemanda(idViagem).then((response) => {
      buscar(response);
      setOpen(false);
      setShow(false);
    });
  }

  return (
    <div style={{ margin: "16px" }}>
      {show && (
        <PopUpModal
          titulo="Confirmação Exclusão"
          corpo="Deseja realmente excluir a Nota Fiscal - nota? essa ação não podera ser desfeita! "
          confirmar={() => deletarRegistro()}
          fechar={() => setShow(false)}
        />
      )}
      <TabelaPadrao minimo={650} data={data} titulo={infoDados} />
    </div>
  );
}
