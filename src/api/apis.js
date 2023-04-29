import BASEURL from "./baseUrl"

const getPokemons = (page) => BASEURL.get(`/pokemon/?offset=${(page-1)*18}&limit=${18}`)

const getPokemonById = (name) => BASEURL.get(`/pokemon/${name}`)

const getChainIdById = (speciesId) => BASEURL.get(`/pokemon-species/${speciesId}`)

const getEvolutionChainById = (chainId) => BASEURL.get(`/evolution-chain/${chainId}`)


export {
    getPokemons,
    getPokemonById,
    getChainIdById,
    getEvolutionChainById
}
