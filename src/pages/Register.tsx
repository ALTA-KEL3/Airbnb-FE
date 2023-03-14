import React from "react";
import Footer from "../components/Footer";

const Register = () => {
  return (
    <div>
      <div className="grid h-screen place-content-center text-center">
        <h1 className="text-[64px] text-color3">Register</h1>
        <p className="my-10 text-[16px] text-color3">Register and fill your data</p>
        <div className="form-control w-full max-w-xs">
          <input type="text" placeholder="Full Name" className="input-bordered input mb-8 w-[300px] max-w-xs bg-color3 text-white" />
          <input type="email" placeholder="Email" className="input-bordered input mb-8 w-[300px] max-w-xs bg-color3 text-white" />
          <input type="password" placeholder="Password" className="input-bordered input mb-8 w-[300px] max-w-xs bg-color3 text-white" />
          <p className="text-[16px] text-color3">
            Do you have an account?{" "}
            <a href="" className="font-bold">
              Login
            </a>
          </p>
          <button className="btn my-5 w-[300px] border-0 bg-[#20DF7F] text-color3 drop-shadow-xl hover:bg-color3 hover:text-white">Register</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
