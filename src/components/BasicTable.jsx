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
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

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

  function spliceUrl (url) {
    return parseInt(url.split("/")[6])
  }

  return (
    <Grid container
      p = '2em'
      sx = {{
        justifyContent: 'center',        
      }}
    >
      <Grid item xs={12}>
        <TableContainer component={Paper}
            sx = {{
              borderRadius: '.5em'
            }}
        >
          <Table 
            sx = {{ 
              minWidth: 500,
            }} 
            aria-label="simple table"
          >
            <TableHead
              sx = {{
                color: 'rgb(83, 146, 131)',
              }}
            >
              <TableRow>
                <TableCell align="center"><b>Nombre del Pokemón</b></TableCell>
                <TableCell align="center"><b>Descripción</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listPokemon.map((poke) => (
                <TableRow
                  key = {poke.name}
                  sx = {{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {poke.name}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    <Link to={`/description/${spliceUrl(poke.url)}/`} >
                      <OpenInNewIcon fontSize="small"
                        sx = {{
                          color: '#539283',
                          '&:hover': {
                            color: '#3a665b',
                            weight: 'bold'
                          },
                          '&:visited': { /* por revisar */
                            color: '#2E778E',
                            weight: 'bold'
                          }
                        }}
                      />
                    </Link>
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