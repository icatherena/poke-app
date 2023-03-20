/* import logo from './logo.svg';
import './App.css'; */

import React, { useState, useEffect } from "react";
import BasicTable from "./components/BasicTable";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Description from "./pages/description/description";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="home/description/:id" element={<Description />} exact />
      <Route path="*" element={<Home />} exact />
    </Routes>
  );
}

export default App;


//   <div>

//     {/* <h1>Listado de pokemones</h1>
//     <ul>
//       {pokemon.map((poke) => (
//         <li key={poke.name}>
//           <img src={poke.sprites.front_default} alt={poke.name} />
//           <h2>{poke.id} - {poke.name}</h2>
//           <a href={poke.url}>Learn more...</a>
//         </li>
//         )
//       )}
//     </ul> */}

//     {/* <h1>Tabla de Pokemones</h1>
//     <table>
//      <thead>
//        <tr>
//          <th>Número de Pokedex</th>
//          <th>Nombre</th>
//          <th>Tipo de Pokemon</th>
//          <th>Descripción</th>
//        </tr>
//      </thead>
//      <tbody>
//        {
//        pokemon.map( (poke) =>
//       ( <tr key={poke.name}>
//            <td className='table-data'>{poke.id}</td>
//            <td className='table-data'>{poke.name}</td>
//            <td className='table-data'>{poke.types && poke.types.map(type => type.type.name).join(', ')}</td>
//            <td className='table-data'>{poke.url}</td>
//        </tr>)
//        )
//      }
//      </tbody>
//     </table> */}

//       <BasicTable pokemon={pokemon}/>

//   </div>
// )
