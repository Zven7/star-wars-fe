import { CircularProgress, Typography, Box } from "@mui/material";
import PlanetCard from "../../components/PlanetCard";
import { useGetAllPlanets } from "../../hooks/Planets";

const CONTAINER_SX = {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
};

function Planets() {
  const { planets, isLoading, isError } = useGetAllPlanets();

  if (isError) return <Typography>{isError}</Typography>;
  if (isLoading) return <CircularProgress />;
  return (
    <Box sx={CONTAINER_SX}>
      {planets?.results.map((planet) => (
        <PlanetCard key={planet.name} planet={planet} loading={isLoading} />
      ))}
    </Box>
  );
}

export default Planets;
