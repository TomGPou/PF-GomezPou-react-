import * as React from "react";
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

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  let categories = [
    {
      id: 1,
      name: "Todos los productos",
      path: "/",
    },
    {
      id: 2,
      name: "Remeras",
      path: "/category/remeras",
    },
    {
      id: 3,
      name: "Ropa interior - Mujer",
      path: "/category/ropaInteriorMujer",
    },
    {
      id: 4,
      name: "Ropa interior - Hombre",
      path: "/category/ropaInteriorHombre",
    },
    {
      id: 5,
      name: "Medias",
      path: "/category/medias",
    },
  ];

  // const [categories, setCategories] = React.useState([]);

  // React.useEffect(() => {
  //   let categoriesCollection = collection(db, "categories");

  //   getDocs(categoriesCollection).then((res) => {
  //     let categoriesDb = res.docs.map((category) => {
  //       return { ...category.data(), id: category.id };
  //     });
  //     setCategories(categoriesDb);
  //   });
  // }, []);

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
