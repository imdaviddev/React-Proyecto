import { create } from 'zustand';

interface FavoriteStore {
    favorites: string[],
    addFavorite: (id: string) => void,
    deleteFavorite: (id: string) => void,
}

const FAVORITESPOKEMONS_KEY = "favorites-pokemons";

export const useFavoriteStore = create<FavoriteStore>((set) => ({
    favorites: localStorage.getItem(FAVORITESPOKEMONS_KEY)?.split(",") || [],
    addFavorite: (id: string) => {
        set((state : any) => {
            const favorites = [...state.favorites, id];
            localStorage.setItem(FAVORITESPOKEMONS_KEY, favorites.join(","));
            return { favorites };
        })
    },
    deleteFavorite: (id: string) => {
        set((state : any) => {
            const favorites = state.favorites.filter((favorite: string) => favorite !== id);
            localStorage.setItem(FAVORITESPOKEMONS_KEY, favorites.join(","));
            return { favorites };
        })
    }
  }))