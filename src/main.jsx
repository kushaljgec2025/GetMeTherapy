import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Provider } from "react-redux";
import { store } from "../redux/store"; // Adjust the path as needed
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tackling from "./pages/Tackling";
import Success from "./pages/Success";

// Define the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/tackling",
    element: <Tackling />,
  },
  {
    path: "/success",
    element: <Success />,
  },
]);

// Render the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
