import Notificar from "../components/Global/FeedBack/Notificar";
import Axios from "../config";

const PlacasService = {
  cadastrarPlaca: async (placa, perfil, idTransportadora) => {
    const dados = await Axios.post(`/transporte/cadastrarplaca`, {
      placa,
      perfil,
      idTransportadora,
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
  buscarPlacas: async () => {
    const dados = await Axios.get(`/buscartodasplacas`)
      .then((response) => {
        return response.data;
      })
      .catch((erro) => {
        console.log(erro);
      });

    return dados;
  },

  deletarRegistro: async (id) => {
    const dados = await Axios.delete(`/apagarplaca/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((erro) => {
        console.log(erro);
      });

    return dados;
  },
};

export default PlacasService;
