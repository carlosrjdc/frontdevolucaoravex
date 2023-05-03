import Button from "@mui/material/Button";

export default function Botao(props) {
  const { acao, texto, disabilitar } = props;
  return (
    <div onClick={acao}>
      <Button disabled={disabilitar} variant="contained">
        {texto}
      </Button>
    </div>
  );
}
