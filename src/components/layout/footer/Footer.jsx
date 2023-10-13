import { Container, Typography } from "@mui/material";
import { customTheme } from "../../common/themeConfig/themeconfig";

const Footer = () => {
  return (
    <Container
      maxWidth="false"
      sx={{
        height: "5vh",
        backgroundColor: customTheme.palette.primary.main,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="body-md"> Copyright 2023</Typography>
    </Container>
  );
};

export default Footer;
