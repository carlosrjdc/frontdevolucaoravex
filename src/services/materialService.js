import Axios from "../config";

const MaterialService = {
  cadastrarMaterial: async (id, descricao, codean, coddum) => {
    const cadastro = await Axios.post(`/criaritem`, {
      id,
      descricao,
      codean,
      coddum,
    })
      .then((response) => {
        return response.data;
      })
      .catch((erro) => {
        console.log(erro);
      });

    return cadastro;
  },
};

export default MaterialService;
