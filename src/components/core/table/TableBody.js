import TableRow from "./TableRow";

const TableBody = ({ columns, rows, rowKey }) => {
  let tableRows = rows.length
    ? rows.map((row, i) => (
        <TableRow columns={columns} row={row} rowKey={rowKey} key={row.name} />
      ))
    : null;

  return <tbody>{tableRows}</tbody>;
};

export default TableBody;
