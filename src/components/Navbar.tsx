import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";

import withReactContent from "sweetalert2-react-content";
import { handleAuth } from "../utils/redux/reducer/reduser";
import Swal from "../utils/Swal";

const Navbar = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [cookies, , removeCookies] = useCookies(["token", "role", "id"]);

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
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
            >
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
