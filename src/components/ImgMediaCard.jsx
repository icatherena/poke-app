import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useState } from 'react';
import { Grid } from '@mui/material';

const ImgMediaCard = (props) => {
  
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    setPokemon(pokemon);
  },
  [pokemon]) 

  return (
    <Grid container >
      <Grid item xx={12} sm={12} md={12} id='card'>
        <Card sx={{ minWidth: '20em'}} sm={{ minWidth: '40em'}} md={{ minWidth: '60em'}}>
          <CardMedia
            component="img"
            alt={props.name}
            height="auto"
            image={props.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <b>{props.name}</b>
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {props.bexp} 
            </Typography>
          </CardContent>
            {/* <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions> */}
        </Card>
      </Grid>
    </Grid>
  );
}

export default ImgMediaCard;
