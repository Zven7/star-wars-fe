/* eslint-disable react/prop-types */
import {
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function MovieCard({ movie, isLoading }) {
  const { release_date, title, director, url } = movie;

  const fixedUrl = url.replace(/\D+/g, "");

  if (isLoading) return <CircularProgress />;

  return (
    <Card>
      <CardContent>
        <Typography>{title}</Typography>
        <Typography>{release_date}</Typography>
        <Typography>{director}</Typography>
      </CardContent>
      <CardActions>
        <Link to={`/movies/${fixedUrl}`}>See more</Link>
      </CardActions>
    </Card>
  );
}

export default MovieCard;
