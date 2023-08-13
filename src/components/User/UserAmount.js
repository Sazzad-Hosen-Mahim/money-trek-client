import React, { useEffect, useState } from "react";
import axios from "axios";

function UserAmount() {
  const [amount, setAmount] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/stored-amount`)
      .then((response) => {
        setAmount(response.data);
        console.log(amount);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="text-center text-1xl">
      {amount.map((am) => (
        <div className="bg-blue-400 text-white text-lg" key={amount._id}>
          <h1 className="p-2">{am.value}</h1>
        </div>
      ))}
    </div>
  );
}

export default UserAmount;
