import React, { useEffect, useState } from 'react';
import charmUrl from '../../assets/charmUrl';
import logoUrl from '../../assets/logoUrl';
import { Button, Grid, Typography } from '@mui/material';
import psiduckUrl from '../../assets/psiduckUrl';

const Home = () => {
  return (
    <Grid container
      sx = {{
        position: 'relative',
        /* backgroundColor: "rgb(238, 249, 238)", */
      }}
    >
      <Grid item
        sx = {{
          position: 'absolute',
          bottom: 0, 
          left: 0,       
        }}>
        <img
          src={psiduckUrl}
          alt='psiduck'
        />  
      </Grid>
      <Grid item
        sx = {{
          position: 'absolute',
          bottom: 0, 
          right: 0,       
        }}>
        <img 
          src={charmUrl} 
          alt='charmander' 
        />
      </Grid>
      <Grid item
        xs = {12} 
        sx = {{
          height: '100vh',
          gap: '1em',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={logoUrl} alt='pokeLogo' height='100vh' />
        <Button variant="outlined" size="small" href={`/list`}>
          Gotta catch'em all!
        </Button>
      </Grid>
    </Grid>
  )
};

export default Home;