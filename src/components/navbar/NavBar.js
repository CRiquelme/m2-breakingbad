import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">
        Home
      </Link>
      <Link to="/characters">
        Characters
      </Link>
      <Link to="/episodes">
        Episodes
      </Link>
    </nav>
  );
}

export default NavBar;
