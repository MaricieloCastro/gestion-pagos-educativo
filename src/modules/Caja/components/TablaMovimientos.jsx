import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
export default function TablaMovimientos(props) {
  const { caja } = props;
  const cajaT = caja || "0";
  function createData(name, calories) {
    return { name, calories };
  }
  const rows = [
    createData("Pagos", 0),
    createData("Gastos", 0),
    createData("Caja", cajaT),
    createData("Total", 0),
  ];
  return (
    <TableContainer sx={{ maxHeight: 250 }} component={Paper}>
      <Table
        sx={{ minWidth: 350, background: "white-cabecera" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>TOTAL</TableCell>
            <TableCell>SOLES</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                background: "white-cabecera",
              }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.calories}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
