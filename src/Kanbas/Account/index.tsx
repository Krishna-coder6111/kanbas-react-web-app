import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../../Users/SignIn";
import Profile from "../../Users/Profile";
import UserTable from "../../Users/Table";

export default function Account() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Navigate to="/Kanbas/Account/SignIn" />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Admin/Users" element={<UserTable />} />
      </Routes>
    </div>
  );
}