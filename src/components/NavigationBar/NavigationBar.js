import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavigationBar.css";
import { FcMoneyTransfer } from "react-icons/fc";
import { useAuth } from "../Context/Auth";

const NavigationBar = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };
  return (
    <div className="navbar bg-black opacity-90 p-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to="/">
          <Link to="/" className="btn btn-ghost normal-case text-xl text-white">
            <FcMoneyTransfer className="text-4xl"></FcMoneyTransfer>
            Money <strong>Trek</strong>
          </Link>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link className="navItem" to="/">
            <li className="mr-8 font-medium text-lg ">Home</li>
          </Link>
          <Link className="navItem" to="/service">
            <li className="mr-8 font-medium text-lg ">Service</li>
          </Link>
          <Link className="navItem" to="/about">
            <li className="mr-8 font-medium text-lg">About</li>
          </Link>
          <Link className="navItem" to="/contact">
            <li className="mr-8 font-medium text-lg">Contact Us</li>
          </Link>
          <Link className="navItem" to="/faq">
            <li className="mr-8 font-medium text-lg">FAQ</li>
          </Link>
        </ul>
      </div>

      <div className="navbar-end">
        {!auth.user ? (
          <>
            <Link className="mr-5" to="/login">
              <button className="btn btn-side">Login</button>
            </Link>
            <Link className="mr-5" to="/signup">
              <button className="btn btn-side">Register</button>
            </Link>
          </>
        ) : (
          <>
            <Link
              className="mr-5"
              to={`${
                auth?.user?.role === 1 ? "/dashboard/admin" : "/dashboard/user"
              }`}
            >
              <button className="btn btn-side">Dashboard</button>
            </Link>
            <Link className="mr-5" to="/login">
              <button className="btn btn-side" onClick={handleLogOut}>
                Logout
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
