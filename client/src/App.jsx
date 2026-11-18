import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import useGetCurrentUser from "./hooks/useGetCurrentUser";
import { useSelector } from "react-redux";

const App = () => {
  useGetCurrentUser();
  const userdata = useSelector((state) => state.user.userData)
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={userdata ? <Dashboard />:<Login/>} />
    </Routes>
  );
};

export default App;
