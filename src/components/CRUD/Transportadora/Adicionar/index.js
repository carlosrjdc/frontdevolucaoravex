import { useContext, useState } from "react";
import Pesquisa from "../../../Global/Busca";
import { IoMdAddCircle } from "react-icons/io";
import CadastroTransportadora from "../FormCadastro";
import PopUpModal from "../../../Global/PopUpModal";
import { GlobalContext } from "../../../../context";
import transportadoraService from "../../../../services/transportadoraService";
import Notificar from "../../../Global/FeedBack/Notificar";

export default function AdicionarTransportadoraCRUD() {
  const [buscar, setBuscar] = useState("");
  const [show, setShow] = useState(false);
  const [nome, setNome] = useState("");
  const { open, setOpen } = useContext(GlobalContext);

  function AbrirModal() {
    setShow(true);
  }

  async function cadastrarTransportadora() {
    setOpen(true);
    if (nome.length > 2) {
      await transportadoraService
        .cadastrarTransportadora(nome)
        .then(() => {
          Notificar("Sucesso", "Cadastro Realizado com sucesso!", "success", "bottom");
        })
        .catch((erro) => {
          Notificar("Error", "Cadastrao não realizado", "danger", "bottom");
        });
      setOpen(false);
    }
    setOpen(false);
    setShow(false);
  }

  return (
    <div
      style={{
        background: "#fff",
        padding: "16px",
        margin: "8px",
        borderRadius: "5px",
      }}
    >
      {show && (
        <PopUpModal
          fechar={setShow}
          titulo="Cadastro"
          corpo={<CadastroTransportadora nome={nome} setNome={setNome} />}
          confirmar={cadastrarTransportadora}
        />
      )}

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Pesquisa acao={() => {}} valor={buscar} setar={setBuscar} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <IoMdAddCircle onClick={() => AbrirModal()} color="green" size={35} /> Novo
        </div>
      </div>
    </div>
  );
}
