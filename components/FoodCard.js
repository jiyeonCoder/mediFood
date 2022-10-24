import React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import img from "../banana.jpg";

const FoodCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          style={{
            width: "100%",
            height: "100%",
          }}
          component="img"
          height="140"
          image={img}
          alt="fruit"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.fruitName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default FoodCard;
