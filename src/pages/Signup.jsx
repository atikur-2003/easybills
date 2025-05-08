import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase.config";
import Swal from "sweetalert2";

const Signup = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState("");
  const [showPass, setShowPass] = useState(false);

 


  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    setErrorMessage("")

     // password validation
  const validationEx = /(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]{6}/
  if(validationEx.test(password) === false){
    setErrorMessage("Password must have one uppercase, one lowercase and have to at least 6 characters long");
    return;
  }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        sendEmailVerification(auth.currentUser)
        .then(() => {
          alert("We sent you a verification Email. Please verify your Email")
        });updateUser({ displayName: name, photoURL: photo }).then(() => {
          setUser({...user, displayName: name, photoURL: photo});
          navigate('/')
        }).catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: {error}
          });
          setUser(user)

        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="pt-28 px-5 md:px-0">
      <div className=" card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl ">
        <div className="text-center mt-5">
          <h1 className="text-2xl font-semibold">SignUp your account</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleSignup} className="fieldset">
            <label className="label text-lg font-medium">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
              required
            />

            <label className="label text-lg font-medium">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo URL"
              required
            />

            <label className="label text-lg font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
              required
            />

            <label className="label text-lg font-medium">Password</label>
            <div className="relative">
            <input
              type={showPass? 'text':'password'}
              name="password"
              className="input"
              placeholder="Password"
              required
            />
            <button 
            onClick={()=> {setShowPass (!showPass)}}
            className="btn btn-xs absolute right-5 top-2 z-10">
              {
                showPass? <FaRegEye></FaRegEye> : <FaEyeSlash></FaEyeSlash>
              }
            </button>
            </div>
            <div className="mt-2">
              <a className="link link-hover text-sm">Forgot password?</a>
            </div>

              {errorMessage && <p className="text-red-400 text-base">{errorMessage}</p>}

            <button
              type="submit"
              className="btn bg-[#E0F2FE] text-[#0284C7] hover:bg-[#0284C7] hover:text-white  mt-4"
            >
              SignUp
            </button>
            <p className="text-base mt-3">
              Already have an account ?
              <Link to="/auth/signin" className="text-[#0284C7] underline">
                Signin here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
