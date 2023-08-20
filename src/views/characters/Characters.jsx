import { CircularProgress, Typography, Box } from "@mui/material";
import CommonCard from "../../components/CommonCard";
import { useGetAllCharacters } from "../../hooks/Characters";

const CONTAINER_SX = {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
};

function Characters() {
  const { characters, isLoading, isError } = useGetAllCharacters();

  if (isError) return <Typography>{isError}</Typography>;
  if (isLoading) return <CircularProgress />;
  return (
    <Box sx={CONTAINER_SX}>
      {characters?.results.map((character) => (
        <CommonCard
          key={character.name}
          title={character.name}
          text1={`Birth: ${character.birth_year}`}
          text2={`Height: ${character.height}`}
          id={character.url}
          url="characters"
          loading={isLoading}
        />
      ))}
    </Box>
  );
}

export default Characters;
