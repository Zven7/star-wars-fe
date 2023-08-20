/* eslint-disable react/prop-types */
import {
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

function ShipCard({ ship, isLoading }) {
  const { name, starship_class, length, url } = ship;

  const fixedUrl = url.replace(/\D+/g, "");

  if (isLoading) return <CircularProgress />;

  return (
    <Card>
      <CardContent>
        <Typography>{name}</Typography>
        <Typography>{starship_class}</Typography>
        <Typography>{length}</Typography>
      </CardContent>
      <CardActions>
        <Link to={`/ships/${fixedUrl}`}>See more</Link>
      </CardActions>
    </Card>
  );
}

export default ShipCard;
