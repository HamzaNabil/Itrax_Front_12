import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./redux/actions";

function Users() {
  const { user } = useSelector((state) => state); // {user: {users:}, counter: {count}}
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {user.loading && <div> Loading... </div>}
      {user.err && "Error"}
      {user.users && user.users.map((u) => <div key={u.id}>{u.name}</div>)}
    </div>
  );
}

export default Users;
