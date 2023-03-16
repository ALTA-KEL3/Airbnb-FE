import { useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import Swal from "../utils/Swal";

import Loading from "../components/Loading";
import Footer from "../components/Footer";
import CustomButton from "../components/CustomButton";

const Register = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  const [loading, setLoading] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(true);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  useEffect(() => {
    if (name && email && pass) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [name, email, pass]);

  function registerHandler(e: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    e.preventDefault();

    axios
      .post("https://api-airbnb.projectfebe.online/register", {
        name: name,
        email: email,
        password: pass,
      })
      .then((res) => {
        const { message } = res.data;

        Swal.fire({
          icon: "success",
          title: message,
          text: "Register Berhasil",
          showCancelButton: false,
          showConfirmButton: false,
          timer: 1700,
        });
        navigate("/");
      })
      .catch((err) => {
        const { data } = err.response;
        Swal.fire({
          icon: "error",
          title: data.message,
          text: "Register Gagal",
          showCancelButton: false,
          timer: 1500,
        });
      })
      .finally(() => setLoading(false));
  }

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid h-screen place-content-center bg-color1 text-center">
          <h1 className="text-[64px] text-color3">Register</h1>
          <p className="my-10 text-[16px] text-color3">
            Register and fill your data
          </p>
          <div className="form-control w-full max-w-xs">
            <form onSubmit={(e) => registerHandler(e)}>
              <input
                type="text"
                id="nama"
                value={name}
                placeholder="Full Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="input-bordered input mb-8 w-[300px] max-w-xs bg-color3 text-white"
              />
              <input
                type="email"
                id="email"
                value={email}
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="input-bordered input mb-8 w-[300px] max-w-xs bg-color3 text-white"
              />
              <input
                type="password"
                id="password"
                value={pass}
                placeholder="Password"
                onChange={(e) => {
                  setPass(e.target.value);
                }}
                className="input-bordered input mb-8 w-[300px] max-w-xs bg-color3 text-white"
              />
              <p className="text-[16px] text-color3">
                Do you have an account?{" "}
                <Link to="/" className="font-bold">
                  Login
                </Link>
              </p>
              <CustomButton
                id="btn-register"
                type="submit"
                label=" Register"
                className="btn my-5 w-[300px] border-0 bg-[#20DF7F] text-color3 drop-shadow-xl hover:bg-color3 hover:text-white disabled:cursor-pointer disabled:bg-zinc-400"
                loading={disable || loading}
              />
            </form>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Register;
