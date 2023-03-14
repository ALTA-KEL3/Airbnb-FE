import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";

import Login from "../pages/Login";
import Reserve from "../pages/Reserve";
import Register from "../pages/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reservasi" element={<Reserve />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
