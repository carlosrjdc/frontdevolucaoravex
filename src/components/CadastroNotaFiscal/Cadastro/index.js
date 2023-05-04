import { MdOutlinePlaylistAdd } from "react-icons/md";
import notaFiscalService from "../../../services/notaFiscalService";
import TextField from "@mui/material/TextField";
import PopUpModal from "../../Global/PopUpModal";
import { useContext, useState } from "react";
import Notificar from "../../Global/FeedBack/Notificar";
import { GlobalContext } from "../../../context";

export default function CadastrarNotaFiscal({ objetoInput }) {
  const { setOpen } = useContext(GlobalContext);
  const [show, setShow] = useState(false);
  const [notaParcial, setNotaParcial] = useState(null);
  const [materiaisNaoCadastrados, setMateriaisNaoCadastrados] = useState([]);

  async function cadastrarNotaFiscal() {
    setOpen(true);
    if (objetoInput?.status_nf === "Devolução Parcial") {
      objetoInput.nota_fiscal_parcial = notaParcial;
      await notaFiscalService.CadastrarNotaFiscal(objetoInput).then((response) => {
        if (response.erro) {
          if (response.erro === "Produtos não cadastrado") {
            Notificar(
              "Error",
              `Existem itens na nota não cadastro na base de material, é necessario cadastrar para continuar`,
              "danger",
              "bottom"
            );
            setMateriaisNaoCadastrados(response?.materiais);
            setShow(false);
            setNotaParcial(null);
            setOpen(false);
          } else {
            Notificar(
              "Error",
              `Nota fiscal já foi cadastrada na Demanda ${response?.localizar?.idDemanda}, se a nota não estiver cadastrada procurar o adminsitrador`,
              "danger",
              "bottom"
            );
            setShow(false);
            setNotaParcial(null);
            setOpen(false);
            setMateriaisNaoCadastrados([]);
          }
        } else {
          Notificar("Sucesso", "Nota Cadastrada com Sucesso", "success", "bottom");
          setShow(false);
          setNotaParcial(null);
          setOpen(false);
          setMateriaisNaoCadastrados([]);
        }
      });
    } else {
      setNotaParcial("");
      await notaFiscalService.CadastrarNotaFiscal(objetoInput).then((response) => {
        console.log(response);
        if (response.erro) {
          if (response.erro === "Produtos não cadastrado") {
            Notificar(
              "Error",
              `Existem itens na nota não cadastro na base de material, é necessario cadastrar para continuar`,
              "danger",
              "bottom"
            );
            setMateriaisNaoCadastrados(response?.materiais);
            setShow(false);
            setOpen(false);
          } else {
            Notificar(
              "Error",
              `Nota fiscal já foi cadastrada na Demanda ${response?.localizar?.idDemanda}, se a nota não estiver cadastrada procurar o adminsitrador`,
              "danger",
              "bottom"
            );
            setShow(false);
            setOpen(false);
            setMateriaisNaoCadastrados([]);
          }
        } else {
          Notificar("Sucesso", "Nota Cadastrada com Sucesso", "success", "bottom");
          setShow(false);
          setOpen(false);
          setMateriaisNaoCadastrados([]);
        }
      });
    }
  }

  const ModalDevolucaoParcial = (
    <div>
      A nota selecionada é uma Nota Fiscal Parcial, nesse caso precisa informar o nº da nota Parcial abaixo.<br></br>
      <br></br>
      <TextField
        value={notaParcial}
        onChange={(e) => setNotaParcial(e.target.value)}
        id="standard-basic"
        label="Nº Parcial"
        variant="standard"
      />
    </div>
  );

  return (
    <div>
      {objetoInput?.status_nf === "Devolução Parcial"
        ? show && (
            <PopUpModal
              titulo="Confirmação de Parcial"
              corpo={ModalDevolucaoParcial}
              confirmar={cadastrarNotaFiscal}
              fechar={() => {
                setNotaParcial("");
                setShow(false);
              }}
              disabilitar={notaParcial?.length < 2}
            />
          )
        : show && (
            <PopUpModal
              titulo="Confirmação de Cadastro"
              confirmar={cadastrarNotaFiscal}
              corpo="Deseja realmente confirmar a inclusão da Nota"
              disabilitar={objetoInput.idDemanda === undefined}
              fechar={() => {
                setNotaParcial("");
                setShow(false);
              }}
            />
          )}
      <MdOutlinePlaylistAdd onClick={() => setShow(true)} style={{ marginLeft: "64px", cursor: "pointer" }} size={55} />

      {materiaisNaoCadastrados.length > 0 && (
        <div style={{ textAlign: "center", margin: "16px" }}>
          <div style={{ fontSize: "12px", fontWeight: "600" }}>Lista de Materiais não cadastrados</div>
          {materiaisNaoCadastrados.map((item) => (
            <div style={{ fontSize: "12px", color: "red" }} key={item}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
