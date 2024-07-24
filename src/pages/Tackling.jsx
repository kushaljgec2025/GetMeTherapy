import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/auth/authslice";
import logo from "../assets/img/favicon.png";
import AnalogClock from "../components/AnalogClock";
import Quote from "../components/Quote";

function Tackling() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="w-[100vw]">
      <div className="shadow-xl p-2 z-10 flex justify-between items-center ">
        <div>
          <div className="flex justify-center items-center ">
            <img src={logo} alt="logo" className="w-10" />
            <span className="text-xl font-bold">GetMeTherapy</span>
          </div>
        </div>
        <div className="flex justify-between">
          {!user && (
            <Link
              to="/login"
              className="bg-primary px-4 py-2 flex justify-center items-center text-white rounded-full"
            >
              Login
            </Link>
          )}
          {user && (
            <button
              onClick={handleLogout}
              className="bg-primary p- flex justify-center items-center text-white rounded-full"
            >
              Logout
            </button>
          )}
        </div>
      </div>
      <div className=" ">
        <AnalogClock />
        <Quote />
      </div>
    </div>
  );
}

export default Tackling;
