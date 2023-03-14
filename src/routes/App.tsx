import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";

import DetailStaycation from "../pages/DetailStaycation";
import AddStaycation from "../pages/AddStaycation";
import Confirm from "../pages/Confirm";
import Reserve from "../pages/Reserve";
import Login from "../pages/Login";
import Register from "../pages/Register";
import StaysList from "../pages/StaysList";
import Profile from "../pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/list" element={<StaysList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reservasi" element={<Reserve />} />
        <Route path="/addstaycation" element={<AddStaycation />} />
        <Route path="/detailstaycation" element={<DetailStaycation />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
