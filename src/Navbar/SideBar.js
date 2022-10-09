import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="searchbox">
        <input
          type="text"
          placeholder="Search with Search Bar"
          className="searchbox1"
        ></input>
      </div>
      <Link to="/Home">
        <p>Home</p>
      </Link>
      <Link to="/About">
        <p>AboutUs</p>
      </Link>
      <Link to="/Work">
        <p>OurWork</p>
      </Link>

      <Link to="/Contact">
        <p>ContactUs</p>
      </Link>
    </div>
  );
};

export default SideBar;
