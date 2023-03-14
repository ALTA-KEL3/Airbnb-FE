import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../components/Footer";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const navigate = useNavigate();

  function registerHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    axios
      .post("https://virtserver.swaggerhub.com/ALFIANADSAPUTRA_1/AirBnB/1.0.0/register", {
        name: name,
        email: email,
        password: pass,
      })
      .then((res) => {
        // Swal.fire({
        //   position: "center",
        //   icon: "success",
        //   text: "Register Berhasil",
        //   showConfirmButton: false,
        //   timer: 1500,
        // });
        // navigate("/");
        console.log(res.data);
      })
      .catch((err) => {
        // Swal.fire({
        //   icon: "error",
        //   title: "Oops...",
        //   text: "Register Gagal, inputan tidak sesuai!",
        // });
        console.log(err);
      });
  }

  return (
    <div>
      <div className="grid h-screen place-content-center bg-color1 text-center">
        <h1 className="text-[64px] text-color3">Register</h1>
        <p className="my-10 text-[16px] text-color3">Register and fill your data</p>
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
              <a href="" className="font-bold">
                Login
              </a>
            </p>
            <button type="submit" className="btn my-5 w-[300px] border-0 bg-[#20DF7F] text-color3 drop-shadow-xl hover:bg-color3 hover:text-white">
              Register
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
