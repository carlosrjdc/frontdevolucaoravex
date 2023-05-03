import { HiOutlineDocumentAdd } from "react-icons/hi";
import { BsTrash } from "react-icons/bs";
import { GlobalContext } from "../../../context";
import { useContext } from "react";

export default function InfoDemandaNotaFiscal() {
  const { infoDemanda } = useContext(GlobalContext);
  return (
    <div
      style={{
        borderRadius: "5px",
        marginLeft: "8px",
        marginTop: "8px",
        background: "white",
        padding: "1%",
        width: "260px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <div style={{ fontSize: "10px" }}>INFO</div>
        <div style={{ fontSize: "14px", fontWeight: "600" }}>
          {infoDemanda.status}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontWeight: "600", fontSize: "20px" }}>
          ID: {infoDemanda.id}
        </div>
        <div style={{ display: "flex" }}>
          <HiOutlineDocumentAdd
            style={{ marginRight: "32px", cursor: "pointer" }}
            size={20}
          />
          <BsTrash style={{ cursor: "pointerq" }} size={20} />
        </div>
      </div>
    </div>
  );
}
