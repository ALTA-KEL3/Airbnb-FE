import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import axios from "axios";

import withReactContent from "sweetalert2-react-content";
import { handleAuth } from "../../utils/redux/reducer/reduser";
import Swal from "../../utils/Swal";

import Footer from "../../components/Footer";
import CustomButton from "../../components/CustomButton";
import Loading from "../../components/Loading";

const Login = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [cookie, setCookie] = useCookies(["token", "role", "id"]);

  const [loading, setLoading] = useState<boolean>(false);
  const [disable, setDisable] = useState<boolean>(true);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (email && password) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [email, password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      email,
      password,
    };

    axios
      .post(`https://api-airbnb.projectfebe.online/login`, body)
      .then((res) => {
        const { message, token, data } = res.data;

        setCookie("token", token, { path: "/" });
        setCookie("id", data.id, { path: "/" });
        setCookie("role", data.role, { path: "/" });
        MySwal.fire({
          icon: "success",
          title: message,
          text: "Berhasil melakukan Login",
          showCancelButton: false,
        });
        navigate("/list");
      })
      .catch((err) => {
        const { data } = err.response;
        MySwal.fire({
          icon: "error",
          title: data.message,
          text: "Gagal melakukan Login",
          showCancelButton: false,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="bg-color1">
      {loading ? (
        <Loading />
      ) : (
        <div className="grid h-screen place-content-center text-center">
          <h1 className="text-[64px] text-color3">Sign In</h1>
          <p className="my-10 text-[16px] text-color3">
            Sign in and start managing your journey!
          </p>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="form-control w-full max-w-xs"
          >
            <input
              type="email"
              placeholder="Email"
              className="input-bordered input mb-8 w-[300px] max-w-xs place-self-center bg-color3 text-white"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="input-bordered input mb-8 w-[300px] max-w-xs place-self-center bg-color3 text-white"
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className="text-[16px] text-color3">
              Don't have an account yet?
              <Link to="/register">
                <span className="font-bold">Register</span>
              </Link>
            </p>

            <CustomButton
              className="btn my-5 w-[300px] place-self-center border-0 bg-[#20DF7F] text-color3 hover:bg-color3 hover:text-white disabled:cursor-not-allowed disabled:bg-zinc-400"
              id="btn-login"
              label="Login"
              loading={disable || loading}
            />
          </form>
        </div>
      )}

      {loading ? <Loading /> : <Footer />}
    </div>
  );
};

export default Login;
