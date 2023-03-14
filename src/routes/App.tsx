import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";

import DetailStaycation from "../pages/DetailStaycation";
import AddStaycation from "../pages/AddStaycation";
import Reserve from "../pages/Reserve";
import Login from "../pages/Login";
import Register from "../pages/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reservasi" element={<Reserve />} />
        <Route path="/addstaycation" element={<AddStaycation />} />
        <Route path="/detailstaycation" element={<DetailStaycation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
