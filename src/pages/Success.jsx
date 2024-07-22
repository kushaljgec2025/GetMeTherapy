import { useState, useEffect } from "react";
import landing1 from "../assets/img/land1.png";
import success from "../assets/img/success.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authslice";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";

function Success() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const handelLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div className="flex justify-center items-center w-[100vw] ">
      <img
        src={landing1}
        alt="landing1"
        className="h-screen w-[100vw] object-cover"
      />
      <div className=" fixed w-[90vw] h-[60vh] space-y-2 bg-gradient-to-tr from-70% from-white to-gray rounded-t-[64px] bottom-0 p-4 flex flex-col items-center justify-center">
        <div>
          <img src={success} alt="" />
        </div>
        <h1 className="text-3xl font-bold my-2">Login Successful</h1>
        <p className="text-green-500">{user?.email || "user not found"}</p>

        <button
          className="bg-primary rounded-full py-4  text-white font-bold px-8"
          onClick={() => {
            navigate("/tackling");
          }}
        >
          Go to Tackling Page
        </button>

        <button
          className="bg-gray  rounded-full py-4  text-white font-bold px-8 "
          onClick={handelLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Success;
