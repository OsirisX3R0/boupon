import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@material-ui/core";

const SimpleTable = ({ columns, rows, ...props }) => {
  const tableHead = columns.map((column, i) => (
    <TableCell key={i}>{column.text}</TableCell>
  ));

  const tableRows = rows.length
    ? rows.map((row) => (
        <TableRow key={row["id"]}>
          {columns.map((column, i) => {
            let cellContent = props[column.field]
              ? props[column.field](row)
              : row[column.field];

            return (
              <TableCell key={row["id"] + "-" + i}>{cellContent}</TableCell>
            );
          })}
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

export default SimpleTable;
