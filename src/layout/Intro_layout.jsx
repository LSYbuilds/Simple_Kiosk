import React from "react";
import { Outlet } from "react-router-dom";

const Introlayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Introlayout;
