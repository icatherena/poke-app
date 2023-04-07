import React from "react";
import { Box, CircularProgress, Grid, Typography } from "@mui/material";

const Loading = () => {
  return (
    <Grid
      container
      xs={12}
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        item
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box 
          px = {
            3
          }
          py = {
            .5
          }
          sx = {{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(238, 249, 238)",
            borderRadius: ".5em",
            gap: '1em'
          }}
        >
          <CircularProgress />
          <Typography>Pokemon's card is loading</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Loading;
