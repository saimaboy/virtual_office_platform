import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dashboard from "../../components/Dashboard/Dashboard";
import Emptybox from "../../components/Emptybox/Emptybox";
import FooterBox from "../../components/FooterBox/FooterBox";

const Members = () => {
  return (
    <div className="bg-slate-800 ">
      <Navbar />
    
      <div className="flex">
     
        <Sidebar />

        <div className="pl-3">
          <Dashboard />
        </div>
        <Emptybox />
       
      </div>
      <FooterBox />
    </div>
  );
};

export default Members;
