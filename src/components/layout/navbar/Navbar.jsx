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

const categories = [
  "Todos los productos",
  "Remeras",
  "Ropa interior - Mujer",
  "Ropa interior - Hombre",
  "Medias",
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container
        sx={{
          height: "20vh",
          display: "flex",
          justifyContent: "center",
          py: 1,
        }}
      >
        <a href="./index.html">
          <img
            src="https://res.cloudinary.com/dp81n6kpr/image/upload/v1695581351/Blessed/logo_sn0uh8.png"
            alt="logo"
            style={{ height: "100%", width: "auto" }}
          />
        </a>
      </Container>
      <Container
        maxWidth="false"
        sx={{
          background: customTheme.palette.primary.dark,
          width: "100%",
        }}
      >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="./index.html"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#5e565a",
              textDecoration: "none",
            }}
          >
            BLESSED
          </Typography>

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
              {categories.map((category) => (
                <MenuItem key={category} onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{ color: customTheme.palette.dark.main }}
                    textAlign="center"
                  >
                    {category}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="./index.html"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#5e565a",
              textDecoration: "none",
            }}
          >
            BLESSED
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {categories.map((category) => (
              <Button
                color="dark"
                key={category}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
              >
                {category}
              </Button>
            ))}
          </Box>

          <CartWidget />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
