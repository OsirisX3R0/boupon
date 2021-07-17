const TableRow = ({ columns, row, rowKey, ...props }) => {
  let tds = columns.map((c) => {
    let splitKey = rowKey.split(".");
    let key = row;
    splitKey.forEach((p) => {
      key = key[p];
    });

    return <td key={key}>{row[c]}</td>;
  });
  return <tr {...props}>{tds}</tr>;
};

export default TableRow;
