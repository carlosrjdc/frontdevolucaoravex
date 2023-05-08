import moment from "moment-timezone";

export default function InformacoesFinalizarDemanda({ data, relacaoNotas }) {
  return (
    <div
      style={{
        marginLeft: "8px",
        background: "#fff",
        marginTop: "8px",
        marginRight: "16px",
        borderRadius: "5px",
        padding: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "16px",
          fontSize: "14px",
          fontWeight: "700",
        }}
      >
        <div>Informações</div>
        <div style={{ marginRight: "128px" }}>ID Demanda</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "12px",
        }}
      >
        <div>
          <div>
            Relação de Notas:{" "}
            {relacaoNotas.map((item) => (
              <div>{item.nota_fiscal}</div>
            ))}
          </div>
        </div>
        <div>
          <div>Placa: {data?.placa}</div>
          <div>Transportadora: {data?.transportadora}</div>
          <div>Doca: {data?.Doca}</div>
        </div>
        <div>
          <div>Cadastrado por: {data?.cadastrado?.nome}</div>
          <div>Conferente: {data?.conferente?.nome}</div>
          <div>Status: {data?.status}</div>
        </div>
        <div>
          <div>Criado Em: {moment(data?.createdAt).format("DD/MM/YYYY HH:mm:ss")}</div>
          <div>Inicio Conferencia: {moment(data?.inicioConferencia).format("DD/MM/YYYY HH:mm:ss")}</div>
          <div>Termino Conferencia: {moment(data?.fimConferencia).format("DD/MM/YYYY HH:mm:ss")}</div>
        </div>
      </div>
    </div>
  );
}
