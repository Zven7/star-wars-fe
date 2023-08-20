import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DrawerComponent from "./Drawer";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "var(--primary-background)",
          marginBottom: "20px",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "var(--max-width)",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              gap: "3px",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                  userSelect: "none",
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  color="var(--text-primary)"
                >
                  Star Wars Z7
                </Typography>
              </Box>
            </Link>
          </Box>
          <DrawerComponent />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
