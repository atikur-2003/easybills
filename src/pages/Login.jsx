import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const {signIn} = use(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const [error, setError] = useState("")

  const handleSignIn =(e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      navigate(`${location.state? location.state : '/'}`)
    })
    .catch((error) => {
      const errorCode = error.code;
      setError(errorCode);
    });
    
  }
  return (
    <div className="py-28 px-3 md:px-0">
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="text-center mt-5">
          <h1 className="text-2xl font-semibold">Signin your account</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleSignIn} className="fieldset">
            <label className="label text-lg font-medium">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" required />

            <label className="label text-lg font-medium">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" required/>
            <div className="mt-2">
              <a className="link link-hover text-sm">Forgot password?</a>
            </div>
            <button type="submit" className="btn bg-[#E0F2FE] text-[#0284C7] hover:bg-[#0284C7] hover:text-white  mt-4 mb-2">Signin</button>

            {error && <p className="text-red-400 text-base">Invalid Email or Password</p>}

            <p className="text-base mt-3">
              Don't have an account ?{" "}
              <Link to="/auth/signup" className="text-[#0284C7] underline">
                SignUp here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
