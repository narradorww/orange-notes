import React from 'react'
import Home from './pages/Home'
import { Routes, BrowserRouter, Route } from 'react-router-dom'



const Rotas = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route element={ <Home/> } path="/" />
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas