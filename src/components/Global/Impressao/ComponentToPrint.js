import React, { useContext } from "react";
import { QRCodeSVG } from "qrcode.react";
import moment from "moment-timezone";
import { GlobalContext } from "../../../context";

export const ComponentToPrint = React.forwardRef((props, ref) => {
  const { info } = props;
  return (
    <div
      style={{
        width: "302px",
        fontWeight: "bold",
        padding: "2%",
        textAlign: "center",
      }}
      ref={ref}
    >
      <br></br>
      <div style={{ textAlign: "center", marginBottom: "2%" }}>
        <div>ID:{info?.id} </div>
        <div>PLACA: {info?.placa} </div>
        <div>TRANSPORTADORA: {info?.transportadora} </div>
        <br></br>
        <QRCodeSVG value={String("teste")} />
        <br></br>
        <br></br>
        <div>
          GERADO EM <br></br>{" "}
          {moment(new Date()).format("DD/MM/YYYY - HH:mm:ss")}
        </div>
        <br></br>
        <br></br>
        <div>---Lactalis---</div>
      </div>
    </div>
  );
});
