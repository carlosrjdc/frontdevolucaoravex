import Axios from "../config";

const RelatoriosService = {
  anomalisPorData: async (data) => {
    const dados = await Axios.get(`/relatorio/anomalia/${data}`)
      .then((response) => {
        return response.data;
      })
      .catch((erro) => {
        console.log(erro);
      });

    return dados;
  },
};

export default RelatoriosService;
