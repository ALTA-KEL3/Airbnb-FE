import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";

import { setTrip } from "../utils/redux/reducer/reduser";

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
  const dispatch = useDispatch();

  useEffect(() => {
    const getTrip = localStorage.getItem("Trip");
    if (getTrip) {
      dispatch(setTrip(JSON.parse(getTrip)));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/list" element={<StaysList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/trip" element={<Trip />} />
        <Route path="/reservasi/:id" element={<Reserve />} />
        <Route path="/addstaycation" element={<AddStaycation />} />
        <Route path="/detailstaycation/:id" element={<DetailStaycation />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
