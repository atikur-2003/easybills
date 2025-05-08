import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase.config";
import { FaEyeSlash, FaGoogle, FaRegEye } from "react-icons/fa";

const Login = () => {
  const { signIn, googleSignIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const emailRef = useRef();
  const [showPass, setShowPass] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: "SignIn Successful",
          icon: "success",
          draggable: true,
        });

        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };

  const handleForgetPass = () => {
    const email = emailRef.current.value;
    console.log(email);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Swal.fire({
          title:
            "A Password Reset Email Has Been Sent. Please reset your password through that email",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };

  const handleGoogleSignin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
       navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="py-28 px-3 md:px-0">
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <div className="text-center mt-5">
          <h1 className="text-2xl font-semibold">Signin your account</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleSignIn} className="fieldset">
            <label className="label text-lg font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              ref={emailRef}
              required
            />

            <label className="label text-lg font-medium">Password</label>
                        <div className="relative">
                          <input
                            type={showPass ? "text" : "password"}
                            name="password"
                            className="input"
                            placeholder="Password"
                            required
                          />
                          <button
                            onClick={() => {
                              setShowPass(!showPass);
                            }}
                            className="btn btn-xs absolute right-5 top-2 z-10"
                          >
                            {showPass ? <FaRegEye></FaRegEye> : <FaEyeSlash></FaEyeSlash>}
                          </button>
                        </div>
            <div className="mt-2">
              <a onClick={handleForgetPass} className="link link-hover text-sm">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="btn bg-[#E0F2FE] text-[#0284C7] hover:bg-[#0284C7] hover:text-white  mt-4 mb-2"
            >
              Signin
            </button>

            {error && (
              <p className="text-red-400 text-base">
                Invalid Email or Password
              </p>
            )}

            <p className="text-base mt-3">
              Don't have an account ?{" "}
              <Link to="/auth/signup" className="text-[#0284C7] underline">
                SignUp here
              </Link>
            </p>
          </form>
          <button
            onClick={handleGoogleSignin}
            className="mt-3 btn bg-white text-[#0284C7] hover:bg-[#0284C7] hover:text-white"
          >
            <FaGoogle></FaGoogle>
            Signin with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
