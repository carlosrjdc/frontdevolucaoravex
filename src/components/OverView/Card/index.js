export default function CardOverView({ titulo, status }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "220px",
        margin: "8px",
        padding: "16px",
        background: "#fff",
        borderRadius: "5px",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div style={{ fontWeight: "600", fontSize: "32px", marginLeft: "8px" }}>
          {status}
        </div>
      </div>
      <div>
        <div style={{ fontSize: "10px", marginBottom: "8px" }}>Status</div>
        <div style={{ fontWeight: "600", fontSize: "12px" }}>{titulo}</div>
      </div>
    </div>
  );
}
