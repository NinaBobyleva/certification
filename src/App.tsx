import { AppRoutes } from "./AppRoutes.tsx";
import { GlobalStyle } from "./globalStyle.styled.ts";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
// import dotenv from 'dotenv';

// dotenv.config();

function App() {
  return (
    <>
      <Theme preset={presetGpnDefault}>
        <GlobalStyle />
        <AppRoutes />
      </Theme>
    </>
  );
}

export default App;
