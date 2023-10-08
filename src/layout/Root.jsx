import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <>
      <header className="bg-gray-200">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Root;
