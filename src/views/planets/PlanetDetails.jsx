import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard";
import { useGetPlanet } from "../../hooks/Planets";
import { handleMultipleRequests } from "../../utils/request.utils";

function PlanetDetails() {
  const { planetId } = useParams();
  const { planet, isLoading, isError } = useGetPlanet(planetId);
  const [movies, setMovies] = useState([]);

  async function movieGetter() {
    if (planet?.films?.length === 0) {
      return;
    }
    const moviesResponse = await handleMultipleRequests(planet?.films);
    console.log(moviesResponse, "ree");
    if (moviesResponse.length > 0) {
      setMovies(moviesResponse);
    }
  }

  useEffect(() => {
    movieGetter();
    return () => {
      setMovies([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [planet?.films]);

  if (isLoading) return <CircularProgress />;

  if (isError) return <Typography>{isError}</Typography>;

  return (
    <Box>
      <Box className="details">
        <Typography variant="h1">{planet?.name}</Typography>
        <Typography>Orbital Period: {planet?.orbital_period}</Typography>
        <Typography>Diameter: {planet?.diameter}</Typography>
        <Typography>Climate: {planet?.climate}</Typography>
        <Typography>Gravity: {planet?.gravity}</Typography>
        <Typography>Terrain: {planet?.terrain}</Typography>
        <Typography>Surface Water: {planet?.surface_water}</Typography>
        <Typography>Population: {planet?.population}</Typography>
      </Box>
      <Typography variant="subtitle1">
        Appeared in the following Movies:
      </Typography>
      <Grid
        container
        className="movies-related"
        justifyContent="space-between"
        rowGap="15px"
      >
        {movies.map((movie) => (
          <Grid item key={movie.title} xs={12} md={3.5}>
            <MovieCard movie={movie} key={movie.episodeId} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PlanetDetails;
