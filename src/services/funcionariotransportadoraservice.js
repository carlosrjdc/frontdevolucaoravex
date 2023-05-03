import Notificar from "../components/Global/FeedBack/Notificar";
import Axios from "../config";

const funcionariotransportadoraservice = {
  cadastrarFuncionario: async (nome, email, idTransportadora) => {
    const dados = await Axios.post(
      `/transporte/cadastrarfuncionariotransportadora`,
      {
        nome,
        email,
        receberEmail: "sim",
        idTransportadora,
      }
    )
      .then((response) => {
        Notificar(
          "Sucesso",
          "Transportadora cadastrada com sucesso!",
          "success",
          "bottom"
        );
        return response.data;
      })
      .catch((erro) => console.log(erro));
    return dados;
  },

  todosfuncionarios: async () => {
    const dados = await Axios.get(`/transporte/buscarfuncionarios`)
      .then((response) => {
        return response.data;
      })
      .catch((erro) => {
        console.log(erro);
      });

    return dados;
  },

  deletarRegistro: async (id) => {
    const dados = await Axios.delete(`/funcionariotransportadora/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((erro) => {
        console.log(erro);
      });

    return dados;
  },
};

export default funcionariotransportadoraservice;
