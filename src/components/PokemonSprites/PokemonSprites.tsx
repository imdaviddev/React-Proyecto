import React from 'react'
import useGetPokemon from '../../hooks/useGetPokemon'

interface PokemonSpritesProps {
    pokemonName: string,
}

const PokemonSprites: React.FC<PokemonSpritesProps> = ({ pokemonName }) => {
 const { pokemonData } = useGetPokemon(pokemonName);

  return <>
    <div className='flex flex-row grow'>
        <div className='flex flex-col gap-3'>
            <h6 className='text-2x1 text-center'>Normal</h6>
            <div className='flex'>
                <img src={pokemonData?.sprites?.front_default} alt={pokemonData?.name ?? ""} className='mx-auto w-20'/>
                <img src={pokemonData?.sprites?.back_default} alt={pokemonData?.name ?? ""} className='mx-auto w-20'/>
            </div>
        </div>
        <div className='flex flex-col gap-3'>
            <h6 className='text-2x1 text-center'>Shiny</h6>
            <div className='flex justify-center items-center'>
                <img src={pokemonData?.sprites?.front_shiny} alt={pokemonData?.name ?? ""} className='mx-auto w-20'/>
                <img src={pokemonData?.sprites?.back_shiny} alt={pokemonData?.name ?? ""} className='mx-auto w-20'/>
            </div>
        </div>
    </div>
  </>
}

export default PokemonSprites