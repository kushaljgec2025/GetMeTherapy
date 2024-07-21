import React from "react";
import { getAuth } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase/firebase";

function Tackling() {
  const user = useSelector((state) => state.auth.user);

  return <div>{user?.email}</div>;
}

export default Tackling;
