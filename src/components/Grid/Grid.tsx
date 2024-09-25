import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

function createData(
  store: string,
  name: string,
  year: number,
) {
  return { store, name, year };
}

const rows = [
  createData('Loja 01', 'Henrique', 2024),
  createData('Loja 02', 'Lucas', 2024),
  createData('Loja 03', 'Ingryd', 2024),
 
];

export default function Grid() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Loja</TableCell>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">Ano</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.store}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}