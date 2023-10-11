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
    <>
      <AppBar position="static">
        <Container
          sx={{
            height: "20vh",
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
            <Typography
              variant="h6"
              noWrap
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
              <Link to="/">BLESSED</Link>
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
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{ color: customTheme.palette.dark.main }}
                    textAlign="center"
                  >
                    <Link to="/">Todos los productos</Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{ color: customTheme.palette.dark.main }}
                    textAlign="center"
                  >
                    <Link to="/category/remeras">Remeras</Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{ color: customTheme.palette.dark.main }}
                    textAlign="center"
                  >
                    <Link to="/category/ropaInteriorMujer">
                      Ropa Interior - Mujer
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{ color: customTheme.palette.dark.main }}
                    textAlign="center"
                  >
                    Ropa Interior - Hombre
                    <Link to="/category/ropaInteriorHombre"></Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{ color: customTheme.palette.dark.main }}
                    textAlign="center"
                  >
                    <Link to="/category/medias">Medias</Link>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
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
              <Link to="/">BLESSED</Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                color="dark"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
              >
                <Link to="/">Todos los productos</Link>
              </Button>
              <Button
                color="dark"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
              >
                <Link to="/category/remeras">Remeras</Link>
              </Button>
              <Button
                color="dark"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
              >
                <Link to="/category/ropaInteriorMujer">
                  Ropa interior - Mujer
                </Link>
              </Button>
              <Button
                color="dark"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
              >
                <Link to="/category/ropaInteriorHombre">
                  Ropa Interior Hombre
                </Link>
              </Button>
              <Button
                color="dark"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: "block" }}
              >
                <Link to="/category/medias">Medias</Link>
              </Button>
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
