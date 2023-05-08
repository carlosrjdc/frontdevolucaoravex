import Axios from "../config";

const notaFiscalService = {
  listarNotasPorDemanda: async (viagemId) => {
    const dados = await Axios.get(`/ravex/relacionarnotas/${viagemId}`)
      .then(async (response) => {
        return response.data;
      })
      .catch((erro) => {
        console.log(erro);
      });

    return dados;
  },

  NotaPorDemanda: async (id) => {
    return await Axios.get(`/listarnotaspordemanda/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((erro) => console.log(erro));
  },

  CadastrarNotaFiscal: (infocadastro) => {
    const dados = Axios.post(`/cadastrarnotafiscal`, infocadastro)
      .then((response) => {
        return response.data;
      })
      .catch((erro) => {
        return "erro";
      });
    return dados;
  },
};

export default notaFiscalService;
