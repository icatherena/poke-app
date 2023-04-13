import React from "react";
import { Grid, ListItem, ListItemText } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

/* const notFoundIcono = 'https://cdn-icons-png.flaticon.com/512/287/287272.png' */
    const confusedGif = 'https://media.tenor.com/Ir5eG_TuMPYAAAAC/pokemon-confused.gif'

const NotFound = () => {
    return (
        <Grid container xs = {12}
            sx = {{
                height: '80vh',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Grid item 
                sx = {{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '2em',
                }}
            >
                <img 
                    src={confusedGif}
                />
                <ListItem 
                    sx = {{
                        border: '1px solid rgb(39,114,185)',
                        borderRadius: '.5em',
                    }}
                >
                    <ErrorOutlineIcon/>
                    <ListItemText
                        sx = {{
                            marginLeft: '.5em'
                        }}
                    >
                        No se ha encontrado dicho pokemon
                    </ListItemText>
                </ListItem>
            </Grid>
        </Grid>
    )
}

export default NotFound;

