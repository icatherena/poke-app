import React, { useEffect, useState } from "react";
import "../../App.css";
import BasicTable from "../../components/BasicTable";
import NavBar from "../../components/NavBar";
import { getPokemons } from "../../api/apis";
import { Grid } from "@mui/material";

const Home = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemons()
      .then((pokemon) => setPokemon(pokemon.data.results));
  }, []);

  return (
    <>
      <Grid>
        <NavBar />
      </Grid> 
      <Grid container 
        spacing = {1} 
        justifyContent = "center"
      >
        <Grid>
          <BasicTable pokemon={pokemon} />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
