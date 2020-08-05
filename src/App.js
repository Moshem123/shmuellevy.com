import React from "react";
import MainGallery from "./MainGallery";
import Navbar from "./Navbar";

import "./styles/main.scss";

import logo from "./logo.jpg";

function App() {
  return (
    <div className="main-wrapper">
      {/* <Logo alt="Shmuel Levy" src={logo} /> */}
      <header>
        <img src={logo} className="logo" alt="Shmuel Levy" />
        <Navbar />
      </header>
      {/* <div className="horizontal-divider" /> */}
      <hr />
      <MainGallery />
      <div className="main-content">
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <footer>this is a footer</footer>
    </div>
  );
}

export default App;
