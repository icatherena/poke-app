import BASEURL from "./baseUrl"

const getPokemons = () => BASEURL.get("/pokemon/")

const getPokemonById = (id) => BASEURL.get(`/pokemon/${id}`)

const getEvolvesFromById = (id) => BASEURL.get(`/pokemon-species/${id}`)

const getEvolvesTo = (chainId) => BASEURL.get(`/evolution-chain/${chainId}`)


export {
    getPokemons,
    getPokemonById,
    getEvolvesFromById,
    getEvolvesTo
}
