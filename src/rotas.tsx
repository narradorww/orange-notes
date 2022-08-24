import React from 'react'
import Home from './pages/Home'
import FormContext from './pages/FormContext'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import StudyControl from './pages/StudyControl/index';




const Rotas = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route element={ <Home/> } path="/" />
            <Route element={ <FormContext/> } path="/cadastro-conteudo" />
            <Route element={ <StudyControl/> } path="/controle-de-estudo" />
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas