import * as React from 'react';
import style from './Header.module.css'
import Laranjinha from '../../assets/images/laranjinha.png'
import  MenuIcon  from '@mui/icons-material/Menu';


const Header = () => {
    return (
        <div className={style.header}>
        <img src={Laranjinha} alt="Laranjinha" />
        <h1>Orange Notes</h1>
        <MenuIcon sx={{fontSize: 36}} />
        </div>
    )
    }

export default Header

