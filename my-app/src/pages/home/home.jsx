import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../api/baseUrl";
import BasicTable from "../../components/BasicTable";
import NavBar from "../../components/NavBar";
import '../../App.css'

const Home = () => {
  
  const [pokemon, setPokemon] = useState([]);
  
  useEffect(() => {
     
      axios.get(baseUrl)
          .then((res) => {
              return res.data.results
          })
          .then((results) => {
              return Promise.all(
                  results.map((res) =>
                  axios.get(res.url))
              )
          })
          .then((results) => {
              setPokemon(results.map((res) =>res.data)
              )
          })
  }, []);

  console.log('pokemon', pokemon);
    
  return (
    <div>
      <div className='nav-container' sx={12}>
        <NavBar/>
      </div>
      <div className='table-container'>
          <Grid container spacing={1} justifyContent='center'>
            <Grid item xs={10} sm={8} md={6}>
              <BasicTable pokemon={pokemon} />
            </Grid>
          </Grid>
      </div>  
    </div>
        

  );
};

export default Home;
