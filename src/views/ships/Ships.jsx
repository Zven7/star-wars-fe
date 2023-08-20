import { CircularProgress, Typography, Box } from "@mui/material";
import ShipCard from "../../components/ShipCard";
import { useGetAllShips } from "../../hooks/Ships";

const CONTAINER_SX = {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
};

function Ships() {
  const { ships, isLoading, isError } = useGetAllShips();

  if (isError) return <Typography>{isError}</Typography>;
  if (isLoading) return <CircularProgress />;
  return (
    <Box sx={CONTAINER_SX}>
      {ships?.results.map((ship) => (
        <ShipCard key={ship.title} ship={ship} loading={isLoading} />
      ))}
    </Box>
  );
}

export default Ships;
