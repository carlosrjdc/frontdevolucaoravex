import { useState } from "react";
import Pesquisa from "../../Global/Busca";
import { IoIosAddCircle } from "react-icons/io";
import transportadoraService from "../../../services/placasService";
import demandaService from "../../../services/demandaService";
import PopUpModal from "../../Global/PopUpModal";

export default function CadastroDemanda({ setOpen, buscarViagem }) {
  const [placa, setPlaca] = useState("");
  const [transportadora, setTransportadora] = useState("");
  const [show, setShow] = useState(false);
  const idUser = sessionStorage.getItem("id");

  //Função para buscar transportadora
  async function buscarPlaca() {
    setOpen(true);
    await transportadoraService
      .buscarTransportadoraporPlaca(placa)
      .then((response) => {
        setTransportadora(response?.placas?.nome);
        setOpen(false);
      });
  }

  //Função verifica se tem Transportadora, se houve cadastra nova Demanda
  async function cadastrarDemanda() {
    setOpen(true);
    if (placa !== "") {
      demandaService
        .cadastrarNovaDemanda(idUser, placa, transportadora)
        .then((resposta) => {
          buscarViagem(resposta);
          setOpen(false);
          setShow(false);
        });
    }
  }

  return (
    <div
      style={{
        borderRadius: "5px",
        marginLeft: "8px",
        marginTop: "8px",
        background: "white",
        padding: "1%",
        width: "360px",
      }}
    >
      {show && (
        <PopUpModal
          titulo="Confirmação de Cadastro"
          corpo="Deseja realmente confirmar a inclusão do cadastro?"
          confirmar={() => cadastrarDemanda()}
          fechar={() => setShow(false)}
        />
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <div style={{ fontSize: "10px" }}>CADASTRO</div>
        <div style={{ fontSize: "20px", fontWeight: "600" }}>
          {transportadora}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Pesquisa
          setar={setPlaca}
          valor={placa}
          acao={buscarPlaca}
          label="PLACA"
        />
        <IoIosAddCircle
          onClick={() => setShow(true)}
          style={{ cursor: "pointer" }}
          size={20}
        />
      </div>
    </div>
  );
}
