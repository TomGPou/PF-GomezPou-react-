import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./components/common/themeConfig/themeconfig";
import AppRouter from "./router/AppRouter";
import CartContextComponent from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={customTheme}>
        <CartContextComponent>
          <AppRouter />
        </CartContextComponent>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
