import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import { Fab } from "@mui/material";

const BackHomeButton = () => {
   return (
    <Link to={`/`}>
        <Fab color="primary" size="medium" aria-label="Inicio" >
            <HomeIcon sx={{ color:"rgb(238, 249, 238)" }}/>
        </Fab>
    </Link>
    
   )
}

export default BackHomeButton;
