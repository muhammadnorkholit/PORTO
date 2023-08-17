import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <a className="navbar-brand">MORTO</a>
        <div className="" style={{ display: "flex" }}>
          <div className="theme mobile mode" id="mode">
            <i className="fa fa-moon dark"></i>
            <i className="fa fa-sun light"></i>
          </div>
          <button
            id="toggle"
            data-toggle="collapse"
            className="navbar-toggle"
            data-target="#navbar"
          >
            <i className="fa fa-bars"></i>
          </button>
        </div>
        <div className="nav-menu" id="navbar">
          <ul className="nav-items">
            <li className="nav-item ">
              <Link to={"/"} className="nav-link active ">
                Beranda
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Tentang Saya
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Portofolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Kontak Saya
              </Link>
            </li>
          </ul>
        </div>
        <button className="theme desktop mode" id="mode">
          <i className="fa fa-moon dark"></i>
          <i className="fa fa-sun light"></i>
        </button>
      </div>
    </nav>
  );
}
