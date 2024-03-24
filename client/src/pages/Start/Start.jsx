import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dashboard from "../../components/Dashboard/Dashboard";
import FooterBox from "../../components/FooterBox/FooterBox";

const Start = () => {
  return (
    <div className="bg-slate-800">
      <Navbar />
    
      <div className="flex">
        <Sidebar />
        <Dashboard />
      </div>
      <FooterBox />
    </div>
  );
};

export default Start;
