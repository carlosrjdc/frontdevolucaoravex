
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PopUpModal from "../../Global/PopUpModal";
import demandaService from "../../../services/demandaService";

export default function InfoDemanda({ status, idViagem, setOpen, setInfoDemanda }) {
  const [show, setShow] = useState(false);
  const [abrir, setAbrir] = useState(false);
  const navigate = useNavigate();

  async function reabrirDemanda() {
    setOpen(true);
    await demandaService
      .reabrirDemanda(idViagem)
      .then(() => {
        demandaService.buscarInfoDemanda(idViagem).then((response) => {
          setInfoDemanda(response);
          setOpen(false);
          setShow(false);
        });
      })
      .catch((erro) => {
        setOpen(false);
        setShow(false);
        console.log(erro);
      });
  }

  async function deletarDemanda(){
    await demandaService.deletarDemanda(idViagem)
    .then(() => {
          setOpen(false);
          setAbrir(false);
      })
      .catch((erro) => {
        setOpen(false);
        setAbrir(false);
      })
  }

  return (
    <div
      style={{
        borderRadius: "5px",
        marginLeft: "8px",
        marginTop: "8px",
        background: "white",
        padding: "1%",
        width: "280px",
      }}
    >
      {show && (
        <PopUpModal
          confirmar={reabrirDemanda}
          titulo={`Reabertura da Demanda - ${idViagem === undefined ? "" : idViagem}`}
          corpo="Deseja realmente confirmar a essa ação?"
          fechar={() => setShow(false)}
        />
      )}
        {abrir && (
        <PopUpModal
          confirmar={deletarDemanda}
          titulo={`Excluir Demanda - ${idViagem === undefined ? "" : idViagem}`}
          corpo="OBS: para excluir a demanda primeiro é necessarios excluir todas as Notas, Deseja realmente confirmar a essa ação?"
          fechar={() => setAbrir(false)}
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
        <div style={{ fontSize: "10px" }}>INFO</div>
        <div style={{ fontSize: "14px", fontWeight: "600" }}>{status}</div>
      </div>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontWeight: "600", fontSize: "20px" }}>ID: {idViagem}</div>
        <div style={{ display: "flex", justifyContent:"space-between" }}>
          <div>
              <HiOutlineDocumentAdd
                onClick={() => navigate("/cadastronota")}
                style={{ marginRight: "32px", cursor: "pointer" }}
                size={20}
              />
            </div>
            <div>
              <AiOutlineFolderOpen
                onClick={() => {
                  setShow(true);
                }}
                style={{ cursor: "pointer" }}
                size={20}
              />
            </div>
            <div>
              <BsTrash
                onClick={() => {
                  setAbrir(true);
                }}
                style={{ cursor: "pointer" }}
                size={20}
              />
            </div>
        </div>
      </div>
    </div>
  );
}
