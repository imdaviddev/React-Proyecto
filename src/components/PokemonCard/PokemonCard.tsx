import React from 'react'
import useGetPokemon from '../../hooks/useGetPokemon';
import { PokemonListItem } from '../../interfaces/PokemonListItem';

interface PokemonCardProps {
  pokemon?: PokemonListItem,
  pokemonId?: number,
}

const PokemonCard:React.FC<PokemonCardProps> = ({ pokemon, pokemonId }) => {
  const { pokemonData } = useGetPokemon(pokemon?.name, pokemonId);


  return (
    <div className='w-56 h-56 rounded-lg shadow-lg p-4'>
      <div className='flex flex-col items-center mx-auto'>
        <span>
          {pokemonData?.name ?? ""}
        </span>
        <img 
          className='mx-auto w-40 h-40'
          src={pokemonData?.sprites.front_default} alt={pokemonData?.name} 
        />
      </div>
    </div>
  )
}

export default PokemonCard