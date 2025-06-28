import React from "react";
import PropTypes from "prop-types";
// import { useState } from "react";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const getNavbarClass = () => {
    if (props.mode === "dark") return "navbar-dark bg-dark";
    else if (props.mode2 === "red") return "navbar-light bg-danger";
    else return "navbar-light bg-light";
  };

  return (
    <nav className={`navbar navbar-expand-lg ${getNavbarClass()}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {/* <Link className="navbar-brand" to="/"> */}
          Text Utils
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              {/* <Link className="nav-link active" aria-current="page" to="/"> */}
              {props.home}
            </a>
            {/* <Link className="nav-link" to="/">
              {props.features}
            </Link> */}
            {/* <a className="nav-link" href="#"> */}
            {/* <Link className="nav-link" to="/about"> */}
            {/* About */}
            {/* </a> */}
          </div>
        </div>
      </div>
      <div
        className={`form-check form-switch ${
          props.mode2 === "red" ? "light" : "red"
        }`}
      >
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="redModeSwitch"
          onClick={props.toggleMode2}
        />
        <label
          style={{
            marginRight: "50px",
            whiteSpace: "nowrap",
            // marginTop: "12px",
          }}
          className="form-check-label"
          htmlFor="redModeSwitch"
        >
          Enable RedMode
        </label>
      </div>
      <div
        className={`form-check form-switch mt-4 text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
      >
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="switchCheckDefault"
          onClick={props.toogleMode}
        />

        <label
          style={{ marginRight: "25px", whiteSpace: "nowrap" }}
          className="form-check-label"
          htmlFor="switchCheckDefault"
        >
          Enable {capitalizeFirstLetter(props.mode)}Mode
        </label>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  home: PropTypes.string.isRequired,
  features: PropTypes.string,
};

Navbar.defaultProps = {
  home: "Home",
  features: "Features",
};
