export default function Titulo({ titulo }) {
  return (
    <div
      style={{
        background: "#fff",
        marginLeft: "8px",
        marginRight: "20px",
        padding: "16px",
        marginTop: "4px",
        borderRadius: "8px",
        fontWeight: "700",
        fontSize: "18px",
      }}
    >
      <div>{titulo.toUpperCase()}</div>
    </div>
  );
}
