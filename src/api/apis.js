import BASEURL from "./baseUrl"

const getPokemons = (page) => BASEURL.get(`/pokemon/?offset=${(page-1)*20}&limit=${20}`)

const getPokemonById = (id) => BASEURL.get(`/pokemon/${id}`)

const getChainIdById = (speciesId) => BASEURL.get(`/pokemon-species/${speciesId}`)

const getEvolutionChainById = (chainId) => BASEURL.get(`/evolution-chain/${chainId}`)


export {
    getPokemons,
    getPokemonById,
    getChainIdById,
    getEvolutionChainById
}
