import React, { useEffect, useState } from "react";
import "./spinner.css";
import { useNavigate, useLocation } from "react-router-dom";

const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((preValue) => --preValue);
    }, 1000);
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);
  return (
    <div className="h-screen text-center">
      <div className="spinner align-middle">
        <div className="spinner__dot1"></div>
        <div className="spinner__dot2"></div>
      </div>
    </div>
  );
};

export default Spinner;
