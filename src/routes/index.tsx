import React from "react";
import { Route, Routes } from 'react-router-dom';

// Nos ayuda a ir cargando la vista segun sea necesario
const Pokedex = React.lazy(() => import('../views/Pokedex'));

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
    </Routes>
    </>
}

export default AppRoutes;