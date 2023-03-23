import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, CardContent, CardMedia, Grid, Divider, Typography} from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

const ImgMediaCard = (props) => {
  
  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    setPokemon(props.pokemon);
  },
  [props.pokemon]) 

  function pasarAMayus(props) {
    return (
      props.name.charAt(0).toUpperCase() + props.name.slice(1)
    )
  }

  function evaluarEvolvesFrom(props) {
    return (
      props.evolvesFrom ? `Evoluciona a partir de ${props.evolvesFrom.name}` : 'Se trata del primer pokemón en la cadena evolutiva'
    )
  }

  function evaluarEvolvesTo(props) {
    return (
      props.evolvesTo ? `Evoluciona a ${props.evolvesTo.name}` : 'Se trata del último pokemón en la cadena evolutiva'
    )
  }

  return (
    <Grid container >
      <Grid item xs={12} sm={12} md={12} id='card'>
        <Card sx={{ minWidth: '20em'}} sm={{ minWidth: '40em'}} md={{ minWidth: '60em'}} id='card-mui'>
          <CardMedia
            component="img"
            alt={props.name}
            image={props.image}
            id='card-media'
          />
          <CardContent id='card-content'>
                      
            <Typography gutterBottom variant="h4" component="div">
              <b>{pasarAMayus(props)}</b>
            </Typography>

            <Divider variant="body1"><b>POSICIÓN EN LA POKEDEX</b></Divider>
            <Typography variant="body1">
              #{props.numPokedex}
            </Typography><br/>

            <Divider variant="body1"><b>ESPERIENCIA BASE</b></Divider>
            <Typography variant="body1">
              {props.bexp} xp
            </Typography><br/> 

            <Divider variant="body1"><b>POKEMÓN TIPO</b></Divider>
            <Typography variant="body1">
              {/* {props.types.map((type) => 
                <ul xs={{ listStyle:"none" }}>
                  <li>{type.type.name}</li>
                </ul>
              )}  */}
              {props.types.map((type) => type.type.name).join(' - ')}
            </Typography><br/>

            <Divider variant="body1"><b>CADENA EVOLUTIVA</b></Divider>
           <Typography variant="body1">
              {/* {evaluarEvolvesFrom(props)}. {evaluarEvolvesTo(props)} */}
              {props.initialForm} → {props.midForm} → {props.finalForm}    
            </Typography><br/> 

            <Divider variant="body1"><b>HABILIDADES</b></Divider>
            <Typography variant="body1">
              {props.abilities.map((ability) => ability.ability.name).join(' - ')} 
            </Typography><br/>

            {/* <Divider variant="body1"><b>MOVIMIENTOS</b></Divider>
            <Typography variant="body1">
              {props.moves.map((move) => move.move.name).join(', ')} 
            </Typography><br/> 
            */}

            <Accordion sx={{ background:"none", boxShadow:"none" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color:"rgb(238, 249, 238)" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                /* xs={{display:"flex", justifyContent:"center"}} */
              >
              <Typography sx={{ color:"rgb(238, 249, 238)" }}><b>MOVIMIENTOS</b></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color:"rgb(238, 249, 238)"}}>
                {props.moves.map((move) => move.move.name).join(', ')} 
                </Typography>
              </AccordionDetails>
            </Accordion><br/> 
            
            <Divider variant="body1"><b>ALTURA</b></Divider>
            <Typography variant="body1">
              {props.weight} cm
            </Typography><br/>
            
            <Divider variant="body1"><b>PESO</b></Divider>
            <Typography variant="body1">
              {props.height} kg
            </Typography>

          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ImgMediaCard;
