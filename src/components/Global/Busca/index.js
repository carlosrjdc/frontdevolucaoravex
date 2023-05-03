import { ImSearch } from "react-icons/im";

import "./Busca.css";

export default function Pesquisa({ label, setar, valor, acao, tipo }) {
  return (
    <div style={{ borderBottom: "1px solid black" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        <div style={{ paddingBottom: "0.5%" }}>
          <input
            value={valor}
            onChange={(e) => setar(e.target.value)}
            type={tipo ? tipo : "text"}
            className="teste"
            name="myInput"
            placeholder={label}
          />
        </div>
        <ImSearch onClick={() => acao()} style={{ cursor: "pointer", marginLeft: "16px" }} />
      </div>
    </div>
  );
}
