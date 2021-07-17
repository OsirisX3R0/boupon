import TableHead from "./TableHead";

const TableHeader = ({ columns }) => {
  let tableColumns = columns.map((c, i) => (
    <TableHead key={i}>{c.name}</TableHead>
  ));
  return <thead>{tableColumns}</thead>;
};

export default TableHeader;
