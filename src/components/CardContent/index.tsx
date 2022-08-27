import * as React from 'react';
import style from './CardContent.module.css'
import Card from "@mui/material/Card";
import {content1}  from '../../mockContent'



const CardContent = () => {
    return(
        <Card sx={{}}className={style.CardContent} key={content1.id}>
<div className={style.CardContent__context}>{content1.context}</div>
<div className={style.CardContent__content}>{content1.content}</div>
<div className={style.CardContent__timeCourse}>{content1.timeCourse} H </div>
<h3>Progresso no Curso</h3>
<p>XXXXXXXXXXXXXXX00000</p>

        </Card>
    );
}


export default CardContent;


