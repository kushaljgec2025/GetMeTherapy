// Login.js
import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/firebase"; // Adjust the path as needed
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
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
      setTimeout(() => {
        navigate("/success");
      }, 1000);
    } catch {
      setError(err.message);
      toast.error(err.message);
    }
  };

  return (
    <div className=" h-screen px-4 py-6">
      <div>
        <Toaster />
      </div>
      <div>
        <h1 className="text-5xl font-bold font-inter">
          Login to your account.
        </h1>
        <p className="text-gray">Please sign in to your account </p>
      </div>
      <form onSubmit={handleLogin} className="my-4 flex flex-col space-y-4 ">
        <div className="flex flex-col  space-y-2">
          <label>Email Adress:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-2 py-4 bg-white rounded-lg border-2 border-gray text-black"
            placeholder="Email Adress"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label>Password:</label>
          <div className="flex grow ">
            <input
              type={hide ? "password" : "text"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="px-2 py-4 bg-white rounded-lg border-2 border-gray w-full text-black"
              placeholder="Password"
            />
            <div
              className="flex justify-center items-center  px-2"
              onClick={() => {
                setHide((p) => !p);
              }}
            >
              {hide ? <FaEyeSlash size={32} /> : <FaEye size={32} />}
            </div>
          </div>
          <p className="text-right text-primary">Forget password ?</p>
        </div>
        <button
          type="submit"
          className="bg-primary rounded-full py-4 text-white font-bold"
        >
          Log in
        </button>
        {error && <p>{error}</p>}
      </form>
      <div className="flex justify-between items-center">
        <div className="bg-gray w-[28vw] h-[1px] "></div>
        <p className="text-gray">Or sign in with</p>
        <div className="bg-gray w-[28vw] h-[1px] "></div>
      </div>
      <div
        className="flex justify-center items-center w-full my-4"
        onClick={handelGoogleLogin}
      >
        <img
          src={Google}
          alt="GoogleAuth"
          className="w-20 rounded-full shadow-lg"
        />
      </div>
      <div>
        <p className="text-center text-gray">
          Don't have an account?{" "}
          <span
            className="text-primary"
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
