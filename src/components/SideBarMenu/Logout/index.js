import { AiOutlinePoweroff } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function LogoutSideBar() {
  const navigate = useNavigate();

  function logout() {
    // realizar a desautenticação do usuário (ex.: remoção do token)

    sessionStorage.clear();
    navigate("/auth");
  }
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "10px" }}>LOGOUT</div>
      <div>
        <AiOutlinePoweroff onClick={logout} size={25} color="red" />
      </div>
    </div>
  );
}
