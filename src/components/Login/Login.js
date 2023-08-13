import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import { useAuth } from "../Context/Auth";
import { Layout } from "antd";
import NavigationBar from "../NavigationBar/NavigationBar";
import Footer from "../Footer/Footer";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  //hooks
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        { email, password }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };
  return (
    <Layout title={"Login - Money trek"}>
      <NavigationBar></NavigationBar>
      <div className="login text-center text-xl  lg:mx-64 lg:my-14 rounded-lg ">
        <div className="p-24">
          <form onSubmit={handleLogin}>
            <h1 className="text-white mb-10 text-center">Login</h1>
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

            <br />
            <p className="mb-4 text-black">
              Don't have an account?
              <Link className="text-white mb-5 mx-3" to="/signup">
                Sign Up here
              </Link>
            </p>
            <div className="grid grid-cols-1">
              <button
                className="lg:w-1/2 m-auto px-10 py-6 mb-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white hover:bg-gradient-to-l"
                type="submit"
              >
                Login
              </button>
              <button
                className="lg:w-1/2 m-auto px-10 py-6 mb-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white hover:bg-gradient-to-l"
                type="submit"
                onClick={() => {
                  navigate("/forgot-password");
                }}
              >
                Forgot Password
              </button>
            </div>
            <p className="mt-5 text-red-600"></p>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </Layout>
  );
};

export default Login;
