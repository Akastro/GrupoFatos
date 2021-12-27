import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Menu from '../components/Menu';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <meta charset="utf-8" />
      <meta name="theme-color" content="#000333" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#000333" />
      <meta name="msapplication-navbutton-color" content="#000333" />
      <meta name="msapplication-TileImage" content="https://grupofatos.com.br/contabilidade/wp-content/uploads/2017/01/cropped-logo-3-1-270x270.webp&quot;" />
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
      <meta name="google-site-verification" content="mNm2aKKa259yAhiAMdt1k7Ctm1WvsS-Gh5Xycgb_osc" />
      <meta name="description" content="Empresa de contabilidade com sede em São José dos Campos e unidade em São Paulo. Atende nacionalmente. Você merece um atendimento personalizado. Fale conosco!" />

        <title>Contabilidade em São Jose dos Campos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />



      <main className={styles.main}>
        <h1 className={styles.title}>
        Você merece uma contabilidade com atendimento personalizado.
         <a href="https://clique.grupofatos.com.br/abertura-de-empresa">
           ABRA SUA EMPRESA AQUI!</a>
        </h1>

       
      </main>
      <div class="container">
      <main class="container__main">


        <aside class="container__left">
        Exercitation anim consectetur fugiat proident nulla consectetur dolor.
        </aside>

        
        <article class="container__middle">
          Excepteur non in quis sint veniam.
        </article>

      
        <nav class="container__right">
          Aliquip consequat tempor duis excepteur labore ut sunt ullamco voluptate.
        </nav>
    </main>
    <div id="solucoes">
        teste
      </div>
    </div>



      <Footer />
 
      
    </div>
    
  )
}
