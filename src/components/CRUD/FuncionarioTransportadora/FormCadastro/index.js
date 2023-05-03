import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import transportadoraService from "../../../../services/transportadoraService";

export default function CadastroFunctionarioTransportadora({
  nome,
  setNome,
  setIdTransportadora,
  idTransportadora,
  email,
  setEmail,
}) {
  const [dadosTransportadora, setDadosTransportadora] = useState([]);

  const [transportadora, setTransportadora] = useState("");

  useEffect(() => {
    transportadoraService.buscarTransportadoras().then((response) => setDadosTransportadora(response));
  }, []);

  function selecionar(item) {
    setTransportadora(item.nome);
    setIdTransportadora(item.id);
  }

  return (
    <div>
      <div>Informe o nome da FunctionarioTransportadora</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div>
            <TextField
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              id="standard-basic"
              label="Nome"
              variant="standard"
            />
          </div>
          <div>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="standard-basic"
              label="Email"
              variant="standard"
            />
          </div>
          <div>
            <TextField
              value={transportadora}
              onChange={(e) => setNome(e.target.value)}
              id="standard-basic"
              label="Transportadora"
              variant="standard"
              disabled={true}
            />
          </div>
        </div>

        <div style={{ width: "40%", textAlign: "center" }}>
          {dadosTransportadora?.map((item) => (
            <div
              onClick={() => selecionar(item)}
              style={{
                paddingRight: "16px",
                paddingLeft: "16px",
                margin: "4px",
                background: "#eff5f6",
                fontWeight: "bold",
              }}
              key={item.id}
            >
              {item.nome}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
