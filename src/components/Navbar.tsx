import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";

import withReactContent from "sweetalert2-react-content";
import { handleAuth } from "../utils/redux/reducer/reduser";
import Swal from "../utils/Swal";
import axios from "axios";

const Navbar = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [cookies, , removeCookies] = useCookies(["token", "role", "id"]);
  const checkToken = cookies.token;

  const [photo, setPhoto] = useState<string>("");

  function ProfileHandler() {
    axios
      .get(`https://api-airbnb.projectfebe.online/profile`, {
        headers: {
          Authorization: `Bearer ${checkToken}`,
        },
      })
      .then((res) => {
        const { photo } = res.data.data;
        setPhoto(photo);
      })
      .catch((err) => {});
  }
  useEffect(() => {
    ProfileHandler();
  }, []);

  const handleLogout = async () => {
    MySwal.fire({
      icon: "warning",
      title: "Ingin Logout ?",
      text: "ketik logout untuk lanjut",
      confirmButtonText: "Logout",
      cancelButtonText: "Kembali",
    }).then((oke) => {
      if (oke.isConfirmed) {
        dispatch(handleAuth(false));
        removeCookies("token");
        removeCookies("id");
        removeCookies("role");

        navigate("/");
      }
    });
  };

  return (
    <div className="w-full">
      <div className="navbar bg-[#4DE599] px-16">
        <div className="flex-1">
          <Link to={"/list"} className="btn-ghost btn text-xl normal-case">
            GoHome
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown-end dropdown">
            <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
              <div className="w-10 rounded-full">
                <img src={cookies.token ? (photo ? photo : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png") : "https://cdn-icons-png.flaticon.com/512/9131/9131529.png"} />
              </div>
            </label>
            <ul tabIndex={0} className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow">
              <li>
                <Link to={"/profile"} className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li onClick={() => handleLogout()}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
