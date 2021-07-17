import { useContext, useState, useEffect } from "react";
import axios from "axios";

import { GlobalContext } from "../../context/GlobalContext";
import Table from "../core/table/Table";
import { ViewHead } from "../../styles";

const columns = ["Name", "Created", "Delete"];

const UserView = () => {
  const { key } = useContext(GlobalContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`/api/users/${key}`).then((res) => setUsers(res.data));
  }, [key]);

  const userTable = users.length ? (
    <Table columns={columns} rows={users} rowKey="ref.id" />
  ) : null;

  return (
    <>
      <ViewHead>Users</ViewHead>
      {userTable}
    </>
  );
};

export default UserView;
