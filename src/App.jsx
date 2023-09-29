import { ThemeProvider } from "@emotion/react";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import { customTheme } from "./components/common/themeConfig/themeconfig";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Navbar />
      <ItemListContainer greeting={"Bienvenido a BLESSED"} />
    </ThemeProvider>
  );
}

export default App;
