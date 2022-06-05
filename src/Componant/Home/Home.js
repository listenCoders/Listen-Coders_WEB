import React from "react";
import TopNav from "../NavItem/TopNav/TopNav";
import Countdown from "../Countdown/Countdown";
import "./Home.css";
import LeaderBoard from "../leaderBoard/leaderBoard";
import { Route, Routes } from "react-router-dom";

const componentName = () => {
  return (
    <div>
      <TopNav />
      <br />
      <Routes>
        <Route path="/" element={<Countdown />} />
        <Route path="/leaderBoard" element={<LeaderBoard />} />          
      </Routes>
      <hr />
    </div>
  );
};

export default componentName;
