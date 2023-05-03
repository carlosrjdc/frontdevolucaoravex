import { useContext } from "react";
import Axios from "../config/Api";

const authService = {
  login: async (usuario, password, history) => {
    Axios.post(`/autenticar`, {
      usuario,
      senha: password,
    })
      .then((response) => {
        if (response.data.token) {
          sessionStorage.setItem("user", JSON.stringify(response.data));
          history("/startdemanda");
        } else {
          console.log("teste");
        }
      })
      .catch((erro) => {
        console.log(erro);
      });
  },
};

export default authService;
