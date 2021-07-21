import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Typography } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";

import { GlobalContext } from "../../context/GlobalContext";

const columns = [
  {
    field: "id",
    headerName: "ID",
  },
  {
    field: "ts",
    headerName: "Last Updated",
  },
  {
    field: "name",
    headerName: "Name",
  },
];

const UserView = () => {
  const { key } = useContext(GlobalContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`/api/users/${key}`).then((res) => {
      debugger;
      let accountUsers = res.data.map((user) => ({
        id: user.ref.id,
        ts: user.ts,
        name: user.data.name,
        key: user.data.key,
      }));
      setUsers(accountUsers);
    });
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
