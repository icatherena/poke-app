import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Paper, Table, TableBody, TableCell, TableContainer, 
      TableHead, TableFooter, TablePagination, TableRow } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const BasicTable = ({pokemon}) => {

  const [listPokemon, setListPokemon] = useState(pokemon);

  const [page, setPage] = useState(0); // página actual
  const [rowsPerPage, setRowsPerPage] = useState(10); // número de filas por página

  useEffect(() => {
      setListPokemon(pokemon);
    },
    [pokemon]) 

  function spliceUrl (url) {
    return parseInt(url.split("/")[6])
  }
  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
              borderRadius: '.5em',
              border: '1px solid rgb(39,114,185)'
            }}
        >
          <Table 
            sx = {{ 
              minWidth: 600,
            }} 
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">Nombre del Pokemón</TableCell>
                <TableCell align="center">Descripción</TableCell>
              </TableRow>
            </TableHead>   
            <TableBody>
              {/* {listPokemon.map((poke) => ( */}
              {listPokemon.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                <TableRow
                  key = {index}
                  sx = {{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="center">
                    {row.name}
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    <Link to={`/description/${row.name}/`} >
                      <OpenInNewIcon fontSize="small"
                        sx = {{
                          color: 'rgb(52, 105, 165)',
                          '&:hover': {
                            color: 'rgb(36,73,115)',
                            weight: 'bold'
                          },
                        }}
                      />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination 
                  rowsPerPageOptions={[10, 25]}
                  count={listPokemon.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>

          </Table>           
        </TableContainer>
      </Grid>
    </Grid>
  )}

export default BasicTable;