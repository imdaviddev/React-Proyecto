import { PokemonData } from '../interfaces/PokemonData';

export const getMainPokemonType = (pokemon: PokemonData) : string => {
    return pokemon.types.find(type => type.slot === 1).type.name;
}