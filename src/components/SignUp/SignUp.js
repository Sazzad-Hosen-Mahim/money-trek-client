import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SignUp.css";
import Layout from "../layout/Layout";
import toast from "react-hot-toast";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  //form function handlesubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, password, phone, address, answer }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
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
    <Layout title={"Register - Money trek"}>
      <div className="signup text-center text-lg lg:mx-64 lg:my-14 rounded-lg ">
        <div className="p-24">
          <form onSubmit={handleSubmit}>
            <h1 className="text-white mb-10 text-center">Register</h1>
            <label className="text-black">
              Name:
              <input
                className="mb-10 mx-6 ms-10 px-5 py-2"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Name"
                name="name"
                required
              />
            </label>
            <br />
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
            </label>
            <br />
            <label className="text-black">
              Password:
              <input
                className="mb-10 mx-5 px-3 py-2"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="Enter Your Password"
                required
              />
            </label>
            <br />
            <label className="text-black">
              Phone:
              <input
                className="mb-10 mx-6 ms-10 px-5 py-2"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Your Phone Number"
                name="phone"
              />
            </label>
            <br />
            <label className="text-black">
              Address:
              <input
                className="mb-10 mx-6 ms-10 px-5 py-2"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter Your Address"
                name="address"
                required
              />
            </label>
            <br />
            <label className="text-black">
              Answer:
              <input
                className="mb-10 mx-6 ms-10 px-5 py-2"
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="What is your favorite hobby?"
                name="answer"
                required
              />
            </label>
            <br />
            <p className="mb-4 text-black">
              Already have an account?
              <Link className="text-white mb-5 mx-3" to="/login">
                Login now!
              </Link>
            </p>
            <button
              className="px-40 py-4 mb-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white hover:bg-gradient-to-l"
              type="submit"
            >
              Sign Up
            </button>
            <p className="mt-5 text-red-600"></p>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
