import React, { useEffect, useState } from 'react'
import BackHomeButton from '../../components/BackHomeButton';
import ImgMediaCard from '../../components/ImgMediaCard';
import NavBar from '../../components/NavBar';
import { useParams } from 'react-router-dom';
import { getPokemonById, getIdChainById, getEvolutionChainById } from '../../api/apis';

const Description = () => {
    const {id} = useParams()

    const [pokemon, setPokemon] = useState([])
    const [pokeName, setPokeName] = useState('')
    const [pokeImage, setPokeImage] = useState('')
    const [pokeAbilities, setPokeAbilities] = useState([])
    const [pokeTypes, setPokeTypes] = useState([])
    const [pokeMoves, setPokeMoves] = useState([])

    const [evolutionChainUrl, setEvolutionChainUrl] = useState([])
    const [initialForm, setInitialForm] = useState()
    const [midForm, setMidForm] = useState([])
    const [finalForm, setFinalForm] = useState([])

    useEffect(() => {
        getPokemonById(id)
            .then((res) => {
                setPokemon(res.data)
                setPokeName(res.data.name)
                setPokeImage(res.data.sprites.other.home.front_default)
                setPokeAbilities(res.data.abilities)
                setPokeTypes(res.data.types)
                setPokeMoves(res.data.moves)

                getIdChainById(id)
                .then((res) => {
                    setEvolutionChainUrl(res.data.evolution_chain.url)
                    let chainId = res.data.evolution_chain.url.split("/")[6]
                    
                    getEvolutionChainById(parseInt(chainId))
                    .then((res) => {
                        setInitialForm(res.data.chain.species.name)
                        /* console.log(res.data.chain.species.name) */
                        setMidForm(res.data.chain.evolves_to?.map((item) => item.species.name))
                        /* console.log(res.data.chain.evolves_to?.map((item) => item.species.name)) */
                        setFinalForm(res.data.chain.evolves_to?.map((item) => item.evolves_to?.map((item) => item.species.name)))
                        /* console.log(res.data.chain.evolves_to?.map((item) => item.evolves_to?.map((item) => item.species.name))) */
                    })
                
                })
                
            })   

    }, [id]);

    return (
        <div>
            <div sx={12}>
                <NavBar/>
            </div>
            <div xs={12} sm={10} md={6} >
                <ImgMediaCard 
                    pokemon={pokemon} 
                    name = {pokeName}
                    numPokedex = {pokemon.id}
                    bexp = {pokemon.base_experience}
                    initialForm = {initialForm}
                    midForm = {midForm}
                    finalForm = {finalForm}
                    image={pokeImage}
                    abilities = {pokeAbilities}
                    moves = {pokeMoves}
                    types = {pokeTypes}
                    weight = {pokemon.weight}
                    height = {pokemon.height}                               
                />
            </div>
            <BackHomeButton/>
        </div>
    );
}

export default Description;