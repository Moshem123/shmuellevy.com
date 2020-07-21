import React from 'react';
import styled from 'styled-components';

const Header = styled.h1`
  color: blue;
  text-decoration: underline;
  cursor: pointer;
  font-family: sans-serif;
`

function App() {
  return (
    <Header>
      Hello World!
    </Header>
  );
}

export default App;
