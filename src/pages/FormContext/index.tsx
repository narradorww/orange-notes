import React from "react";
import Header from "../../components/Header";
import Card from "@mui/material/Card";
import { Button, CardContent, TextField, Typography } from "@mui/material";
import OrangeJuice from "../../assets/images/orange_juice.png";
import style from "./FormContext.module.css";

const FormContext = () => {
  return (
    <>
      <Header />
      <div className={style.image}>
        <img src={OrangeJuice} alt="Orange Juice" />
      </div>
      <div className={style.FormContext}>
        <Card
          sx={{
            width: "90%",
            justifyContent: "center",
            backgroundColor: "#525863",
          }}
        >
          <CardContent sx={{ display: "flex", justifyContent: "center" }}>
            <Typography sx={{ color: "#F2EBE7" }} variant="h6" component="div">
              Cadastro de Conteúdo
            </Typography>
          </CardContent>
          <CardContent sx={{ display: "flex", flexDirection:'column', justifyContent: "center" }}>
            <TextField id="contexto" variant="standard" label="Contexto" />
            <TextField id="materia" variant="standard" label="Matéria" />
            <TextField id="linkDoCurso" variant="standard" label="Link do Curso" />
            <TextField id="tempoDeEstudo" variant="standard" label="Tempo do Curso" />
            <TextField id="imageUrl" variant="standard" label="Imagem do Curso" />
          </CardContent>  
          <CardContent sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" color="secondary">Cadastrar</Button>
            </CardContent>

        </Card>
      </div>
    </>
  );
};

export default FormContext;
