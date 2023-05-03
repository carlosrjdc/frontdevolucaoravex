import { Sidebar, Menu, useProSidebar } from "react-pro-sidebar";
import { AiOutlineExpandAlt } from "react-icons/ai";

import PerfilSideBar from "./Perfil";
import MenuSideBar from "./Menu";
import LogoutSideBar from "./Logout";
import "./SideBar.css";

export default function SideBarMenu() {
  const { collapseSidebar } = useProSidebar();
  return (
    <div className="containerGeraldois">
      <Sidebar transitionDuration={800}>
        <div className="containerGeral">
          <Menu>
            <PerfilSideBar />
            <MenuSideBar />
          </Menu>
          <div
            style={{
              marginBottom: "10%",
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            <AiOutlineExpandAlt onClick={() => collapseSidebar()} size={25} />
          </div>
          <div style={{ marginBottom: "10%", cursor: "pointer" }}>
            <LogoutSideBar />
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
