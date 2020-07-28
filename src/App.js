import React from "react";
import styled from "styled-components";
import {
  Wrapper,
  VDivider,
  HDivider,
  Footer,
  Navbar,
  Content,
  SideImg,
} from "./Navbar";

function App() {
  const pages = ["page 1", "page 2", "page 3", "page 4"];
  return (
    <Wrapper>
      <Navbar>
        {pages.map((e, i) => {
          return (
            <>
              <li>{e}</li>
              <VDivider />
            </>
          );
        })}
      </Navbar>
      <HDivider />
      <Content>
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
      </Content>
      <SideImg>image here</SideImg>
      <Footer>this is a footer</Footer>
    </Wrapper>
  );
}

export default App;
