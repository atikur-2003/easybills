import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="py-28">
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="text-center mt-5">
          <h1 className="text-2xl font-semibold">Signin your account</h1>
        </div>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label text-lg font-medium">Email</label>
            <input type="email" className="input" placeholder="Email" />

            <label className="label text-lg font-medium">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div className="mt-2">
              <a className="link link-hover text-sm">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Signin</button>
            <p className="text-base mt-3">
              Don't have an account ?{" "}
              <Link to="/auth/signup" className="text-[#0284C7] underline">
                SignUp here
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
