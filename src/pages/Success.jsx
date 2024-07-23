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
      <div className=" fixed w-[375px] h-[492px]  bg-white rounded-t-[24px] bottom-0 p-4 flex flex-col items-center justify-center">
        <div className="w-[58.13px] h-[4px] absolute top-[10px] bg-gray rounded-full "></div>
        <div>
          <img src={success} alt="sucess" className="h-[168px]" />
        </div>
        <h1 className="text-3xl font-bold my-[2rem]">Login Successful</h1>

        <button
          className="bg-primary rounded-full p-[1rem] w-[312px] h-[52px] text-white font-bold "
          onClick={() => {
            navigate("/tackling");
          }}
        >
          Go to Tackling Page
        </button>

        <button
          className="text-small text-textgray font-medium my-[22px]  "
          onClick={handelLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Success;
