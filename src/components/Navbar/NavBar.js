import React from "react";
import "./NavBar.css"; // Import your CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="profile">
        <div className="profile-sections">
          <div className="section">
            <span>FAQ</span>
          </div>
          <div className="section">
            <span>feedback</span>
          </div>
          <div className="section">bell</div>
        </div>
        <div className="profile_sections_layout">
          <img style={{ borderRadius: "50%" }} src="./cup.png" alt="profile" />
          <span>siddarth jain</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
