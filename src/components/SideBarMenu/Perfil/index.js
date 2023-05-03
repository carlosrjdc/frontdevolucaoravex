import { BsFillPersonFill } from "react-icons/bs";

export default function PerfilSideBar() {
  const nome = sessionStorage.getItem("nome");
  return (
    <div
      style={{
        textAlign: "center",
        padding: "10%",
        display: "block",
        marginBottom: "32px",
      }}
    >
      <div style={{ marginBottom: "8px" }}>
        <BsFillPersonFill size={30} />
      </div>
      <>{nome}</>
    </div>
  );
}
