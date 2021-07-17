import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const Table = ({ columns, rows, rowKey, children }) => {
  return (
    <table>
      <TableHeader columns={columns} />
      <TableBody columns={columns} rows={rows} rowKey={rowKey} />
    </table>
  );
};

export default Table;
