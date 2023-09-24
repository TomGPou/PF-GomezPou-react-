import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import CartWidget from "../../common/cartWidget/CartWidget";
import { customTheme } from "../../common/themeConfig/themeconfig";

const pages = [
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
      <Box
        color="primary"
        sx={{ height: "20vh", display: "flex", justifyContent: "center", p: 1 }}
      >
        <a href="./index.html">
          <img
            src="https://res.cloudinary.com/dp81n6kpr/image/upload/v1695581351/Blessed/logo_sn0uh8.png"
            alt="logo"
            style={{ height: "100%", width: "auto" }}
          />
        </a>
      </Box>
      <Container
        maxWidth="xl"
        sx={{ background: customTheme.palette.primary.dark }}
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{ color: customTheme.palette.dark.main }}
                    textAlign="center"
                  >
                    {page}
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
            {pages.map((page) => (
              <Button
                color="dark"
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
              >
                {page}
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
