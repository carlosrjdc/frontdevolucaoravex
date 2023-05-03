import Pesquisa from "../../Global/Busca";

export default function FiltroOverView({ placa, setPlaca }) {
  return (
    <div
      style={{
        width: "230px",
        padding: "16px",
        margin: "8px",
        background: "#fff",
        borderRadius: "5px",
      }}
    >
      <Pesquisa acao={() => {}} valor={placa} setar={setPlaca} label="Filtro" />
    </div>
  );
}
