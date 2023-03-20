import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

const NavBar = () => {
    const logoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png'
    return (
        <Grid container>
            <Grid item xs={12}>
                <nav>
                    <img src={logoUrl} alt='pokeLogo' height='40px'/> 
                </nav>
            </Grid>
        </Grid>
    );
}

export default NavBar;