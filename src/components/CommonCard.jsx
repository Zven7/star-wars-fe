/* eslint-disable react/prop-types */
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const CARD_BTN_SX = {
  width: "100%",
  textTransform: "none",
  color: "white",
  backgroundColor: "black",
};

function CommonCard({ title, text1, text2, id, url, isLoading }) {
  const fixedId = id.replace(/\D+/g, "");

  if (isLoading) return <CircularProgress />;

  return (
    <Card>
      <CardContent>
        <Typography fontWeight="bold">{title}</Typography>
        <Typography>{text1}</Typography>
        <Typography>{text2}</Typography>
      </CardContent>
      <CardActions>
        <Button LinkComponent={Link} to={`/${url}/${fixedId}`} sx={CARD_BTN_SX}>
          See More
        </Button>
      </CardActions>
    </Card>
  );
}

export default CommonCard;
