import React, { useState } from "react";
import Layout from "../layout/Layout";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,
        { email, answer, newPassword }
      );
      if (res && res.data.success) {
        alert(res.data && res.data.message);

        navigate("/login");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };
  return (
    <Layout>
      <div className="login text-center text-xl  lg:mx-64 lg:my-14 rounded-lg ">
        <div className="p-24">
          <form onSubmit={handleLogin}>
            <h1 className="text-white mb-10 text-center">Reset Password</h1>
            <label className="text-black">
              Email:
              <input
                className="mb-10 mx-6 ms-10 px-5 py-2"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                name="email"
                required
              />
              <br />
            </label>
            <label className="text-black">
              Answer:
              <input
                className="mb-10 mx-6 ms-10 px-5 py-2"
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Your Favorite Hobby?"
                name="email"
                required
              />
            </label>
            <br />
            <label className="text-black">
              New Password:
              <input
                className="mb-10 mx-5 px-3 py-2"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                name="password"
                placeholder="Enter Your new Password"
                required
              />
            </label>
            <br />

            <br />
            <p className="mb-4 text-black">
              Don't have an account?
              <Link className="text-white mb-5 mx-3" to="/signup">
                Sign Up here
              </Link>
            </p>
            <div className="grid grid-cols-1">
              <button
                className="w-1/2 m-auto px-40 py-4 mb-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white hover:bg-gradient-to-l"
                type="submit"
              >
                Reset
              </button>
            </div>
            <p className="mt-5 text-red-600"></p>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
