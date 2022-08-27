import React from 'react'
import Home from './pages/Home'
import FormContext from './pages/FormContext'
import StudyControl from './pages/StudyControl/index';
import ContentList from './pages/ContentLIst';
import Page404 from './pages/Page404';
import { Routes, BrowserRouter, Route } from 'react-router-dom'



const Rotas = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route element={ <Home/> } path="/" />
            <Route element={ <FormContext/> } path="/cadastro-conteudo" />
            <Route element={ <StudyControl/> } path="/controle-de-estudo" />
            <Route element={ <ContentList /> } path="/lista-de-conteudo" />
            <Route element={ <Page404 />} path="*" />

        </Routes>
        </BrowserRouter>
    )
}

export default Rotas