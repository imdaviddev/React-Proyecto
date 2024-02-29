import React from "react";
import { Route, Routes } from 'react-router-dom';
import PokemonInfo from "../components/PokemonInfo/PokemonInfo";

// Nos ayuda a ir cargando la vista segun sea necesario
const Pokedex = React.lazy(() => import('../views/Pokedex'));
const PokemonProfile = React.lazy(() => import('../views/PokemonProfile'));

// Aplicaion Principal con todas las Rutas
const AppRoutes = () => {

    return <>
    <Routes>
        <Route 
            path="/" 
            element={ 
            <React.Suspense fallback={ <div>Loading...</div>}>
                    <Pokedex />
            </React.Suspense>
        }/>
        <Route
            path="/pokemon/:pokemonName"
            element={
                <React.Suspense fallback={<div>Loading...</div>}>
                    <PokemonProfile />
                </React.Suspense>
            }
        />
    </Routes>
    </>
}

export default AppRoutes;