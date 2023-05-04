import { TextField } from "@mui/material";
import { useState } from "react";
import Botao from "../Botao";
import MaterialService from "../../services/materialService";
import Notificar from "../Global/FeedBack/Notificar";

export default function CadastrarProduto() {
  const [sku, setSku] = useState();
  const [descricao, setDescricao] = useState();
  const [codean, setCodEan] = useState();
  const [dum, setCodDum] = useState();

  async function CadastrarProduto() {
    await MaterialService.cadastrarMaterial(sku, descricao, codean, dum)
      .then((response) => {
        Notificar("Sucesso", "Produto cadastrado com sucesso!", "success", "bottom");
        setSku("");
        setDescricao("");
        setCodEan("");
        setCodDum("");
      })
      .catch((erro) => console.log(erro));
  }

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "30%", background: "#fff", margin: "8px", padding: "16px", borderRadius: "8px" }}>
        <div style={{ marginBottom: "8px" }}>
          <TextField
            fullWidth
            value={sku}
            onChange={(e) => setSku(e.target.value)}
            id="standard-basic"
            label="SKU"
            variant="standard"
          />
        </div>
        <div style={{ marginBottom: "8px" }}>
          <TextField
            fullWidth
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            id="standard-basic"
            label="DESCRIÇÃO"
            variant="standard"
          />
        </div>
        <div style={{ marginBottom: "8px" }}>
          <TextField
            fullWidth
            value={codean}
            onChange={(e) => setCodEan(e.target.value)}
            id="standard-basic"
            label="CODIGO EAN"
            variant="standard"
          />
        </div>
        <div style={{ marginBottom: "48px" }}>
          <TextField
            fullWidth
            value={dum}
            onChange={(e) => setCodDum(e.target.value)}
            id="standard-basic"
            label="Codigo DUM"
            variant="standard"
          />
        </div>
        <div>
          <Botao acao={() => CadastrarProduto()} texto="CADASTRAR" />
        </div>
      </div>
    </div>
  );
}
