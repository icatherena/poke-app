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

// Material UI's component imports
/* import TablePagination from '@mui/material/TablePagination'; */

const BasicTable = ({pokemon}) => {

  const [listPokemon, setListPokemon] = useState(pokemon);

  // Material UI's componenent for pagination
/*   const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(DEFAULT_ROWS_PER_PAGE); */

  useEffect(() => {
      setListPokemon(pokemon);
    },
    [pokemon]) 

  /* useEffect(() => {
      console.log('update list', listPokemon);
    },
    [listPokemon])  */

  function spliceUrl (url) {
    return parseInt(url.split("/")[6])
  }

/*   // Material UI's functions for pagination
  const handleChangePage = React.useCallback(
    (event, newPage) => {
      setPage(newPage);

      const sortedRows = stableSort(rows, getComparator(order, orderBy));
      const updatedRows = sortedRows.slice(
        newPage * rowsPerPage,
        newPage * rowsPerPage + rowsPerPage,
      );

      setVisibleRows(updatedRows);

      // Avoid a layout jump when reaching the last page with empty rows.
      const numEmptyRows =
        newPage > 0 ? Math.max(0, (1 + newPage) * rowsPerPage - rows.length) : 0;

      const newPaddingHeight = (dense ? 33 : 53) * numEmptyRows;
      setPaddingHeight(newPaddingHeight);
    },
    [rowsPerPage],
  );

    const handleChangeRowsPerPage = React.useCallback(
    (event) => {
      const updatedRowsPerPage = parseInt(event.target.value, 10);
      setRowsPerPage(updatedRowsPerPage);

      setPage(0);

      const sortedRows = stableSort(rows, getComparator(order, orderBy));
      const updatedRows = sortedRows.slice(
        0 * updatedRowsPerPage,
        0 * updatedRowsPerPage + updatedRowsPerPage,
      );

      setVisibleRows(updatedRows);

      // There is no layout jump to handle on the first page.
      setPaddingHeight(0);
    },
    [order, orderBy],
  ); */
  
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

{/*         <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={listPokemon.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}

      </Grid>
    </Grid>
  )}

export default BasicTable;