import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/main/Header";
import Footer from "../components/main/Footer";

const Mainlayout = ({ faction }) => {
  return (
    <>
      <Header faction={faction} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Mainlayout;
