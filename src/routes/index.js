import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";

import Demandas from "../Pages/Demandas";
import CadastroNotaFiscal from "../Pages/CadastroNotaFiscal";
import FinalizarDemanda from "../Pages/FinalizarDemanda";
import OverView from "../Pages/OverView";
import TransportadoraCRUD from "../Pages/CRUD/Transportadora";
import FuncionarioTransportadoraCRUD from "../Pages/CRUD/UsuariosTransportadora";
import PlacaCRUD from "../Pages/CRUD/Placa";
import RelatorioDivergencia from "../Pages/Relatorios/Divergencia";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/auth",
    element: <Login />,
  },
  {
    path: "/cadastrodemanda",
    element: <Demandas />,
  },
  {
    path: "/cadastronota",
    element: <CadastroNotaFiscal />,
  },
  {
    path: "/finalizardemanda",
    element: <FinalizarDemanda />,
  },
  {
    path: "/overview",
    element: <OverView />,
  },
  {
    path: "/transportadora",
    element: <TransportadoraCRUD />,
  },
  {
    path: "/funcionariotransportadora",
    element: <FuncionarioTransportadoraCRUD />,
  },
  {
    path: "/placa",
    element: <PlacaCRUD />,
  },
  {
    path: "/divergencia",
    element: <RelatorioDivergencia />,
  },
]);

export default router;
