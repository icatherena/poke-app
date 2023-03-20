import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { baseUrl } from '../../api/baseUrl';
import ImgMediaCard from '../../components/ImgMediaCard';
import NavBar from '../../components/NavBar';
import { useParams } from 'react-router-dom';

const Description = () => {
    /* const routeParams = useParams();
    console.log(routeParams); */

    const {id} = useParams();
    console.log(id);

    const [pokemon, setPokemon] = useState([]); 


   useEffect(() => {
     
        axios.get(baseUrl+`${id}`)
            .then((res) => {
                console.log('Response:', res);
                return setPokemon(res.data)
            })

    }, []);
    
    return (
        <div>
            <div className='nav-container' sx={12}>
                <NavBar/>
            </div>
            <div className='card-container' >
               {/* <ImgMediaCard key={pokemon.id} name={pokemon.name} description={pokemon.flavor_text_entries} /> */}
                <ImgMediaCard 
                props={pokemon} 
                // image={pokemon.sprites.back_default}
                name={pokemon.name} 
                bexp={pokemon.base_experience}
                image={pokemon.sprites.other.home.front_default}
                />
            </div>
        </div>
    );
}

export default Description;