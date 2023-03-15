/* import logo from './logo.svg';
import './App.css'; */

import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [pokemon, setPokemon] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null); 

  const url = 'http://pokeapi.co/api/v2/pokemon/'
      const fetch = (url)=>{
        axios.get(url)
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
      }
  useEffect(() => {
    fetch(url)
  /*   const getApi = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      setListaPokemon(data.results);
      console.log(data.results)
    } */

   /*  fetch("http://pokeapi.co/api/v2/pokemon")
      .then (response => response.json())
      .then (data => setPokemon(data.results))
      .then (fetch(results).then (i => console.log(i))) */

      

      // .then (data => console.log(data.results.url[0]))
      // .then ((results) => Promise.all(results.map((item )=> fetch(item.url))))

  }, [url]);

  return (
    
    <div>
      <h1>Listado de pokemones</h1>
      <ul>
        {pokemon.map((poke) => (
          <li key={poke.name}>
            <img src={poke.sprites.front_default} alt={poke.name} />
            <h2>{poke.id} - {poke.name}</h2>
            <a href={poke.url}>Learn more...</a>
          </li>
          )       
        )}
      </ul>
    </div>
  )
}

export default App;
