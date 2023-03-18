import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React from "react";
import '../style/header.css';

const styles = {
  navbar: {
    backgroundColor: "black",
  },
  navbarA: {
    color: "white",
    fontSize: "19px",
  },
  h1: {
    color: "white",
    fontSize: "50px",
  },
  padding: {
    padding: "8px",
  }
};

function Header({ currentPage, handlePageChange }) {
  return (

    <nav style={styles.navbar}>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
      <header className="nav justify-content-center">
        <h1 style={styles.h1}>Michael Fomin</h1>
      </header>
      <ul style={styles.navbarA} className="nav justify-content-center">
        <li style={styles.padding} className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link-active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li style={styles.padding}  className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link-active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li style={styles.padding} className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link-active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
        <li style={styles.padding} className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link-active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;