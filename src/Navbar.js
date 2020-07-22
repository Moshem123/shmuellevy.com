import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const NavWrapper = styled.ul`
  list-style-type: none;

  display: inline-flex;
  flex-flow: row wrap;
  justify-content: center;
  padding-bottom: 2px;
  margin-top: 4%;

  & li:not(:last-of-type) {
    border-right: 1px solid black;
  }

  & li {
    padding: 0.5rem 3rem;
  }
`;

const Divider = styled.div`
  position: relative;
  height: 1px;
  margin-top: 15px;
  flex-basis: 100%;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 5%;
    right: 5%;
    width: 90%;
    height: 1px;
    background-image: linear-gradient(
      to right,
      transparent,
      rgb(48, 49, 51),
      transparent
    );
  }
`;

function Navbar(props) {
  return (
    <Wrapper>
      <NavWrapper>
        {props.pages.map((e, i) => {
          return <li>{e}</li>;
        })}
      </NavWrapper>
      <Divider />
    </Wrapper>
  );
}

export default Navbar;
