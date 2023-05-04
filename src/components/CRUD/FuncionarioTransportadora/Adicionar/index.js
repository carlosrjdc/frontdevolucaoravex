import { useContext, useState } from "react";
import Pesquisa from "../../../Global/Busca";
import { IoMdAddCircle } from "react-icons/io";
import PopUpModal from "../../../Global/PopUpModal";
import { GlobalContext } from "../../../../context";
import CadastroFunctionarioTransportadora from "../FormCadastro";
import funcionariotransportadoraservice from "../../../../services/funcionariotransportadoraservice";
import Notificar from "../../../Global/FeedBack/Notificar";

export default function AdicionarFunctionarioTransportadoraCRUD({ buscar, setBuscar }) {
  const [show, setShow] = useState(false);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idTransportadora, setIdTransportadora] = useState("");

  const { setOpen } = useContext(GlobalContext);

  function AbrirModal() {
    setShow(true);
  }

  async function cadastrarTransportadora() {
    setOpen(true);
    if (nome.length > 2) {
      await funcionariotransportadoraservice
        .cadastrarFuncionario(nome, email, idTransportadora)
        .then(() => {
          Notificar("Sucesso", "Funcionário Adicionado com sucesso!!", "success", "bottom");
        })
        .catch((erro) => {
          Notificar("Error", "Registro não adicionado, contate o Administrador", "danger", "bottom");
        });
      setOpen(false);
    }
    setOpen(false);
    setShow(false);
    setNome("");
    setEmail("");
  }

  function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
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
          titulo="Opa"
          disabilitar={idTransportadora.length < 1 || nome.length < 3 || !validarEmail(email)}
          corpo={
            <CadastroFunctionarioTransportadora
              email={email}
              setEmail={setEmail}
              nome={nome}
              setNome={setNome}
              idTransportadora={idTransportadora}
              setIdTransportadora={setIdTransportadora}
            />
          }
          confirmar={cadastrarTransportadora}
        />
      )}

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Pesquisa valor={buscar} setar={setBuscar} />
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
