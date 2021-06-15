import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea, CardActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/core/Rating';
import Box from '@material-ui/core/Box';

export default function ActionAreaCard(props) {
  
  const ratehandler = ()=>{
      window.location=('/rate/'+props.title);
  }
  const bookingHandler=()=>{
    window.location=('/book/movie/'+props.title);
  }
  return (
    <Card >
      
      <CardActionArea>
        <CardMedia
          sx={{ height: 500 }}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.poster}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Genre:{props.genre}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button onClick={bookingHandler}fullWidth size="small" color="primary">
            Book tickets
          </Button>
          <Button onClick={ratehandler}fullWidth size="small" color="primary">
            Rate
          </Button>
      </CardActions>
      <Box textAlign="center">
      <Rating  name="read-only" value={props.rating} precision={0.5} readOnly /></Box>
    </Card>
  );
}
