import * as React from 'react';
import style from './Home.module.css';
import Header from '../../components/Header';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className={style.Home}>
        <Header />
        
            <h1 className={style.Home__title}>Você precisa de ajuda para estudar?</h1>
            <div className={style.Home__content}>
            <p>Não sabe quantas horas por dia precisa se dedicar para determinado conteúdo para cumprir seus objetivos?</p>
            <p>Está com dificuldade em se organizar?</p>
            <p>Quer saber se está estudando o suficiente?</p>
            <p>Quer saber se está estudando certo?</p>
            <p>O <em>Orange Notes</em> está aqui para te ajudar!</p>
            </div>
        <div className={style.Home__button}>
        <Button variant="contained" color="primary">
            <Link to="/cadastro-conteudo" >
            Experimente
            </Link>
            </Button> 
        </div>
        </div>
    );
    }

export default Home;