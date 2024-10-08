import { AppRoutes } from "./AppRoutes.tsx";
import { GlobalStyle } from "./globalStyle.styled.ts";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";

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
