export default function InfoNotaFiscal({ notaSelecionada }) {
  return (
    <div>
      <div
        style={{
          borderRadius: "5px",
          marginLeft: "8px",
          marginTop: "8px",
          background: "white",
          padding: "2.5%",
          width: "380px",
          fontSize: "14px",
        }}
      >
        <div style={{ marginBottom: "4px" }}>
          Motivo: {notaSelecionada?.motivo?.descricao}
        </div>
        <div style={{ marginBottom: "4px" }}>
          Operador: {notaSelecionada?.usuario?.login}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingRight: "8px",
            marginBottom: "5px",
          }}
        >
          <div>NF: {notaSelecionada?.numeroNotaFiscal} </div>
          <div>Status: {notaSelecionada?.statusdevolucao} </div>
        </div>
      </div>
    </div>
  );
}
