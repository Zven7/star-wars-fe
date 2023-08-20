/* eslint-disable react/prop-types */
import {
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function CharacterCard({ character, isLoading }) {
  const { name, birth_year, height, mass, url } = character;

  const fixedUrl = url.replace(/\D+/g, "");

  if (isLoading) return <CircularProgress />;

  return (
    <Card>
      <CardContent>
        <Typography>{name}</Typography>
        <Typography>{birth_year}</Typography>
        <Typography>{height}</Typography>
        <Typography>{mass}</Typography>
      </CardContent>
      <CardActions>
        <Link to={`/characters/${fixedUrl}`}>See more</Link>
      </CardActions>
    </Card>
  );
}

export default CharacterCard;
