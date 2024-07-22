import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/auth/authslice";
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
      <div className="shadow-xl p-2 z-10 flex justify-around">
        <div>
          <h1 className="text-4xl font-bold">Welcome</h1>
          <span className="text-sm text-green-500">{user?.email}</span>
        </div>
        {!user && (
          <Link
            to="/login"
            className="bg-primary px-6 flex justify-center items-center text-white rounded-full"
          >
            Login
          </Link>
        )}
        {user && (
          <button
            onClick={handleLogout}
            className="bg-primary px-6 text-white z-10 rounded-full"
          >
            Logout
          </button>
        )}
      </div>
      <AnalogClock />
      <Quote />
    </div>
  );
}

export default Tackling;
