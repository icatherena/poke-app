import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import BasicTable from "../../components/BasicTable";
import NavBar from "../../components/NavBar";
import "../../App.css";
import { getPokemons } from "../../api/apis";

const Home = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemons().then((pokemon) => setPokemon(pokemon.data.results));

    // axios.get(baseUrl)
    //     .then((results) => {
    //         return Promise.all(
    //             results.map((res) =>
    //             axios.get(res.url))
    //         )
    //     })
    //     .then((results) => {
    //         setPokemon(results.map((res) =>res.data)
    //         )
    //     })
  }, []);

  console.log("pokemon", pokemon);

  return (
    <div>
      <div className="nav-container" sx={12}>
        <NavBar />
      </div>
      <div className="table-container">
        <Grid container spacing={1} justifyContent="center">
          <Grid item xs={12} sm={10} md={6}>
            <BasicTable pokemon={pokemon} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
