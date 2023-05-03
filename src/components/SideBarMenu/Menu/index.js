import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { menus } from "./arrayMenu";

export default function MenuSideBar() {
  return (
    <Menu
      renderExpandIcon={({ open }) => <span>{open ? "-" : "+"}</span>}
      transitionDuration={800}
    >
      {Object.keys(menus).map((menu) => {
        return (
          <SubMenu key={menu} icon={menus[menu].icone} label={menu}>
            {menus[menu].arr.map((item) => (
              <MenuItem component={<Link to={item.link} />} key={item.nome}>
                {item.nome}
              </MenuItem>
            ))}
          </SubMenu>
        );
      })}
    </Menu>
  );
}
