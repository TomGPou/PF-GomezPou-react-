import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./components/common/themeConfig/themeconfig";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
