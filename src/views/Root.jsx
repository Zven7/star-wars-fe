import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MAIN_CONTAINER_SX = {
  margin: "auto",
  width: "80%",
};

function Root() {
  return (
    <Box>
      <Navbar />
      <Box sx={MAIN_CONTAINER_SX}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Root;
