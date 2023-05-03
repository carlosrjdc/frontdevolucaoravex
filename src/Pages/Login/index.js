import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Axios from "../../config";

export default function Login() {
  const { setPaginaLogin, setOpen } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [loginSenhaIncorreto, setLoginSenhaIncorreto] = useState("");

  async function Signin() {
    setOpen(true);
    Axios.post(`/autenticar`, {
      usuario,
      senha,
    })
      .then((response) => {
        if (!response.data.Erro) {
          sessionStorage.setItem("tkn", response.data.token);
          sessionStorage.setItem("id", response.data.id);
          sessionStorage.setItem("nome", response.data.user);
          setLoginSenhaIncorreto("");
          setUsuario("");
          setSenha("");
          navigate("/cadastrodemanda");
          window.location.reload();
          setPaginaLogin(false);
          setOpen(false);
        } else {
          setLoginSenhaIncorreto("Login ou Senha Incorretos");
          setOpen(false);
        }
      })
      .catch((erro) => console.log(erro));
  }

  useEffect(() => {
    setPaginaLogin(true);
  }, []);

  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <BsFillBoxSeamFill style={{ marginTop: "5%", marginBottom: "1%" }} size={60} />
      <div style={{ marginBottom: "2%", fontWeight: "700", fontSize: "20px" }}>SISTEMA DEVOLUÇÃO</div>
      <div style={{ marginBottom: "1%" }}>
        <TextField
          type="number"
          fullWidth
          sx={{ width: "40%" }}
          id="outlined-basic"
          label="Usuario"
          variant="outlined"
          value={usuario}
          onChange={(e) => {
            setUsuario(e.target.value);
          }}
        />
      </div>
      <div style={{ marginBottom: "1%" }}>
        <TextField
          fullWidth
          type="password"
          sx={{ width: "40%" }}
          id="outlined-basic"
          label="Senha"
          variant="outlined"
          value={senha}
          onChange={(e) => {
            setSenha(e.target.value);
          }}
        />
      </div>
      <Button onClick={Signin} sx={{ width: "40%" }} fullWidth variant="contained">
        SIGN IN
      </Button>
      <div style={{ padding: "1.5%", color: "red", fontWeight: "600" }}>{loginSenhaIncorreto}</div>
      <div style={{ marginTop: "2%", fontSize: "8px" }}>VERSÃO 1.1 BY RAGDE SYSTEM</div>
    </div>
  );
}
