import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function ButtonAppBar(props) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="210"
          image={props.image_url}
          alt={props.image_url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={"/space/" + props.id}>
          詳細 →
        </Button>
      </CardActions>
    </Card>
  );
}
