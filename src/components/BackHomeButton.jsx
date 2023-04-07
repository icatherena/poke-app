import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import { Fab } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled, { css } from 'styled-components';

const BackHomeButton = () => {
    const controls = useRef();
    const [fixedPosition, setFixedPosition] = useState(true);

    useEffect(() => {
        const initialTop = controls.current.getBoundingClientRect().top;
        console.log({initialTop})
        const handleScroll = () => {
            setFixedPosition(window.scrollY > initialTop)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <Container fixed={fixedPosition} ref={controls}>
            <Link to={`/`}>
                <ThemeProvider theme={theme}>
                    <Fab size="large" aria-label="Inicio" color="secondary">
                        <HomeIcon sx={{ color:"rgb(238, 249, 238)" }}/>
                    </Fab>
                </ThemeProvider>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    margin: 6em 2em;
    ${props => props.fixed && css`
        position: fixed;
        bottom: 0;
        right: 0;
        margin: 2em 2em;
    ` }
`

const theme = createTheme({
    palette: {
        primary: {
          main: '#3469A5',
        },
        secondary: {
          main: '#3469b8',
        },
    },    
});


export default BackHomeButton;
