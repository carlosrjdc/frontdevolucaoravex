import { createContext, useState } from "react";

export const GlobalContext = createContext();

export function InfoProvider({ children }) {
  const [paginaLogin, setPaginaLogin] = useState(false);
  const [idDemanda, setIdDemanda] = useState("teste");
  const [dadosNf, setDadosNf] = useState([]);
  const [usuarioAtivo, setUsuarioAtivo] = useState({});
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [dadosViagem, setDadosViagem] = useState({});
  const [itensDaNota, setItensDaNota] = useState([]);
  const [infoViagem, setInfoViagem] = useState([]);
  const [notaSelecionada, setNotaSelecionada] = useState("");
  const [inputMaterial, setInputMaterial] = useState([]);
  const [infoDemanda, setInfoDemanda] = useState("");
  const [idViagem, setIdViagem] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        idDemanda,
        setIdDemanda,
        dadosNf,
        setDadosNf,
        paginaLogin,
        setPaginaLogin,
        usuarioAtivo,
        setUsuarioAtivo,
        open,
        setOpen,
        show,
        setShow,
        dadosViagem,
        setDadosViagem,
        notaSelecionada,
        setNotaSelecionada,
        itensDaNota,
        setItensDaNota,
        infoViagem,
        setInfoViagem,
        inputMaterial,
        setInputMaterial,
        idViagem,
        setIdViagem,
        infoDemanda,
        setInfoDemanda,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
