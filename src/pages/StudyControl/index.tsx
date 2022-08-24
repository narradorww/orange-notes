import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Cadernos from '../../assets/images/cadernos.png';
import Header from '../../components/Header';
import style from './StudyControl.module.css';


const StudyControl = () => {
    return(
        <>
        <Header/>
        <div className={style.image}>
            <img src={Cadernos} alt="Cadernos" />
        </div>
        <div className={style.StudyControl}>
            <Card sx={{width: '90%', justifyContent: 'center', backgroundColor: '#525863'}}>
            
            <CardContent sx={{display: 'flex', justifyContent: 'center'}}>
            <Typography sx={{ color: "#F2EBE7" }} variant="h6" component="div">
            Controle de Estudo
            </Typography>
            </CardContent>

            <CardContent sx={{display: 'flex',flexDirection:'column', justifyContent: 'center'}}>
            <TextField id="diasDeEstudo" variant="standard" label="Quantos dias você estuda por semana?" />
            <TextField id="horasDeEstudo" variant="standard" label="Quantas horas por dia?" />
               
            </CardContent>
            <CardContent sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" color="secondary">Configurar</Button>
            </CardContent>
            <CardContent sx={{display: 'flex',flexDirection:'column', justifyContent: 'center'}}>
                {/* //TODO: Criar um componente para exibir horas programadas de estudo */}
            </CardContent>    

            </Card>
            
        </div>
        </>    

    );
};

export default StudyControl;

