import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 80vw;
  // justify-content: center;
  margin: 0 auto;
  & > * {
    width: 80%;
  }
`;

const VDivider = styled.div`
  border-left: 1px solid #38546d;
  width: 1px;
  right: 250px;
  top: 10px;
`;

const HDivider = styled.div`
  margin: 0.5em 0 1em 0;
  top: 0;
  left: 5%;
  right: 5%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    transparent,
    rgb(48, 49, 51),
    transparent
  );
`;

const Footer = styled.footer`
  align-self: stretch;
  text-align: center;
`;

const Navbar = styled.ul`
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

const NavItem = styled.li`
  cursor: pointer;
  color: rgb(0 0 0 / 65%);
  transition: color 0.3s ease;
  &:hover {
    color: #000;
  }
`;

const Content = styled.div`
  padding: 1em;
`;

const SideImg = styled.div``;

export {
  Wrapper,
  VDivider,
  HDivider,
  Footer,
  Navbar,
  NavItem,
  Content,
  SideImg,
};
