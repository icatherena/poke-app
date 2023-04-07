import BASEURL from "./baseUrl"

const getPokemons = () => BASEURL.get("/pokemon/?limit=1278")

const getPokemonById = (id) => BASEURL.get(`/pokemon/${id}`)

const getIdChainById = (id) => BASEURL.get(`/pokemon-species/${id}`)

const getEvolutionChainById = (chainId) => BASEURL.get(`/evolution-chain/${chainId}`)


export {
    getPokemons,
    getPokemonById,
    getIdChainById,
    getEvolutionChainById
}
