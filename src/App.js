import { useContext } from "react";
import "./App.css";
import { GlobalContext } from "./context";

function App() {
  const { idDemanda } = useContext(GlobalContext);
  return <div className="App">{idDemanda}</div>;
}

export default App;
