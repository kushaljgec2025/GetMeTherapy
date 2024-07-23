// Signup.js
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../../firebase/firebase"; // Adjust the path as needed
import { signInWithPopup } from "firebase/auth";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import Google from "../assets/img/googleicon.png";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineHorizontalRule } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../redux/auth/authslice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [hide, setHide] = useState(true);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        username
      );
      const user = userCredential.user;
      console.log(user);
      const userData = {
        uid: user.uid,
        email: user.email,
        emailVerified: user.emailVerified,
        accessToken: user.accessToken,
      };
      toast.success("Created Account Successfully");
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
      toast.success("Created Account Successfully");
      dispatch(login(userData));
      setTimeout(() => {
        navigate("/success");
      }, 1000);
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
          Create your new account
        </h1>
        <p className="text-textgray leading-[20px] mt-[8px]">
          Create an account to start looking for the food you like
        </p>
      </div>
      <form
        onSubmit={handleSignup}
        className="mt-[2rem] flex flex-col space-y-[14px] "
      >
        <div className="flex flex-col  ">
          <label className="font-medium">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="p-4 mt-[8px] bg-white rounded-lg outline-none border-2 border-inputborder text-black"
            placeholder="Email Adress"
          />
        </div>
        <div className="flex flex-col  ">
          <label className="font-medium">User Name</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="p-4 mt-[8px] bg-white rounded-lg outline-none border-2 border-inputborder text-black"
            placeholder="UserName"
          />
        </div>
        <div className="flex flex-col  ">
          <label className="font-medium">Password</label>
          <div className="flex mt-[8px] grow rounded-lg border-2  border-inputborder ">
            <input
              type={hide ? "password" : "text"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="p-4  bg-white outline-none rounded-lg  w-full text-black"
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
        </div>
        <div className="flex flex-row items-start justify-center gap-[0.5rem]">
          <input
            type="checkbox"
            value=""
            className="relative peer w-[20px] h-[20px] appearance-none border-2 border-primary rounded-md checked:bg-primary checked:border-primary focus:outline-none"
          />
          <style jsx>{`
            input[type="checkbox"]:checked::after {
              content: "✓"; /* Unicode for checkmark */
              display: block;
              color: white;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              font-size: 16px;
            }
          `}</style>
          <p className=" text-small  font-medium  ">
            I Agree with <span className="text-primary">Terms of Service</span>{" "}
            and <span className="text-primary"> Privacy Policy </span>
          </p>
        </div>
        <button
          type="submit"
          className="bg-primary rounded-full py-4 text-white font-bold"
        >
          Register
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
      <div className="py-4">
        <p className="text-center font-medium">
          Don't have an account?{" "}
          <span
            className="text-primary "
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
