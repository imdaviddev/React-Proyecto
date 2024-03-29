import React, { useMemo } from 'react'
import useGetPokemon from '../../hooks/useGetPokemon';
import { PokemonListItem } from '../../interfaces/PokemonListItem';
import { getMainPokemonType } from '../../util/getMainPokemonType';
import Label from '../shared/Label/Label';
import { capitilizeFirstLetter } from '../../util/capitilizeFirstLetter';
import FavoriteButton from '../shared/Button/FavoriteButton';
import { useNavigate } from 'react-router';

interface PokemonCardProps {
  pokemon?: PokemonListItem,
  pokemonId?: number,
}

const PokemonCard:React.FC<PokemonCardProps> = ({ pokemon, pokemonId }) => {
  const { pokemonData } = useGetPokemon(pokemon?.name, pokemonId);
  const mainType = useMemo(() => pokemonData && getMainPokemonType(pokemonData), [pokemonData]);
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/pokemon/${pokemon?.name}`)
  }

  return (
    <div className={`${mainType}-background w-56 h-56 rounded-lg shadow-lg p-4 relative cursor-pointer`}>
      <FavoriteButton pokemonId={pokemonData?.id ?? 0}/>
      <div className='flex flex-col items-center mx-auto' onClick={onClick}>
        <Label>
          {pokemonData?.name ? capitilizeFirstLetter(pokemonData?.name) : ""}
        </Label>
        <img 
          className='mx-auto w-40 h-40'
          src={pokemonData?.sprites.front_default} alt={pokemonData?.name} 
        />
      F</div>
    </div>
  )
}

export default PokemonCard