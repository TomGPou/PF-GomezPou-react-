import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CartWidget from "../../common/cartWidget/CartWidget";
import { customTheme } from "../../common/themeConfig/themeconfig";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { useEffect, useState } from "react";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let categoriesCollection = collection(db, "categories");

    getDocs(categoriesCollection)
      .then((res) => {
        let arrayCategories = res.docs.map((category) => {
          return { ...category.data(), id: category.id };
        });
        setCategories(arrayCategories);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <AppBar position="sticky">
        <Container
          sx={{
            height: "15vh",
            display: "flex",
            justifyContent: "center",
            py: 1,
          }}
        >
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dp81n6kpr/image/upload/v1695581351/Blessed/logo_sn0uh8.png"
              alt="logo"
              style={{ height: "100%", width: "auto" }}
            />
          </Link>
        </Container>
        <Container
          maxWidth="false"
          sx={{
            background: customTheme.palette.primary.dark,
            width: "100%",
          }}
        >
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="dark"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/">
                    <Typography
                      sx={{
                        color: customTheme.palette.dark.main,
                        textDecoration: "none",
                      }}
                    >
                      Todos los Productos
                    </Typography>
                  </Link>
                </MenuItem>

                {categories.map((category) => {
                  return (
                    <MenuItem key={category.id} onClick={handleCloseNavMenu}>
                      <Link to={category.path}>
                        <Typography
                          sx={{
                            color: customTheme.palette.dark.main,
                            textDecoration: "none",
                          }}
                        >
                          {category.name}
                        </Typography>
                      </Link>
                    </MenuItem>
                  );
                })}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                color="dark"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
              >
                <Link to="/">Todos los productos</Link>
              </Button>
              {categories.map((category) => {
                return (
                  <Button
                    key={category.id}
                    color="dark"
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, display: "block" }}
                  >
                    <Link to={category.path}>{category.name}</Link>
                  </Button>
                );
              })}
            </Box>

            <Link to="/cart">
              <CartWidget />
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;
