import * as React from 'react';
import style from './CardContent.module.css'
import Card from 'material-ui/Card';


const CardContent = () => {
    return(
        <Card className={style.CardContent}>
            <div className={style.CardContent}>
            <p>Conteúdo</p>
            </div>
        </Card>
    );
}

