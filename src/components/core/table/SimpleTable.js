import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@material-ui/core";

const SimpleTable = ({ columns, rows, ...props }) => {
  const tableHead = (
    <TableRow>
      {columns.map((column) => (
        <TableCell key={column.field}>{column.text}</TableCell>
      ))}
    </TableRow>
  );

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
      <TableHead>{tableHead}</TableHead>
      <TableBody>{tableRows}</TableBody>
    </Table>
  );
};

export default SimpleTable;
