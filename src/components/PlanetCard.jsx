/* eslint-disable react/prop-types */
import {
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function PlanetCard({ planet, isLoading }) {
  const { name, terrain, climate, url } = planet;

  const fixedUrl = url.replace(/\D+/g, "");

  if (isLoading) return <CircularProgress />;

  return (
    <Card>
      <CardContent>
        <Typography>{name}</Typography>
        <Typography>{terrain}</Typography>
        <Typography>{climate}</Typography>
      </CardContent>
      <CardActions>
        <Link to={`/planets/${fixedUrl}`}>See more</Link>
      </CardActions>
    </Card>
  );
}

export default PlanetCard;
