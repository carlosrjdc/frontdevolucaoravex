import { useState } from "react";
import TextField from "@mui/material/TextField";

export default function CadastroTransportadora({ nome, setNome }) {
  return (
    <div>
      <div>Informe o nome da Transportadora</div>
      <TextField
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        id="standard-basic"
        label="Transportadora"
        variant="standard"
      />
    </div>
  );
}
