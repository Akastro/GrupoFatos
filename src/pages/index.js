import React from 'react';
import PrimeiraDobra from '../components/PrimeiraDobra';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import {Button} from '@material-ui/core'



export default function Home() {
  return (
    <div>
         
          <Menu />  
          <PrimeiraDobra />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script src="custom.js"></script>
          <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo ao site  <a href="https://nextjs.org">Grupo Fatos</a>
        </h1>

        <Button color="primary"></Button>

        <p className={styles.description}>
        Você merece uma contabilidade com atendimento personalizado.{' '}
          <code className={styles.code}>Saiba mais aqui</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
          </div>
        </main>


          <div className={styles.container}>
          <div id="solucao">
            <h1>Soluções</h1>
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem </div>  
            <div id="contabilidade">
              <h1>Contabilidade Digital</h1>
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem </div> 
            <div id="servicos">
              <h1>Nossos Serviços</h1>
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip
            Lorem </div> 
            </div>
          <Footer />
    </div>
    
  )
}
