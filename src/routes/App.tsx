import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";

import DetailStaycation from "../pages/DetailStaycation";
import AddStaycation from "../pages/AddStaycation";
import StaysList from "../pages/StaysList";
import Register from "../pages/Register";
import Feedback from "../pages/Feedback";
import Login from "../pages/Auth/Login";
import Profile from "../pages/Profile";
import Confirm from "../pages/Confirm";
import Reserve from "../pages/Reserve";
import Trip from "../pages/Trip";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/list" element={<StaysList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/trip" element={<Trip />} />
        <Route path="/reservasi" element={<Reserve />} />
        <Route path="/addstaycation" element={<AddStaycation />} />
        <Route path="/detailstaycation" element={<DetailStaycation />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
