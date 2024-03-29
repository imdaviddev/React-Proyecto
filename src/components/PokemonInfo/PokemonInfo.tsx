import React, { useMemo } from 'react'
import useGetPokemon from '../../hooks/useGetPokemon'
import { useParams } from 'react-router';
import { getMainPokemonType } from '../../util/getMainPokemonType';
import { capitilizeFirstLetter } from '../../util/capitilizeFirstLetter';
import { convertLbsToKg } from '../../util/convertLbsToKg';
import { convertInchesToCm } from '../../util/convertInchesToCm';
import PokemonSprites from '../PokemonSprites/PokemonSprites';

interface PokemonInfoProps{

}

const PokemonInfo = () => {
  const {pokemonName} = useParams();
  const { pokemonData } = useGetPokemon(pokemonName);
  const mainType = useMemo(() => 
    pokemonData && getMainPokemonType(pokemonData), [pokemonData]
  )

  return (
    <div className='flex flex-row justify-between shadow-lg bg-gray-100 rounded-lg'>
      <div className={`${mainType}-background w-72 h-72 rounded-l-lg items-center`}>
        <img 
          src={`${pokemonData?.sprites.front_default}`}  
          alt={pokemonData?.name ?? ""}
          className='mx-auto w-72 h-72' 
        />
        </div>  
        <div className='flex flex-col grow p-5 gap-3'>
          <h1 className='text-3x1'>{capitilizeFirstLetter(pokemonData?.name ?? "")}</h1>
          <span>{`Weight: ${convertLbsToKg(pokemonData?.weight) ?? 0} kg`}</span>
          <span>{`Height: ${convertInchesToCm(pokemonData?.height) ?? 0} cm`}</span>
          <PokemonSprites pokemonName={pokemonName} />
        </div>
    </div>
  )
}

export default PokemonInfo