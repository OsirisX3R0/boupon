import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Typography } from "@material-ui/core";
import dayjs from "dayjs";

import { GlobalContext } from "../../context/GlobalContext";
import SimpleTable from "../core/table/SimpleTable";
import DeleteButton from "../core/button/DeleteButton";

const columns = [
  {
    field: "name",
    text: "Name",
  },
  {
    field: "ts",
    text: "Last Updated",
  },
  {
    field: "delete",
    text: "",
  },
];

const UserView = () => {
  const { key } = useContext(GlobalContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`/api/users/${key}`).then((res) => {
      let accountUsers = res.data.map((user) => {
        return {
          ...user,
          ts: dayjs(user.ts / 1000).format("MM/DD/YYYY h:mm:ssa"),
        };
      });

      setUsers(accountUsers);
    });
  }, [key]);

  const deleteUser = (id) => {
    axios.delete(`/api/users/delete/${id}`).then((res) => {
      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== id));
    });
  };

  const deleteCol = (row) => (
    <DeleteButton color="inherit" onClick={() => deleteUser(row.id)} />
  );

  const table = users.length ? (
    <SimpleTable columns={columns} rows={users} delete={deleteCol} />
  ) : null;

  return (
    <>
      <Typography variant="h2">Users</Typography>
      {table}
    </>
  );
};

export default UserView;
