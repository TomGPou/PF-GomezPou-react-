import { ThemeProvider } from "@emotion/react";
import { customTheme } from "./components/common/themeConfig/themeconfig";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/pages/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer />
    </ThemeProvider>
  );
}

export default App;
