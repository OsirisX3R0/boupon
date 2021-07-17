const TableHead = ({ children, ...props }) => {
  return <th {...props}>{children}</th>;
};

export default TableHead;
