import { BiSearchAlt } from "react-icons/bi";
import { IoIosAddCircle } from "react-icons/io";

export const menus = {
  Demanda: {
    icone: <IoIosAddCircle size={20} />,
    arr: [
      { nome: "Overview", link: "/overview" },
      { nome: "Demanda", link: "/cadastrodemanda" },
      { nome: "Nota Fiscal", link: "/cadastronota" },
      { nome: "Finalizar", link: "/finalizardemanda" },
    ],
  },
  Cadastro: {
    icone: <IoIosAddCircle size={20} />,
    arr: [
      { nome: "Transportadora", link: "/transportadora" },
      { nome: "Placas", link: "/placa" },
      { nome: "Funcionários", link: "/funcionariotransportadora" },
    ],
  },
  Relatorios: {
    icone: <IoIosAddCircle size={20} />,
    arr: [{ nome: "Divergencia", link: "/divergencia" }],
  },
};
