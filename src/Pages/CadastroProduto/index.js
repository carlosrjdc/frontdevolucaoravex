import CadastrarProduto from "../../components/CadastrarProduto";
import Titulo from "../../components/Global/Titulo";
import SideBarMenu from "../../components/SideBarMenu";

export default function CadastroDeProduto() {
  return (
    <div style={{ display: "flex" }}>
      <SideBarMenu />
      <div style={{ width: "100%" }}>
        <Titulo titulo="Cadastrar Produto" />
        <CadastrarProduto />
      </div>
    </div>
  );
}
