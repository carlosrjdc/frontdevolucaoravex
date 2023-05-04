import Notificar from "../components/Global/FeedBack/Notificar";
import Axios from "../config";

const transportadoraService = {
  cadastrarTransportadora: async (nome) => {
    const dados = await Axios.post(`/transporte/cadastrartransportadora`, {
      nome,
    })
      .then((response) => {
        return response.data;
      })
      .catch((erro) => console.log(erro));
    return dados;
  },

  buscarTransportadoraporPlaca: async (placa) => {
    const dados = await Axios.get(`/transporte/buscarplaca/${placa}`)
      .then((response) => {
        return response.data;
      })
      .catch((erro) => {
        console.log(erro);
      });

    return dados;
  },
  buscarTransportadoras: async (placa) => {
    const dados = await Axios.get(`/transporte/todastransprotadora`)
      .then((response) => {
        return response.data;
      })
      .catch((erro) => {
        console.log(erro);
      });

    return dados;
  },

  deletarRegistro: async (id) => {
    const dados = await Axios.delete(`/transportadora/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((erro) => {
        console.log(erro);
      });

    return dados;
  },
};

export default transportadoraService;
