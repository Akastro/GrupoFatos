import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contabilidade em São Jose dos Campos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Você merece uma contabilidade com atendimento personalizado.
         <a href="https://clique.grupofatos.com.br/abertura-de-empresa">
           ABRA SUA EMPRESA!</a>
        </h1>

       
      </main>

      <main class="container__main">
        
        <aside class="container__left">...</aside>

        
        <article class="container__middle">...</article>

      
        <nav class="container__right">...</nav>
    </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
