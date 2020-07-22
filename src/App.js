import React from "react";
import styled from "styled-components";

import NavbarItem from "./Navbar";

const Header = styled.div`
  cursor: pointer;
  font-family: sans-serif;
`;

function App() {
  return (
    <Header>
      <NavbarItem pages={["page1", "page2", "page3"]} />
    </Header>
  );
}

export default App;
