// Login.js
import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { auth, provider } from "../../firebase/firebase"; // Adjust the path as needed
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

import Google from "../assets/img/googleicon.png";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../redux/auth/authslice";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [hide, setHide] = useState(true);
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userData = {
        uid: user.uid,
        email: user.email,
        emailVerified: user.emailVerified,
        accessToken: user.accessToken,
      };

      toast.success("Log in Successfully");
      dispatch(login(userData));
      setTimeout(() => {
        navigate("/success");
      }, 1000);
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    }
  };
  const handelGoogleLogin = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      console.log(user);
      const userData = {
        uid: user.uid,
        email: user.email,
        emailVerified: user.emailVerified,
        accessToken: user.accessToken,
      };
      toast.success("Login Successfully");
      dispatch(login(userData));

      navigate("/success");
    } catch {
      setError(err.message);
      toast.error(err.message);
    }
  };

  return (
    <div className=" h-screen px-4  space-y-[24px] ">
      <div>
        <Toaster />
      </div>

      <div>
        <h1 className="text-[2rem] leading-[40px] font-semibold font-inter">
          Login to your account.
        </h1>
        <p className="text-textgray leading-[20px]  mt-[8px]">
          Please sign in to your account{" "}
        </p>
      </div>
      <form
        onSubmit={handleLogin}
        className="mt-[2rem] flex flex-col space-y-[14px] "
      >
        <div className="flex flex-col  ">
          <label className="font-medium">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-4 mt-[8px] bg-white rounded-lg  border-2 border-inputborder text-black"
            placeholder="Email Adress"
          />
        </div>
        <div className="flex flex-col ">
          <label className="font-medium">Password</label>
          <div className="flex mt-[8px] grow rounded-lg border-2 border-inputborder ">
            <input
              type={hide ? "password" : "text"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-4  bg-white outline-none  rounded-lg w-full text-black"
              placeholder="Password"
            />
            <div
              className="flex justify-center items-center  px-2"
              onClick={() => {
                setHide((p) => !p);
              }}
            >
              {hide ? (
                <HiOutlineEyeOff size={20} />
              ) : (
                <HiOutlineEye size={20} />
              )}
            </div>
          </div>
          <p className="text-right text-small my-[24px] font-medium text-primary">
            Forget password ?
          </p>
        </div>
        <button
          type="submit"
          className="bg-primary rounded-full py-4 text-white font-bold"
        >
          Sign in
        </button>
        {error && <p>{error}</p>}
      </form>
      <div className="flex justify-between items-center">
        <div className="border-textgray w-[99.5px] border-[0.5px] "></div>
        <p className="text-textgray font-medium text-small">Or sign in with</p>
        <div className="border-textgray w-[99.5px] border-[0.5px] "></div>
      </div>
      <div
        className="flex justify-center items-center w-full "
        onClick={handelGoogleLogin}
      >
        <img
          src={Google}
          alt="GoogleAuth"
          className="w-[40px] rounded-full border-[1px]  border-gray"
        />
      </div>
      <div>
        <p className="text-center font-medium">
          Don't have an account?{" "}
          <span
            className="text-primary "
            onClick={() => {
              navigate("/signup");
            }}
          >
            Register
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
