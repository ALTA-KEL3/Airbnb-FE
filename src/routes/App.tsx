import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";

import Login from "../pages/Login";
import Reserve from "../pages/Reserve";
import AddStaycation from "../pages/AddStaycation";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reservasi" element={<Reserve />} />
        <Route path="/addstaycation" element={<AddStaycation />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
