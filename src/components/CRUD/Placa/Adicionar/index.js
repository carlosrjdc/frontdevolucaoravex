import { useContext, useState } from "react";
import Pesquisa from "../../../Global/Busca";
import { IoMdAddCircle } from "react-icons/io";
import CadastroTransportadora from "../FormCadastro";
import PopUpModal from "../../../Global/PopUpModal";

import { GlobalContext } from "../../../../context";
import CadastroFunctionarioTransportadora from "../FormCadastro";
import PlacasService from "../../../../services/placasService";
import CadastroPlaca from "../FormCadastro";
import Notificar from "../../../Global/FeedBack/Notificar";

export default function AdicionarPlacaCRUD({ buscar, setBuscar }) {
  const [show, setShow] = useState(false);
  const [nome, setNome] = useState("");
  const [placa, setPlaca] = useState("");
  const [perfil, setPerfil] = useState("");
  const [idTransportadora, setIdTransportadora] = useState("");

  const { open, setOpen } = useContext(GlobalContext);

  function AbrirModal() {
    setShow(true);
  }

  async function cadastrarNovaPlaca() {
    setOpen(true);
    if (placa.length > 2) {
      await PlacasService.cadastrarPlaca(placa, perfil, idTransportadora)
        .then(() => {
          Notificar("Sucesso", "Placa Adicionada com sucesso!!", "success", "bottom");
        })
        .catch((erro) => {
          Notificar("Error", "Placa não cadastrada, contate o Administrador", "danger", "bottom");
        });
      setOpen(false);
    }
    setOpen(false);
    setShow(false);
    setNome("");
    setPlaca("");
    setPerfil("");
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
          disabilitar={idTransportadora.length < 1 || placa.length < 3 || perfil.length < 3}
          corpo={
            <CadastroPlaca
              perfil={perfil}
              setPlaca={setPlaca}
              setPerfil={setPerfil}
              placa={placa}
              nome={nome}
              setNome={setNome}
              idTransportadora={idTransportadora}
              setIdTransportadora={setIdTransportadora}
            />
          }
          confirmar={cadastrarNovaPlaca}
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
