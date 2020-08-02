import React from "react";
import pages from "./data/pages";
import "./styles/navbar.scss";

function Navbar({ children }) {
  return (
    <>
      <div className="full-menu">
        <ul>
          {pages.map((el, index) => (
            <div key={`${index}-m`}>
              <li key={index}>
                <a href="/" className="menu-link">
                  {el}
                </a>
              </li>
              <div key={`${index}-d`} className="vertical-divider" />
            </div>
          ))}
        </ul>
      </div>
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                {pages.map((el, index) => (
                  <li key={index}>
                    <a href="/" className="menu-link">
                      {el}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
