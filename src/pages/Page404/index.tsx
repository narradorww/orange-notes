import * as React from 'react';
import Header from '../../components/Header';
import style from './Page404.module.css';
import OrangeSad from '../../assets/images/404error.png';

const Page404 = () => {
    return(
        <>
        <Header />
        <div className={style.image}>
            <img src={OrangeSad} alt="Laranja Triste " />
        </div>
        </>
    );
};

export default Page404;
