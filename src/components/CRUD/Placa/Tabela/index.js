import moment from "moment-timezone";
import TabelaCrud from "../../../Global/Tabela crud";
import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import transportadoraService from "../../../../services/placasService";
import { useContext, useState } from "react";
import PopUpModal from "../../../Global/PopUpModal";
import { GlobalContext } from "../../../../context";
import funcionariotransportadoraservice from "../../../../services/funcionariotransportadoraservice";
import PlacasService from "../../../../services/placasService";
import Notificar from "../../../Global/FeedBack/Notificar";

export default function TabelaPlacaCRUD({ data }) {
  const { open, setOpen } = useContext(GlobalContext);
  const [idDelete, setIdDelete] = useState("");
  const [show, setShow] = useState(false);
  //Incluir atributo ao array "Lixeira"
  for (let i = 0; i < data.length; i++) {
    data[i].transportadora = data[i]?.placas?.nome;
    data[i].icone = (
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <AiOutlineEdit size={18} color="orange" style={{ cursor: "pointer" }} />
        <BsTrash onClick={() => abrirModal(data[i].id)} size={18} color="red" style={{ cursor: "pointer" }} />
      </div>
    );
    data[i].criado = data[i].createdAt === undefined ? "" : moment(data[i].createdAt).format("DD/MM/YYYY HH:mm:ss");
  }

  async function deletarRegistro() {
    setOpen(true);
    await PlacasService.deletarRegistro(idDelete)
      .then(() => {
        Notificar("Sucesso", "Placa Deletada com sucesso!!", "success", "bottom");
      })
      .catch((erro) => {
        Notificar("Error", "Registro não deletado, contate o Administrador", "danger", "bottom");
      });
    setShow(false);
    setOpen(false);
  }

  function abrirModal(item) {
    setShow(true);
    setIdDelete(item);
  }

  const infoDados = {
    titulo: ["id", "Placa", "Perfil", "Transportadora", "Criado em", "Ação"],
    conteudo: ["id", "placa", "perfil", "transportadora", "criado", "icone"],
  };
  return (
    <div style={{ margin: "8px" }}>
      {show && (
        <PopUpModal
          fechar={setShow}
          titulo="Confirmar Exclusão"
          corpo="Deseja realmente excluir essa transportadora?"
          confirmar={deletarRegistro}
        />
      )}
      <TabelaCrud data={data} titulo={infoDados} />
    </div>
  );
}
