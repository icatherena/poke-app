import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, CardContent, CardMedia, Grid, Divider, Typography} from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from 'react-router-dom';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const ImgMediaCard = (props) => {
  
  const [pokemon, setPokemon] = useState()
  const [listaEvoluciones, setListaEvoluciones] = useState([])

  useEffect(() => {
    setPokemon(props.pokemon);
  },
  [props.pokemon]) 

  useEffect(() => {
    evaluarEvoluciones(props)
  }, [props])

  const evaluarEvoluciones = (props) => {
    // Se añade el primer pokemon dado que siempre hay una especie inicial, 
    // la cual puede o no tener una siguiente evolución
    setListaEvoluciones([props.initialForm])
    // A continuación se evalúa si existe y si contiene un elemento
    if (props.midForm && props.midForm.length > 0) {
      // Para concatenar los elementos que traería midForm si fuera un array
      // y no un único elemento,
      // se crea un segundo array
      let midList = []
      // Se evalúa si midForm es o no un array de elementos 
      if (Array.isArray(props.midForm)) {
        // Si cumple la condición, se mapea midForm y se asigna al array midList
        midList = props.midForm.map((item) => item)
        // A continuación, para añadir los elementos del array midList,
        // se usa concat para traer una copia de los elementos que ya están
        // seteados en listaEvoluciones y se añaden los que trae midList
        setListaEvoluciones(prevList => prevList.concat(midList))
      } else {
        // Si midForm no cumple con la condición (no es un array),
        // se setea midForm de la misma forma que se hizo con midList usando concat
        setListaEvoluciones(prevList => prevList.concat(props.midForm))
      }
    }
    // Como no se tiene certeza de que el pokemon inicial tenga o no
    // una segunda evolución, se evalua nuevamente si contiene al menos un elemento
    if (props.finalForm && props.finalForm.length > 0) {
      // Se evalúa si finalForm tiene algún valor distinto de indefinido o nulo
      // Si no se evaluara en este momento, se añadiría más adelante
      // un array de elementos nulos/indefinidos que se mostrarían al mapear
      // listaEvoluciones dentro del return
      if (props.finalForm !== null && props.finalForm !== undefined) {
        // Si cumple condición, se evalúa a continuación si se trata de un array
        if (Array.isArray(props.finalForm)) {
          // Debido a que finalForm a diferencia de initial y midForm trae los elementos como
          // un array, para concatenarlos y evitar que se añadan a listaEvoluciones como otro array
          // se recorre el array mediante el uso de for, y sólo si el elemento no es nulo, se añade
          // a listaEvoluciones
          for (let i = 0; i < props.finalForm.length; i++) {
            if (props.finalForm[i] !== null) {
              setListaEvoluciones(prevList => prevList.concat(props.finalForm[i]))
            }
          }
        } else {
          // Si no cumple la condición (no es un array, simplemente se añade el elemento a listaEvoluciones)
          setListaEvoluciones(prevList => prevList.concat(props.finalForm))
          }
      }
    }
  }

  useEffect(() => {
    console.log("listaEvoluciones actualizada:", listaEvoluciones)
  }, [listaEvoluciones])

  const pasarAMayus = (props) => {
    return (
      props.name.charAt(0).toUpperCase() + props.name.slice(1)
    )
  }

  const theme = createTheme({
    palette: {
      gradient: {
        main: "linear-gradient(rgb(54, 140, 144) 60%, rgb(46, 119, 142))",
      }
    }
  })

  return (
    <Grid container 
      sx = {{
        padding: '2em'
      }}
    >
      <Grid item xs={12} sm={12} md={12} 
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Card
          sx = {{
            minWidth: '20em',
            width: '26em',
            backgroundColor: 'rgb(238, 249, 238)',
            borderRadius: '1em 1em 0 0',
            boxShadow: 3,
          }}
        >
          <CardMedia
            component="img"
            alt={props.name}
            image={props.image}            
            sx = {{
              width: '24em',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgb(238, 249, 238)',
              /* border: '1px solid red', */
              margin : '1em 1em'
            }}
          />
          <ThemeProvider theme={theme}>
            <CardContent 
              sx = {{
                background: (theme) => theme.palette.gradient.main,
                color: 'rgb(238, 249, 238)',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '2em 4em',
                borderRadius: '1.5em 1.5em 0 0'
              }}
            >
                        
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
                {props.types.map((type) => type.type.name).join(' - ')}
              </Typography><br/>

              <Divider variant="body1"><b>CADENA EVOLUTIVA</b></Divider>
              <Typography variant="body1">
                {/* {props.initialForm} → {props.midForm} → {props.finalForm} */}
                
                <ul
                  style = {{
                    listStyleType: 'none', 
                    padding: '0.5em',
                    margin: 0,
                    justifyContent: 'space-evenly',
                  }}
                >
                  {listaEvoluciones.map((item) => 
                  <li key = {item}>
                    <Link to={`/description/${item}/`} 
                      style = {{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        
                        textDecoration: 'none',

                        color: '#EEF9EE',
                          '&:hover': {
                            color: '#a6aea6',
                            weight: 'bold'
                          },
                          '&:visited': {
                            color: '#747974',
                            weight: 'bold'
                          }
                      }}
                    >
                      {item}
                      <OpenInNewIcon fontSize="small"
                        sx = {{
                          color: '#EEF9EE',
                          '&:hover': {
                            color: '#a6aea6',
                            weight: 'bold'
                          },
                          '&:visited': {
                            color: '#747974',
                            weight: 'bold'
                          }
                        }}
                      />                       
                    </Link>
                   
                  </li> )} 
                </ul>
                
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

              <Accordion 
                elevation = {0}
                  sx = {{ 
                    background:"none", 
                    boxShadow: 'none',
                    '&:before': { /* Remueve línea por encima del acordeón */
                      display: 'none',
                    }
                  }}
                >
                  <AccordionSummary
                    expandIcon = 
                      {<ExpandMoreIcon 
                        sx = {{ 
                          color:"rgb(238, 249, 238)" 
                        }} 
                      />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                  <Typography 
                    align='center'
                    sx = {{ 
                      width:"100%",
                      color:"rgb(238, 249, 238)" 
                    }}
                  >
                      <b>MOVIMIENTOS</b>
                  </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography sx = {{ color:"rgb(238, 249, 238)"}}>
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
          </ThemeProvider>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ImgMediaCard;
