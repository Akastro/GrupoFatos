import React from 'react';
import {Button} from '@material-ui/core'

export default function Home() {
  return (
    <div>
          
        <h1>
          Bem vindo ao site  <a href="https://grupofatos.com.br">Grupo Fatos</a>
        </h1>

        <Button variant="text"color="primary">Botão</Button>
        <Button variant="contained" color="primary" href="#contained-buttons">Link</Button><span></span>
        <Button variant="outlined" color="secundary">Botão Sem cor</Button>

        
    </div>
    
  )
}
