import React from "react";
import Layout from "../layout/Layout";
import UserList from "./UserList";

const Users = () => {
  return (
    <Layout>
      <div>
        <h1 className="text-center mt-10 text-3xl">All the users: </h1>
        <UserList></UserList>
      </div>
    </Layout>
  );
};

export default Users;
