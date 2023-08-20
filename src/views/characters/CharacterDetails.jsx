import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommonCard from "../../components/CommonCard";
import { useGetCharacter } from "../../hooks/Characters";
import { handleMultipleRequests } from "../../utils/request.utils";

function CharacterDetails() {
  const { characterId } = useParams();
  const { character, isLoading, isError } = useGetCharacter(characterId);
  const [ships, setShips] = useState([]);

  // TODO: Refactor to util function
  async function shipsGetter() {
    if (character?.starships?.length === 0) {
      return;
    }
    const shipsResponse = await handleMultipleRequests(character?.starships);
    if (shipsResponse.length > 0) {
      setShips(shipsResponse);
    }
  }

  useEffect(() => {
    shipsGetter();
    return () => {
      setShips([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [character?.ships]);

  if (isLoading) return <CircularProgress />;

  if (isError) return <Typography>{isError}</Typography>;

  return (
    <Box>
      <Box className="details">
        <Typography variant="h1">{character?.name}</Typography>
        <Typography>Height: {character?.height}</Typography>
        <Typography>Mass: {character?.mass} </Typography>
        <Typography>Born: {character?.birth_year}</Typography>
      </Box>
      <Typography variant="subtitle1">Ships</Typography>
      <Grid
        container
        className="ships"
        justifyContent="space-between"
        rowGap="15px"
      >
        {ships?.map((ship) => (
          <Grid item key={ship.name} xs={12} md={3.5}>
            <CommonCard
              key={ship.name}
              title={ship.name}
              text1={`Model: ${ship.model}`}
              text2={`Rating: ${ship.hyperdrive_rating}`}
              id={ship.url}
              url="ships"
              loading={isLoading}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CharacterDetails;
