import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../logo.png";

const Header = props => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link
          to={`${process.env.PUBLIC_URL}/`}
          className="navbar-brand"
          style={{ backgroundImage: logo }}
        />
        <div className="navbar-title">
          Bonfire Adventures &nbsp;
          <span className="title subhead">| Tours Explorer</span>
        </div>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-right ">
          <li>
            <Link className="nav-item" to={`${process.env.PUBLIC_URL}/`}>
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-item" to={`${process.env.PUBLIC_URL}/about`}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
