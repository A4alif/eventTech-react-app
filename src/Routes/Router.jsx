import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/servicedetails/:id",
        element: <ServiceDetails />,
        loader: () => fetch("/event.json")
      },
      {
        path: "/contact",
        element: <Contact />,
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
