import React from 'react';
import useGetPokemonList from '../../hooks/useGetPokemonList';
import PokemonCard from '../PokemonCard/PokemonCard';

const PokemonList: React.FC = () => {
    const {pokemonList, goToNextPage, goToPreviousPage} = useGetPokemonList();


    return <>
        {
        pokemonList?.map((pokemon) => 
            <PokemonCard key={pokemon.name} pokemon={pokemon}/>)
        }
    </>
}

export default PokemonList;