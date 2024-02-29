import React from 'react'
import { useMemo } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import { useFavoriteStore } from '../../../store/useFavoriteStore';

interface FavoriteButtonProps {
    pokemonId: number,
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ pokemonId }) => {
  const [favorites, addFavorites, delteFavorites] = useFavoriteStore((state) => [state.favorites, state.addFavorite, state.deleteFavorite] );
  const isFavorite = useMemo(() =>  favorites.includes(pokemonId.toString()), [favorites, pokemonId]);
  const onClick = () => {
    const idToModify = pokemonId.toString();
    isFavorite ? delteFavorites(idToModify) : addFavorites(idToModify);
  }

  return (
    <button 
        className='bg-white p-1 rounded-full absolute top-2 left-2'
        onClick={onClick}
    >
        {isFavorite ?
            <FaHeart fill='#ef4444'/> :
            <FaRegHeart fill='#ef4444' />
        }
    </button>
  )
}

export default FavoriteButton;