import Head from 'next/head';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <div>
      <Head>
      <meta charset="utf-8" />
      <meta name="author" content="Anselmo Lima - Grupo Fatos" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#000333" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#000333" />
      <meta name="msapplication-navbutton-color" content="#000333" />
      <meta name="msapplication-TileImage" content="https://grupofatos.com.br/contabilidade/wp-content/uploads/2017/01/cropped-logo-3-1-270x270.webp&quot;" />
      <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
      <meta name="google-site-verification" content="mNm2aKKa259yAhiAMdt1k7Ctm1WvsS-Gh5Xycgb_osc" />
      <meta name="description" content="Empresa de contabilidade com sede em São José dos Campos e unidade em São Paulo. Atende nacionalmente. Você merece um atendimento personalizado. Fale conosco!" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />" 

        <title>Contabilidade em São Jose dos Campos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <Menu />  
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
            <script src="custom.js"></script>
          <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo ao site  <a href="https://nextjs.org">Grupo Fatos</a>
        </h1>

        <p className={styles.description}>
        Robôs de alta produtividade ao alcance de pequenos escritórios.{' '}
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
