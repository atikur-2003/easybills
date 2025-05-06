import React from "react";
import { Link } from "react-router";

const Signup = () => {
  return (
    <div className="pt-28">
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl ">
        <div className="text-center mt-5">
          <h1 className="text-2xl font-semibold">SignUp your account</h1>
        </div>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label text-lg font-medium">Name</label>
            <input type="text" className="input" placeholder="Name" />

            <label className="label text-lg font-medium">Photo URL</label>
            <input type="text" className="input" placeholder="Photo URL" />

            <label className="label text-lg font-medium">Email</label>
            <input type="email" className="input" placeholder="Email" />

            <label className="label text-lg font-medium">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <div className="mt-2">
              <a className="link link-hover text-sm">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">SignUp</button>
            <p className="text-base mt-3">
              Already have an account ?{" "}
              <Link to="/auth/signin" className="text-[#0284C7] underline">
                Signin here
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Signup;
