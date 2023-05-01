import React from "react";
import { Route } from "react-router-dom";
import DashBoard from "../componnets/dashboard";
import Downloads from "../componnets/Downloads";
import SideBar from "../componnets/SideBar";
const Profile = () => {
  return (
    <>
      <h2 style={{ margin: "20px" }}>welcame back dear mahtab!</h2>

      <div className="sideBar">
        <SideBar />
        <Route path="/Profile/dashboard" component={DashBoard} />
        <Route path="/profile/downloads" component={Downloads} />
      </div>
    </>
  );
};

export default Profile;
