import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

const NavBar = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <nav>
                    {/* <image src='../assets/pokedex.png' alt='pokeLogo'/>  */}
                    <h1>Pokedex</h1>
                </nav>
            </Grid>
        </Grid>
    );
}

export default NavBar;