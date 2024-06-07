import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
// import ErrorElement from "../components/ErrorElement";

function HomeLayout() {
  return (
    <>
      <nav className="text-4xl text-primary">
        <Navbar />
        <section className="align-element py-20">
          <Outlet />
        </section>
      </nav>
    </>
  );
}

export default HomeLayout;
