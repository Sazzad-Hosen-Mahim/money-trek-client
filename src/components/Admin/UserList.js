import React, { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/admin-users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="p-10">
      <div className="grid grid-cols-3  rounded-md gap-6">
        {users.map((user) => (
          <div
            className="bg-emerald-500 p-36 text-white text-lg"
            key={user._id}
          >
            <h1>Name: {user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Address: {user.address}</p>
            <p>Answer{user.answer}</p>
            <p>Account No. : {user.code}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;
