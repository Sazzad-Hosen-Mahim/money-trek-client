import React from "react";
import Layout from "../layout/Layout";
import { useAuth } from "../Context/Auth";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="grid grid-cols-2 gap-1 h-screen align-middle">
        <div className="align-middle my-auto mx-auto">
          <h1 className="text-5xl">Admin dashboard</h1>
        </div>
        <div className="my-auto mx-auto shadow-lg p-20">
          <h1 className="text-2xl">Admin Name: {auth?.user?.name}</h1>
          <p className="text-2xl">Admin Email: {auth?.user?.email}</p>
          <p className="text-2xl">Admin Contact: {auth?.user?.phone}</p>
          <Link to="/dashboard/admin/users">
            <button className="btn btn-primary mt-10">Get Users</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
