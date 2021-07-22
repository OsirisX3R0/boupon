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

  const tableHead = columns.map((column, i) => (
    <TableCell key={i}>{column.text}</TableCell>
  ));

  const userRows = users.length
    ? users.map((user) => (
        <TableRow key={user["id"]}>
          {columns.map((column, i) => (
            <TableCell key={user["id"] + "-" + i}>
              {user[column.field]}
            </TableCell>
          ))}
        </TableRow>
      ))
    : null;

  return (
    <>
      <Typography variant="h2">Users</Typography>
      <Table>
        <TableHead>
          <TableRow>{tableHead}</TableRow>
        </TableHead>
        <TableBody>{userRows}</TableBody>
      </Table>
    </>
  );
};

export default UserView;