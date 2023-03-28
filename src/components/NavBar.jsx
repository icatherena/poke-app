import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

const NavBar = () => {
    const logoUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png'
    return (
        <Grid container>
            <Grid item xs={12} sx={{
                    backgroundColor: 'rgb(52, 105, 165)',
                    color: 'rgb(247, 204, 1)',
                    padding: '0.5em',
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    boxShadow: '2px 2px 5px 1px rgba(0, 0, 0, 0.2)'
                }}>
                <nav >
                    <img src={logoUrl} alt='pokeLogo' height='40px'/> 
                </nav>
            </Grid>
        </Grid>
    );
}

export default NavBar;