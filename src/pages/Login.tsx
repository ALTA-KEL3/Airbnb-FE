import Footer from "../components/Footer";

const Login = () => {
  return (
    <div>
      <div className="grid h-screen place-content-center text-center">
        <h1 className="text-[64px] text-color3">Sign In</h1>
        <p className="my-10 text-[16px] text-color3">Sign in and start managing your journey!</p>
        <div className="form-control w-full max-w-xs">
          <input type="email" placeholder="Email" className="input-bordered input mb-8 w-[300px] max-w-xs place-self-center bg-color3 text-white" />
          <input type="password" placeholder="Password" className="input-bordered input mb-8 w-[300px] max-w-xs place-self-center bg-color3 text-white" />
          <p className="text-[16px] text-color3">
            Don't have an account yet?{" "}
            <a href="" className="font-bold">
              Register
            </a>
          </p>
          <button className="btn my-5 w-[300px] place-self-center border-0 bg-[#20DF7F] text-color3 drop-shadow-xl hover:bg-color3 hover:text-white">Login</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
