import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { baseUrl } from '../../api/baseUrl';
import ImgMediaCard from '../../components/ImgMediaCard';
import NavBar from '../../components/NavBar';
import { useParams } from 'react-router-dom';

const Description = () => {
    const {id} = useParams()

    const [pokemon, setPokemon] = useState([])
    const [pokeName, setPokeName] = useState('')
    const [pokeImage, setPokeImage] = useState('')
    const [pokeAbilities, setPokeAbilities] = useState([])
    const [pokeTypes, setPokeTypes] = useState([])
    const [pokeMoves, setPokeMoves] = useState([])

   useEffect(() => {
        axios.get(baseUrl+`${id}`)
            .then((res) => {
                setPokemon(res.data)
                setPokeName(res.data.name)
                setPokeImage(res.data.sprites.other.home.front_default)
                setPokeAbilities(res.data.abilities)
                setPokeTypes(res.data.types)
                setPokeMoves(res.data.moves)
            })
    }, [id]);

    console.log(pokemon)
    return (
        <div>
            <div className='nav-container' sx={12}>
                <NavBar/>
            </div>
            <div className='card-container' xs={12} sm={10} md={6} >
                <ImgMediaCard 
                pokemon={pokemon} 
                name = {pokeName}
                numPokedex = {pokemon.id}
                abilities = {pokeAbilities}
                moves = {pokeMoves}
                types = {pokeTypes}
                weight = {pokemon.weight}
                height = {pokemon.height}
                bexp = {pokemon.base_experience}
                image={pokeImage}
                />
            </div>
        </div>
    );
}

export default Description;