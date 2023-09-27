import { styled, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/globalStyle";
import { theme } from "./style/theme.js";

import { Outlet } from "react-router-dom";

const BackGroundColor = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 420px;

  overflow-y: scroll;
`;

const Layout = () => {
  return (
    <BackGroundColor>
      <Wrapper>
        <Outlet />
      </Wrapper>
    </BackGroundColor>
  );
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </>
  );
}

export default App;
