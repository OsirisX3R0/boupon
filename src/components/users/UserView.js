import { useContext, useState, useEffect } from "react";
import axios from "axios";
import {
  Typography,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@material-ui/core";

import { GlobalContext } from "../../context/GlobalContext";
import DataTable from "../core/table/DataTable";

const columns = [
  {
    field: "name",
    text: "Name",
  },
  {
    field: "ts",
    text: "Last Updated",
  },
];

const UserView = () => {
  const { key } = useContext(GlobalContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`/api/users/${key}`).then((res) => {
      let accountUsers = res.data.map((user) => {
        return {
          id: user.ref["@ref"].id,
          ts: user.ts,
          name: user.data.name,
          key: user.data.key,
        };
      });

      setUsers(accountUsers);
    });
  }, [key]);

  const table = users.length ? (
    <DataTable columns={columns} rows={users} />
  ) : null;

  return (
    <>
      <Typography variant="h2">Users</Typography>
      {table}
    </>
  );
};

export default UserView;
