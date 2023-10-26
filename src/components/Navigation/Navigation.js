import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { FiBarChart2, FiAward } from "react-icons/fi";
import { GrDocument } from "react-icons/gr";
import { useLocation } from "react-router-dom";
const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <ul>
        <li className="navBar">
          <Link
            to="/dashboard"
            className={`${
              pathname === "/dashboard" ? "active" : ""
            } navDecoration`}
          >
            <FiBarChart2 /> DashBoard
          </Link>
        </li>
        <li className="navBar">
          <Link
            to="/"
            className={`${pathname === "/" ? "active" : ""} navDecoration`}
          >
            <FiAward /> Skill test
          </Link>
        </li>
        <li className="navBar">
          <Link
            to="/internships"
            className={`${
              pathname === "/internships" ? "active" : ""
            } navDecoration`}
          >
            <GrDocument /> Internships
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
