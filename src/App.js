import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Dashboard from "./components/User/Dashboard";
import PrivateRoute from "./components/Routes/PrivateRoute/PrivateRoute";
import ServiceNew from "./components/newComponents/ServiceNew/ServiceNew";
import EmergencyServiceNew from "./components/newComponents/EmergencyService/EmergencyServiceNew";
import ContactNew from "./components/newComponents/ContactNew/ContactNew";
import FaqNew from "./components/newComponents/FaqNew/FaqNew";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import AdminRoute from "./components/Routes/PrivateRoute/AdminRoute";
import AdminDashboard from "./components/Admin/AdminDashboard";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Users from "./components/Admin/Users";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        <Route path="/about" element={<ServiceNew></ServiceNew>}></Route>
        <Route
          path="/service"
          element={<EmergencyServiceNew></EmergencyServiceNew>}
        ></Route>
        <Route path="/contact" element={<ContactNew></ContactNew>}></Route>
        <Route path="/faq" element={<FaqNew></FaqNew>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="/forgot-password"
          element={<ForgotPassword></ForgotPassword>}
        ></Route>

        {/* {private route user} */}
        <Route path="/dashboard" element={<PrivateRoute></PrivateRoute>}>
          <Route path="user" element={<Dashboard></Dashboard>}></Route>
        </Route>
        {/* Private route admin */}
        <Route path="/dashboard" element={<AdminRoute></AdminRoute>}>
          <Route
            path="admin"
            element={<AdminDashboard></AdminDashboard>}
          ></Route>
          <Route path="admin/users" element={<Users></Users>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
