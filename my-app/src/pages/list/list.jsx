import React, { useState, useEffect } from "react";
import BasicTable from "../../components/BasicTable";
import NavBar from "../../components/NavBar";
import { getPokemons } from "../../api/apis";
import { Grid } from "@mui/material";
import bulbasaurUrl from "../../assets/bulbasaurUrl";

const List = () => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
      getPokemons()
        .then((pokemon) => setPokemon(pokemon.data.results));
    }, []);
  
    return (
        <>
            <Grid container>
                <Grid item xs={12}
                    sx = {{
                        position: 'fixed',
                        width: '100%',
                    }}
                >
                    <NavBar />
                </Grid> 
            </Grid>
            <Grid container>
                <Grid item
                    sx = {{
                        position: 'fixed',
                        top: '5em', 
                        right: '2em',       
                    }}
                >
                    <img
                        src={bulbasaurUrl}
                        alt='bulbasaur'
                    />
                </Grid>
            </Grid>
            <Grid container 
                /* spacing = { 1 }  */
                justifyContent = "left"
                mx = { 4 }
                mt = { 8 }
                /* sx = {{
                    backgroundColor: "rgb(238, 249, 238)",
                }} */
            >
                <Grid item>
                    <BasicTable pokemon = { pokemon } />
                </Grid>
            </Grid>
        </>    
    )
}

export default List;
