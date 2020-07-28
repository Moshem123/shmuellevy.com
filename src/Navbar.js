import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    "header header header"
    "hdivider hdivider hdivider"
    "sideimg content content"
    "footer footer footer";
  // grid-template-rows: 80vh;
  grid-gap: 1rem;
  align-items: stretch;
  align-content: space-evenly;

  font-family: sans-serif;
  justify-content: center;
`;

const VDivider = styled.div`
  border-left: 1px solid #38546d;
  width: 1px;
  right: 250px;
  top: 10px;
`;

const HDivider = styled.div`
  grid-area: hdivider;
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

const Footer = styled.footer`
  grid-area: footer;
  align-self: stretch;
  text-align: center;
`;

const Navbar = styled.ul`
  grid-area: header;
  display: flex;
  flex-flow: row wrap;
  list-style-type: none;
  margin-top: 1em;
  justify-content: space-evenly;

  & li {
    padding: 0.2rem 2.3rem;
    height: 100%;
  }
  & > div:last-of-type {
    display: none;
  }
`;

const Content = styled.div`
  grid-area: content;
`;

const SideImg = styled.div`
  grid-area: sideimg;
`;

export { Wrapper, VDivider, HDivider, Footer, Navbar, Content, SideImg };
