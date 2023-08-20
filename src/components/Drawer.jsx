import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";
import { LINK_SX } from "../styles";

const DRAWER_STYLES = {
  width: { xs: "70vw", md: "30vw" },
  maxWidth: "350px",
  color: "white",
};

function DrawerComponent() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (drawerState) => {
    setOpen(drawerState);
  };

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ padding: 0 }}
        onClick={() => toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor={"left"} open={open} onClose={() => toggleDrawer(false)}>
        <Box sx={DRAWER_STYLES}>
          <Box sx={{ display: "flex", marginBottom: "15px" }}>
            <Typography fontWeight={600}>Star Wars Z7</Typography>
          </Box>
          <Divider
            key={"Divider 1"}
            sx={{
              color: "var(--main-color)",
              backgroundColor: "var(--main-color)",
              height: "3px",
            }}
          />
          <Box
            sx={{
              marginBottom: "50px",
              marginTop: "35px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {ROUTES.map((route) => (
              <Typography
                key={route.name}
                fontWeight={500}
                component={Link}
                to={route.link}
                onClick={() => toggleDrawer(false)}
                style={LINK_SX}
              >
                {route.name}
              </Typography>
            ))}
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default DrawerComponent;
