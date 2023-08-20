import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterCard from "../../components/CharacterCard";
import { useGetShip } from "../../hooks/Ships";
import { SUBTITLE_SX, TITLE_SX } from "../../styles";
import { dotsFormatter } from "../../utils";
import { handleMultipleRequests } from "../../utils/request.utils";

function ShipDetails() {
  const { shipId } = useParams();
  const { ship, isLoading, isError } = useGetShip(shipId);
  const [pilots, setPilots] = useState([]);

  async function pilotsGetter() {
    console.log(ship?.pilots);
    if (ship?.pilots?.length === 0 || ship?.pilots === undefined) {
      console.log("returned");
      return;
    }
    console.log("trying to fetch");
    const castResponse = await handleMultipleRequests(ship?.pilots);
    if (castResponse.length > 0) {
      setPilots(castResponse);
    }
  }

  useEffect(() => {
    pilotsGetter();
    return () => {
      setPilots([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ship?.pilots]);

  const parsedCost = dotsFormatter(ship?.cost_in_credits);
  const parsedCapacity = dotsFormatter(ship?.cargo_capacity);

  if (isLoading) return <CircularProgress />;

  if (isError) return <Typography>{isError}</Typography>;

  // characters

  return (
    <Box>
      <Box className="details">
        <Typography sx={TITLE_SX}>{ship?.name}</Typography>
        <Typography>
          <b>Model: </b>
          {ship?.model}
        </Typography>
        <Typography>
          <b>Manufacturer: </b> {ship?.manufacturer}{" "}
        </Typography>
        <Typography>
          <b>Length: </b> {ship?.length}
        </Typography>
        <Typography>
          <b>Cost: </b> {parsedCost}
        </Typography>
        <Typography>
          <b>Class: </b> {ship?.starship_class}
        </Typography>
        <Typography>
          <b>Cargo Capacity: </b>
          {parsedCapacity}
        </Typography>
        <Typography>
          <b>Max Atmosphering Speed: </b>
          {ship?.max_atmosphering_speed}
        </Typography>
      </Box>
      {!ship?.pilots || ship?.pilots.length === 0 ? (
        <Typography sx={SUBTITLE_SX}>
          No pilots registered for this ship
        </Typography>
      ) : (
        <>
          <Typography sx={SUBTITLE_SX}>Cast</Typography>
          <Grid
            container
            justifyContent="space-between"
            rowGap="15px"
            className="cast"
          >
            {pilots.map((pilot) => (
              <Grid item key={pilot.name} xs={12} md={3.5}>
                <CharacterCard character={pilot} key={pilot.name} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
}

export default ShipDetails;
