import React from "react";
import "./Header.css";
import HeaderCartBtn from "./HearderCartBtn";

function Header(props) {
  return (
    <header className="header">
        <nav className="nav_bar">
          <h1>The Candy Shop</h1>
          <HeaderCartBtn/>
        </nav>
    </header>
  );
}

export default Header;
