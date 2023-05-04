const helpers = {
  //função para retornar o tipo de devolução
  verTipoDevolucao: (numero) => {
    switch (parseInt(numero)) {
      case 1:
        return "Devolução Total";

      case 2:
        return "Devolução Parcial";

      case 3:
        return "Reentrega";

      default:
        console.log(`Não encontrado`);
    }
  },

  filtrarItensNota: (data, numeroNf) => {
    const dados = data.filter((filtrar) => filtrar.numeroNotaFiscal === numeroNf);
    return dados[0];
  },

  converterArraydeProdutosParaInput: (arr, idDemanda, notaSelecionada, numRetorno) => {
    const novoArray = arr?.map((item) => {
      if (item.motivo !== null) {
        return {
          idDemanda: idDemanda,
          nota_fiscal: notaSelecionada,
          motivo: numRetorno,
          produto: item.codigo,
          quantidade: item.quantidadeDevolvida,
        };
      }
    });

    return novoArray ? novoArray.filter((filtrar) => filtrar !== undefined) : novoArray;
  },
};

export default helpers;
