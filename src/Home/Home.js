import React from "react";
import SideBar from "../Navbar/SideBar.js";
import Cards from "../Cards/Cards.js";
import "./Home.css"

const Home = () => {
  return (
    <>
      <div className="homepage">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="sidehomecontainer">
            <Cards/>
        </div>
      </div>
    </>
  );
};

export default Home;
