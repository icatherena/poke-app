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
    setPokemon(props.pokemon);
  },
  [props.pokemon]) 

  return (
    <Grid container >
      <Grid item xx={12} sm={12} md={12} id='card'>
        <Card sx={{ minWidth: '20em'}} sm={{ minWidth: '40em'}} md={{ minWidth: '60em'}} id='card-mui'>
          <CardMedia
            component="img"
            alt={props.name}
            image={props.image}
            id='card-media'
          />
          <CardContent id='card-content'>
            
            <Typography gutterBottom variant="h4" component="div">
              <b>{props.name}</b>
              {/* [0].toUpperCase() + props.name.slice(1) */}
            </Typography>

            <Typography variant="body1" component="div">
              Ocupa la posición #{props.numPokedex} en la pokedex
            </Typography>

            <Typography variant="body1">
              Se trata de un pokemon del tipo {props.types.map((type) => type.type.name).join('/')} 
            </Typography>
            
            <Typography variant="body1">
              Entre sus habilidades cuenta con {props.abilities.map((ability) => ability.ability.name).join(', ')} 
            </Typography>

            <Typography variant="body1">
              Sus movimientos son {props.moves.map((move) => move.move.name).join(', ')} 
            </Typography>
            
            <Typography variant="body1">
              Su altura promedio es de {props.weight} cm
            </Typography>
            
            <Typography variant="body1">
              En cuanto a su peso, alcanza los {props.height} kg de media
            </Typography>
            
            <Typography variant="body1">
              Su experiencia base es de {props.bexp} 
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
