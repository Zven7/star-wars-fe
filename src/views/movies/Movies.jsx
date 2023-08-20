import { CircularProgress, Typography, Box } from "@mui/material";
import MovieCard from "../../components/MovieCard";
import { useGetAllMovies } from "../../hooks/Movies";

const CONTAINER_SX = {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
};

function Movies() {
  const { movies, isLoading, isError } = useGetAllMovies();

  if (isError) return <Typography>{isError}</Typography>;
  if (isLoading) return <CircularProgress />;
  return (
    <Box sx={CONTAINER_SX}>
      {movies?.results.map((movie) => (
        <MovieCard key={movie.title} movie={movie} loading={isLoading} />
      ))}
    </Box>
  );
}

export default Movies;
