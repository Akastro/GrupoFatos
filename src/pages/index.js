import React from 'react';
import {Button} from '@material-ui/core';
import Layout from '../components/layout';
import PrimeiraDobra from '../components/PrimeiraDobra';


export default function Home() {
  return (
    <div>

      <PrimeiraDobra />
          <Layout title="Contabilidade em São Jose dos Campos" />
        <h1>
          Bem vindo ao site  <a href="https://grupofatos.com.br">Grupo Fatos</a>
        </h1>

        <Button variant="text"color="primary">Botão</Button>
        <Button variant="contained" color="primary" href="#contained-buttons">Link</Button><span></span>
        <Button variant="outlined" color="secundary">Botão Sem cor</Button>

        
    </div>
    
  )
}
