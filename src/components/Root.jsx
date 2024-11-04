import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import ProfileAnimation from "./ProfileAnimation";

const Root = () => {
  return (
    <div className="lg:w-4/5 mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <ProfileAnimation></ProfileAnimation>
    </div>
  );
};

export default Root;
