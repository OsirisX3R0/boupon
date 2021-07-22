import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@material-ui/core";

const DataTable = ({ columns, rows }) => {
  const tableHead = columns.map((column, i) => (
    <TableCell key={i}>{column.text}</TableCell>
  ));

  const tableRows = rows.length
    ? rows.map((row) => (
        <TableRow key={row["id"]}>
          {columns.map((column, i) => (
            <TableCell key={row["id"] + "-" + i}>{row[column.field]}</TableCell>
          ))}
        </TableRow>
      ))
    : null;

  return (
    <Table>
      <TableHead>
        <TableRow>{tableHead}</TableRow>
      </TableHead>
      <TableBody>{tableRows}</TableBody>
    </Table>
  );
};

export default DataTable;
