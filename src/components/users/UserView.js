import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Typography } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";

import { GlobalContext } from "../../context/GlobalContext";

const columns = [
  {
    field: "ts",
    headerName: "Last Updated",
  },
  {
    field: "data.name",
    headerName: "Name",
  },
];

const UserView = () => {
  const { key } = useContext(GlobalContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`/api/users/${key}`).then((res) => setUsers(res.data));
  }, [key]);

  const userTable = users.length ? (
    <DataGrid columns={columns} rows={users} />
  ) : null;

  return (
    <>
      <Typography variant="h2">Users</Typography>
      {userTable}
    </>
  );
};

export default UserView;
