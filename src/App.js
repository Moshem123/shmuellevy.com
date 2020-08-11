import React from "react";
import MainGallery from "./MainGallery";
import Header from "./Header";

import "./styles/main.scss";

import content from "./data/main-content";

function App() {
  return (
    <div className="main-wrapper">
      <Header />
      <hr />
      <section className="main-body">
        <MainGallery />
        <div className="main-content">
          {content.map((e, i) =>
            React.isValidElement(e) ? e : <p key={i}>{e}</p>
          )}
        </div>
      </section>
      <footer>this is a footer</footer>
    </div>
  );
}

export default App;
