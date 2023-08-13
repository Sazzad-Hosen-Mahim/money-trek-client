import React, { useState } from "react";
import Layout from "../layout/Layout";
import { useAuth } from "../Context/Auth";
import axios from "axios";
import UserAmount from "./UserAmount";

const Dashboard = () => {
  const [auth, setAuth] = useAuth();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API}/numbers`, { value })
      .then((response) => {
        // console.log("Number saved successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error saving number:", error);
      });
  };
  return (
    <Layout>
      <div className="grid grid-cols-2 h-screen">
        <div className="text-4xl my-auto bg-emerald-500 p-52 h-screen text-white">
          <h1 className="text-2xl text-center align-middle">
            Name: {auth?.user?.name}
          </h1>
          <h1 className="text-2xl text-center align-middle">
            Email: {auth?.user?.email}
          </h1>
          <h1 className="text-2xl text-center align-middle">
            Address: {auth?.user?.address}
          </h1>
        </div>
        <div className=" p-10 shadow-xl ">
          <form onSubmit={handleSubmit}>
            <label className="text-black">
              Enter The Amount:
              <input
                className="mb-10 mx-6 ms-10 px-5 py-2"
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Enter Your amount"
                name="amount"
              />
            </label>
            <button className="btn btn-primary">Deposit</button>
          </form>
          <div>
            <p className="bg-purple-500 text-white text-2xl font-medium p-10 ">
              Deposited Amount: {value}
            </p>
            <UserAmount></UserAmount>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
