import Notificar from "../components/Global/FeedBack/Notificar";
import Axios from "../config";

//Notificar(titulo, mensagem, tipo, local)
const demandaService = {
  listarNotasPorDemanda: async (viagemId) => {
    const dados = await Axios.get(`/listarnotaspordemanda/${viagemId}`)
      .then(async (response) => {
        return response.data;
      })
      .catch((erro) => {
        console.log(erro);
      });

    return dados;
  },

  finalizarDemandaAdm: async (idDemanda) => {
    const dados = await Axios.put(`/finalizardemandaemail/${idDemanda}`).then(() => {});
  },

  deletarRegistro: async (idDemanda, idNota) => {
    const dados = await Axios.delete(`/deletarnota/${idDemanda}/${idNota}`)
      .then(() => {
        return "deletado";
      })
      .catch((erro) => {
        console.log(erro);
      });
    return dados;
  },

  buscarInfoDemanda: async (viagemId) => {
    const dados = await Axios.get(`/buscarinfodemanda/${viagemId}`)
      .then((resposta) => {
        return resposta.data;
      })
      .catch((erro) => {
        console.log(erro);
        return [];
      });
    return dados;
  },

  buscarInfoViagem: async (viagemId) => {
    const dados = await Axios.get(`/infodeumaviagem/${viagemId}`)
      .then((resposta) => {
        return resposta.data;
      })
      .catch((erro) => {
        console.log(erro);
      });
    return dados;
  },

  resultadoConferencia: async (idDemanda) => {
    const dados = await Axios.get(`/conferencia/resultadoconferencia/${idDemanda}`)
      .then((response) => {
        return response.data;
      })
      .catch((erro) => {
        console.log(erro);
      });

    return dados;
  },

  enviarEmail: async (idDemanda, idtransportadora, placa) => {
    Axios.post(`/enviaremail/${idDemanda}`, {
      idtransportadora: idtransportadora,
      placa: placa,
    })
      .then((response) => console.log(response.data))
      .catch((erro) => console.log(erro));
  },

  statusPorData: async (data) => {
    const dados = await Axios.get(`/buscarstatusagrupado/${data}`)
      .then((response) => {
        return response.data;
      })
      .catch((erro) => console.log(erro));

    return dados;
  },

  buscarDemandasPorData: async (data) => {
    const dados = await Axios.get(`/buscardemandaspordata/${data}`)
      .then((response) => {
        return response.data;
      })
      .catch((erro) => console.log(erro));
    return dados;
  },

  cadastrarNovaDemanda: async (idUser, placa, transportadora) => {
    const dados = await Axios.post(`/cadastrardemanda`, {
      idCadastro: idUser,
      placa: placa,
      transportadora: transportadora,
    })
      .then((response) => {
        Notificar("Sucesso", "Demanda Cadastrada com sucesso", "success", "bottom");
        return response.data;
      })
      .catch((erro) => {
        console.log(erro);
      });

    return dados;
  },

  reabrirDemanda: async (idDemanda) => {
    const dados = await Axios.put(`/reabrirdemandaparaconferencia/${idDemanda}`)
      .then((response) => {
        Notificar("Sucesso", "Demanda Reaberta com sucesso ", "success", "bottom");
        return response.data;
      })
      .catch((erro) => {
        console.log(erro);
      });

    return dados;
  },
};

export default demandaService;
