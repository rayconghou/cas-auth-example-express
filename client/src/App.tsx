import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";
import SWELogo from "./assets/logo.png";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Description>
          <Logo src={SWELogo} alt="swe-logo" />
          <TitleText>CAS Auth Example</TitleText>
          <Text>
            This is the official CAS authentication example for Software
            Engineering at Yale University (CPSC 439/539). CAS authentication
            allows you to authenticate against Yale's auth server. This allows
            you to have users sign in with their netid's.
          </Text>
        </Description>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #121212;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 120px;
`;

const Description = styled.div`
  width: 600px;
  margin-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: top;
  text-align: center;
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
`;

const TitleText = styled.h1`
  color: #ffffff;
`;

const Text = styled.p`
  color: #ffffff;
`;

export default App;
