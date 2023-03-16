import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const BasicTable = ({pokemon}) => {

  const [listPokemon, setListPokemon] = useState(pokemon);

  useEffect(() => {
      setListPokemon(pokemon);
    },
    [pokemon]) 

    useEffect(() => {
      console.log('update list', listPokemon);
    },
    [listPokemon]) 

  
  return (
    <Grid container>
      <Grid item xs={12} id='table-container'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"><b>Nombre del Pokemón</b></TableCell>
              <TableCell align="center"><b>Descripción</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listPokemon.map((poke) => (
              <TableRow
                key={poke.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {poke.name}
                </TableCell>
                <TableCell component="th" scope="row" align="center">
              <Link to={`home/description/${poke.id}`}><b>Ir a la descripción de <i>{poke.name}</i></b></Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Grid>
    </Grid>
  )}

export default BasicTable;
