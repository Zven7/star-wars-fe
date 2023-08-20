import { Box, CircularProgress, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterCard from "../../components/CharacterCard";
import { useGetMovie } from "../../hooks/Movies";
import { handleMultipleRequests } from "../../utils/request.utils";

function MovieDetails() {
  const { movieId } = useParams();
  const { movie, isLoading, isError } = useGetMovie(movieId);
  const [cast, setCast] = useState([]);

  async function castGetter() {
    if (movie?.characters?.length === 0) {
      return;
    }
    const castResponse = await handleMultipleRequests(movie?.characters);
    if (castResponse.length > 0) {
      setCast(castResponse);
    }
  }

  useEffect(() => {
    castGetter();
    return () => {
      setCast([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movie?.characters]);
  console.log(movie, "re");

  if (isLoading) return <CircularProgress />;

  if (isError) return <Typography>{isError}</Typography>;

  // characters

  return (
    <Box>
      <Box className="details">
        <Typography variant="h1">{movie?.title}</Typography>
        <Typography>Release Date: {movie?.release_date}</Typography>
        <Typography>Produced By: {movie?.producer} </Typography>
        <Typography>Directed By: {movie?.director}</Typography>

        <Typography>Opening Crawl</Typography>
        <Typography>{movie?.opening_crawl}</Typography>
      </Box>
      <Typography variant="subtitle1">Cast</Typography>
      <Grid
        container
        className="cast"
        justifyContent="space-between"
        rowGap="15px"
      >
        {cast.map((character) => (
          <Grid item key={character.name} xs={12} md={3.5}>
            <CharacterCard character={character} key={character.name} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MovieDetails;
