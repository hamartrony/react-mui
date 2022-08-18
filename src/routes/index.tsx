import { Navigate, Route, Routes } from "react-router-dom";
import { Dashbard } from "../pages/dashboard";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Dashbard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
