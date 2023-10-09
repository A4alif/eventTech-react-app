import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Booking from "../pages/Booking/Booking";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/booking",
        element: <PrivateRoute><Booking /></PrivateRoute>,
      },
      {
        path: "/servicedetails/:id",
        element: <PrivateRoute><ServiceDetails /></PrivateRoute>,
        loader: () => fetch("/event.json")
      },
      {
        path: "/about",
        element: <PrivateRoute><About /></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
    ],
  },
]);

export default router;
