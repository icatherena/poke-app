import React, { useEffect, useState } from 'react'
import BackHomeButton from '../../components/BackHomeButton';
import ImgMediaCard from '../../components/ImgMediaCard';
import NavBar from '../../components/NavBar';
import { useParams } from 'react-router-dom';
import { getPokemonById, getEvolvesFromById, getEvolvesTo } from '../../api/apis';

const Description = () => {
    const {id} = useParams()

    const [pokemon, setPokemon] = useState([])
    const [pokeName, setPokeName] = useState('')
    const [pokeImage, setPokeImage] = useState('')
    const [pokeAbilities, setPokeAbilities] = useState([])
    const [pokeTypes, setPokeTypes] = useState([])
    const [pokeMoves, setPokeMoves] = useState([])
    /* const [evolvesFrom, setEvolvesFrom] = useState([]) */
    
    /* const {evolvesTo, setEvolvesTo} = useState([]) */

    const [evolutionChainUrl, setEvolutionChainUrl] = useState([])
    const [initialForm, setInitialForm] = useState()
    const [midForm, setMidForm] = useState()
    const [finalForm, setFinalForm] = useState()

    useEffect(() => {
        getPokemonById(id)
            .then((res) => {
                setPokemon(res.data)
                setPokeName(res.data.name)
                setPokeImage(res.data.sprites.other.home.front_default)
                setPokeAbilities(res.data.abilities)
                setPokeTypes(res.data.types)
                setPokeMoves(res.data.moves)

                getEvolvesFromById(id)
                .then((res) => {
                    console.log(res.data)
                    /* setEvolvesFrom(res.data.evolves_from_species) */
                    setEvolutionChainUrl(res.data.evolution_chain.url)
                    let chainId = res.data.evolution_chain.url.split("/")[6]
                    getEvolvesTo(parseInt(chainId))
                    .then((res) => {
                        /* setEvolvesTo(res.data.chain.evolves_to[0].species.name) */
                        console.log(res.data.chain.species.name)
                        setInitialForm(res.data.chain.species.name)
                        console.log(res.data.chain.evolves_to[0].species.name)
                        setMidForm(res.data.chain.evolves_to[0].species.name)
                        console.log(res.data.chain.evolves_to[0].evolves_to[0].species.name)
                        setFinalForm(res.data.chain.evolves_to[0].evolves_to[0].species.name)
                    })
                })
                
            })
     
        // axios.get(baseUrl+`${id}`)
        //     .then((res) => {
        //         setPokemon(res.data)
        //         setPokeName(res.data.name)
        //         setPokeImage(res.data.sprites.other.home.front_default)
        //         setPokeAbilities(res.data.abilities)
        //         setPokeTypes(res.data.types)
        //         setPokeMoves(res.data.moves)
        //         /* setPokeEvol(res.data.species.url.evolution_chain.url.chain.evolution_details) */
        //     })

        // axios.get(evolutionUrl)
        //     .then((res) => {
        //         console.log(res.data)
        //         return res.data.results
        //     })
        //     .then((results) => {
        //         return Promise.all(
        //             results.map((res) =>
        //             axios.get(res.url))
        //         )
        //     })
        //     .then((results) => {
        //         setPokemon(results.map((res) =>res.data)
        //         )
        //     })    

    }, [id]);

    return (
        <div>
            <div className='nav-container' sx={12}>
                <NavBar/>
            </div>
            <div className='card-container' sx={12} sm={10} md={6} >
                <ImgMediaCard 
                pokemon={pokemon} 
                name = {pokeName}
                /* evolUrl = {evolutionChainUrl} */
                /* evolvesFrom = {evolvesFrom} */
                /* evolvesTo = {evolvesTo} */
                initialForm = {initialForm}
                midForm = {midForm}
                finalForm = {finalForm}
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
            <BackHomeButton/>
        </div>
    );
}

export default Description;