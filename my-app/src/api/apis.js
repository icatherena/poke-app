import BASEURL from "./baseUrl"

const getPokemons = () => BASEURL.get("/pokemon/?limit=1278")

const getPokemonById = (id) => BASEURL.get(`/pokemon/${id}`)

const getChainIdById = (speciesId) => BASEURL.get(`/pokemon-species/${speciesId}`)

const getEvolutionChainById = (chainId) => BASEURL.get(`/evolution-chain/${chainId}`)


export {
    getPokemons,
    getPokemonById,
    getChainIdById,
    getEvolutionChainById
}
