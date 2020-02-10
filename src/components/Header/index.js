import React from "react";
import { FaUserCircle } from "react-icons/fa";

import logo from "../../assets/facebook-1.png";

import "./App.css";

export default function Header() {
  return (
    <header className="header">
      <h2>
        <img src={logo} />
      </h2>
      <div className="profile">
        <strong>Meu perfil</strong>
        <FaUserCircle size={20} color="#fff" />
      </div>
    </header>
  );
}
