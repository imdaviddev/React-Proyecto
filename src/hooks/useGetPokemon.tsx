import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../constants/url";
import { PokemonData } from "../interfaces/PokemonData";


const useGetPokemon = (pokemonName?: string, pokemonId?: number) => {
    const {data: pokemonData, isLoading, error} = useQuery<PokemonData>({
        queryKey: ['pokemon', pokemonName, pokemonId],
        queryFn: async () => {
            const response = await fetch(`${BASE_URL}/pokemon/${pokemonName ?? pokemonId}`);
            if (!response.ok){
                throw new Error('Network reponse was not ok')
            }
            const data = await response.json();
            console.log(data)
            return data;
        }
    });

    console.log(pokemonData);

    return {
        pokemonData,
        isLoading, 
        error: error?.message ?? null,
    }
} 

export default useGetPokemon;