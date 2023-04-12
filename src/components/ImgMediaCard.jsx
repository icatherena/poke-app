import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Grid, Divider, Typography} from '@mui/material';
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
  }, [listaEvoluciones])

  const pasarAMayus = (props) => {
    return (
      props.name.charAt(0).toUpperCase() + props.name.slice(1)
    )
  }

  return (
    <Grid container 
      sx = {{
        padding: '2em',
      }}
    >
      <Grid item xs={12} sm={12} md={12} 
        sx = {{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Card
          sx = {{
            /* minWidth: '20em',
            heigth: '100vh', */
            display: 'flex',
            backgroundColor: 'rgb(238, 249, 238)',
            borderRadius: '1em',
            border: '1px solid rgb(39,114,185)',
            boxShadow: 3,
            alignItems: 'center',
          }}
        >
          <CardMedia
            component="img"
            alt={props.name}
            image={props.image}           
            sx = {{
              backgroundColor: 'rgb(238, 249, 238)',
              height: 'fit-content',
              margin: '1em 2em',
            }}
          />
          <CardContent 
            sx = {{
              backgroundColor: 'rgb(255, 255, 255)',
              borderLeft: '1px solid rgb(39,114,185)',
              borderRadius: '1em',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '2em 4em',
              
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

                        color: 'rgb(52, 105, 165)',
                          '&:hover': {
                            color: 'rgb(36,73,115)',
                            weight: 'bold'
                          },
                    }}
                  >
                    {item}
                    <OpenInNewIcon fontSize="small"
                      sx = {{
                          color: 'rgb(52, 105, 165)',
                          '&:hover': {
                            color: 'rgb(36,73,115)',
                            weight: 'bold'
                          },
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

            <Divider variant="body1"><b>MOVIMIENTOS</b></Divider>
            <Typography variant="body1">
              {props.moves.slice(0, 5).map((move) => move.move.name).join(', ')} 
            </Typography><br/> 
              
            {/* <Divider variant="body1"><b>ALTURA</b></Divider>
            <Typography variant="body1">
                {props.weight} cm
            </Typography><br/>
              
            <Divider variant="body1"><b>PESO</b></Divider>
            <Typography variant="body1">
                {props.height} kg
            </Typography> */}

          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ImgMediaCard;
