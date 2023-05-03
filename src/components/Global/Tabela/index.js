import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function TabelaPadrao({ data, titulo, minimo, acao }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: minimo }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {titulo?.titulo?.map((title) => (
              <TableCell key={title} sx={{ fontSize: "12px" }} align="center">
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(data) &&
            data?.map((title) => {
              return (
                <TableRow
                  key={title.titulo}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  onClick={() => {
                    if (acao) {
                      acao(title);
                    }
                  }}
                >
                  {titulo?.conteudo?.map((linha) => (
                    <TableCell key={linha.id} sx={{ fontSize: "10px" }} align="center">
                      {title[linha]}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
