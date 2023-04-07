import React from "react";
import { Grid, ListItem, ListItemText } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

/* const notFoundIcono = 'https://cdn-icons-png.flaticon.com/512/287/287272.png' */
    const confusedGif = 'https://media.tenor.com/Ir5eG_TuMPYAAAAC/pokemon-confused.gif'

const NotFound = () => {
    return (
        <Grid container xs = {12}
            sx = {{
                height: '100vh',
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
                        backgroundColor: 'rgb(238, 249, 238)',
                        borderRadius: '.5em',
                    }}
                >
                    <ErrorOutlineIcon/>
                    <ListItemText
                        sx = {{
                            marginLeft: '.5em'
                        }}
                    >
                        ERROR 404: Not Found
                    </ListItemText>
                </ListItem>
            </Grid>
        </Grid>
    )
}

export default NotFound;

